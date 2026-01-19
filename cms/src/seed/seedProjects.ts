import type { Payload } from 'payload'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { textToLexical } from './helpers'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const projectsData = JSON.parse(
  readFileSync(join(__dirname, '../../../../veb-dev-studio/src/lib/db/projects.json'), 'utf-8')
)

export async function seedProjects(payload: Payload) {
  const projects = projectsData as Array<{
    translations: {
      en?: { title: string; subtitle?: string; description: string; advantages?: string }
      ru?: { title: string; subtitle?: string; description: string; advantages?: string }
      uk?: { title: string; subtitle?: string; description: string; advantages?: string }
    }
    url: string
    image: string
    slug: string
  }>

  for (const project of projects) {
    try {
      // Check if project already exists
      const existing = await payload.find({
        collection: 'projects',
        where: {
          slug: {
            equals: project.slug,
          },
        },
        limit: 1,
      })

      if (existing.docs.length > 0) {
        console.log(`  ⏭️  Project "${project.slug}" already exists, skipping...`)
        continue
      }

      // Create project with localized fields
      const projectData: any = {
        slug: project.slug,
        url: project.url,
        featured: false,
        order: 0,
        // Image will be added later manually or via Media upload
        // For now, we skip projects without images or make image optional
      }

      // Add localized fields - must fill all locales (uk, ru, en)
      // Use fallback: uk -> ru -> en
      const titleUk = project.translations.uk?.title || project.translations.ru?.title || project.translations.en?.title || ''
      const titleRu = project.translations.ru?.title || project.translations.uk?.title || project.translations.en?.title || ''
      const titleEn = project.translations.en?.title || project.translations.uk?.title || project.translations.ru?.title || ''
      
      projectData.title = {
        uk: titleUk,
        ru: titleRu,
        en: titleEn,
      }

      if (project.translations.uk?.subtitle || project.translations.ru?.subtitle || project.translations.en?.subtitle) {
        projectData.subtitle = {
          uk: project.translations.uk?.subtitle || project.translations.ru?.subtitle || project.translations.en?.subtitle || '',
          ru: project.translations.ru?.subtitle || project.translations.uk?.subtitle || project.translations.en?.subtitle || '',
          en: project.translations.en?.subtitle || project.translations.uk?.subtitle || project.translations.ru?.subtitle || '',
        }
      }

      if (project.translations.uk?.description || project.translations.ru?.description || project.translations.en?.description) {
        const descUk = project.translations.uk?.description || project.translations.ru?.description || project.translations.en?.description || ''
        const descRu = project.translations.ru?.description || project.translations.uk?.description || project.translations.en?.description || ''
        const descEn = project.translations.en?.description || project.translations.uk?.description || project.translations.ru?.description || ''
        
        projectData.description = {
          uk: textToLexical(descUk),
          ru: textToLexical(descRu),
          en: textToLexical(descEn),
        }
      }

      if (project.translations.uk?.advantages || project.translations.ru?.advantages || project.translations.en?.advantages) {
        projectData.advantages = {
          uk: project.translations.uk?.advantages || project.translations.ru?.advantages || project.translations.en?.advantages || '',
          ru: project.translations.ru?.advantages || project.translations.uk?.advantages || project.translations.en?.advantages || '',
          en: project.translations.en?.advantages || project.translations.uk?.advantages || project.translations.ru?.advantages || '',
        }
      }
      
      // Skip image for now - it's required but we don't have Media IDs yet
      // Projects will need images uploaded manually
      console.log(`  ⚠️  Skipping project "${project.slug}" - image field is required but not available in seed data`)
      continue

      // Note: Image upload will need to be handled separately
      // For now, we'll skip the image field or create a placeholder
      // TODO: Upload images from veb-dev-studio/static/images to Media collection

      const created = await payload.create({
        collection: 'projects',
        data: projectData,
      })

      console.log(`  ✅ Created project: ${project.slug}`)
    } catch (error: any) {
      console.error(`  ❌ Failed to create project "${project.slug}":`, error.message)
    }
  }
}
