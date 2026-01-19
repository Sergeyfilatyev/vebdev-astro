/**
 * Reusable hooks for collections that affect frontend
 * Note: Automatic deployment has been removed. Use the manual "Deploy Frontend" button in the admin panel.
 */

import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

/**
 * Hook to trigger frontend rebuild after collection changes
 * Use this for collections that affect the frontend (Pages, Articles, Media, etc.)
 * 
 * NOTE: This hook no longer triggers automatic deployments.
 * Administrators should use the "Deploy Frontend" button in the admin panel after making changes.
 */
export const createFrontendRebuildHooks = (options?: {
  /**
   * Only trigger rebuild if document has this status
   * Useful for Pages/Articles where only published items should trigger rebuild
   * 
   * NOTE: This option is kept for future use but currently does nothing.
   */
  triggerOnlyIfStatus?: string
}): {
  afterChange: CollectionAfterChangeHook[]
  afterDelete: CollectionAfterDeleteHook[]
} => {
  return {
    afterChange: [
      async ({ doc, operation, collection }) => {
        // Automatic deployment removed - use manual "Deploy Frontend" button
        console.log(`[Frontend Rebuild Hook] afterChange triggered for collection: ${collection?.slug || 'unknown'}`)
        console.log(`[Frontend Rebuild Hook] Operation: ${operation}`)
        console.log(`[Frontend Rebuild Hook] Note: Use the "Deploy Frontend" button to trigger a rebuild`)
      },
    ],
    afterDelete: [
      async () => {
        // Automatic deployment removed - use manual "Deploy Frontend" button
        console.log(`[Frontend Rebuild Hook] afterDelete triggered`)
        console.log(`[Frontend Rebuild Hook] Note: Use the "Deploy Frontend" button to trigger a rebuild`)
      },
    ],
  }
}
