/**
 * Seed script for Payload CMS
 * Loads data from veb-dev-studio project
 * 
 * Usage: pnpm seed
 */

import dotenv from 'dotenv'
import { resolve } from 'path'

// Load .env file FIRST, before importing config
dotenv.config({ path: resolve(process.cwd(), '.env') })

// Now import after env is loaded
import { getPayload } from 'payload'
import config from '../payload.config'
import { seedProjects } from './seedProjects'
import { seedArticles } from './seedArticles'
import { seedServices } from './seedServices'
import { seedFAQ } from './seedFAQ'
import { seedSteps } from './seedSteps'
import { seedSiteSettings } from './seedSiteSettings'
import { seedHomePage } from './seedHomePage'

async function seed() {
  console.log('🌱 Starting seed process...')
  
  // Check required env variables
  console.log('📋 Checking environment variables...')
  console.log('  PAYLOAD_SECRET:', process.env.PAYLOAD_SECRET ? '✅ Set' : '❌ Missing')
  console.log('  DATABASE_URI:', process.env.DATABASE_URI ? `✅ Set (${process.env.DATABASE_URI.substring(0, 30)}...)` : '❌ Missing')
  
  if (!process.env.PAYLOAD_SECRET) {
    console.error('❌ PAYLOAD_SECRET is not set in .env file')
    console.error('   Please add PAYLOAD_SECRET=your-secret-key to .env file')
    process.exit(1)
  }
  if (!process.env.DATABASE_URI) {
    console.error('❌ DATABASE_URI is not set in .env file')
    process.exit(1)
  }

  try {
    // Ensure env vars are available for config
    if (!process.env.PAYLOAD_SECRET || !process.env.DATABASE_URI) {
      throw new Error('Required environment variables are missing')
    }
    
    // Import config dynamically after env is loaded
    const { default: config } = await import('../payload.config')
    const payload = await getPayload({ config })

    // Seed in order (dependencies first)
    console.log('\n📦 Seeding Projects...')
    await seedProjects(payload)

    console.log('\n📝 Seeding Articles...')
    await seedArticles(payload)

    console.log('\n🛠️ Seeding Services...')
    await seedServices(payload)

    console.log('\n❓ Seeding FAQ...')
    await seedFAQ(payload)

    console.log('\n👣 Seeding Steps...')
    await seedSteps(payload)

    console.log('\n⚙️ Seeding Site Settings...')
    await seedSiteSettings(payload)

    console.log('\n🏠 Creating Homepage...')
    await seedHomePage(payload)

    console.log('\n✅ Seed completed successfully!')
    process.exit(0)
  } catch (error) {
    console.error('❌ Seed failed:', error)
    process.exit(1)
  }
}

seed()
