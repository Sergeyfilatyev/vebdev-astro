/**
 * Helper functions for seed scripts
 */

/**
 * Convert plain text to Lexical richText format
 */
export function textToLexical(text: string) {
  return {
    root: {
      children: [
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: text,
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'paragraph',
          version: 1,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
    },
  }
}

/**
 * Convert HTML-like content array to Lexical format
 * This is a simplified version - for complex content, manual conversion may be needed
 */
export function contentArrayToLexical(content: Array<{ type: string; value: string | string[] }>) {
  const children: any[] = []

  for (const item of content) {
    if (item.type === 'p') {
      children.push({
        children: [
          {
            detail: 0,
            format: 0,
            mode: 'normal',
            style: '',
            text: typeof item.value === 'string' ? item.value : item.value.join(' '),
            type: 'text',
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'paragraph',
        version: 1,
      })
    } else if (item.type === 'h2') {
      children.push({
        children: [
          {
            detail: 0,
            format: 0,
            mode: 'normal',
            style: '',
            text: typeof item.value === 'string' ? item.value : item.value.join(' '),
            type: 'text',
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        tag: 'h2',
        type: 'heading',
        version: 1,
      })
    } else if (item.type === 'ul') {
      const listItems = Array.isArray(item.value) ? item.value : []
      const listChildren = listItems.map((li: string) => ({
        children: [
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: li,
                type: 'text',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'listitem',
            version: 1,
            value: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'list',
        version: 1,
        listType: 'bullet',
        start: 1,
      }))
      children.push(...listChildren)
    }
  }

  return {
    root: {
      children,
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
    },
  }
}
