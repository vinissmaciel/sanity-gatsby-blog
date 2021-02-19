import {format} from 'date-fns'

export default {
    name: 'produto',
    type: 'document',
    title: 'Produtos',
    fields: [
      {
        name: 'nome',
        type: 'string',
        title: 'Nome do produto',
        description: 'Digite o nome do produto'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'nome',
          maxLength: 96
        }
      },
      {
        name: 'publishedAt',
        type: 'datetime',
        title: 'Published at',
        description: 'This can be used to schedule post for publishing'
      },
      {
        name: 'mainImage',
        type: 'mainImage',
        title: 'Main image'
      },
      {
        name: 'excerpt',
        type: 'excerptPortableText',
        title: 'Excerpt',
        description:
          'This ends up on summary pages, on Google, when people share your post in social media.'
      },
      {
        name: 'body',
        type: 'bodyPortableText',
        title: 'Body'
      },
      {
        name: 'price',
        type: 'number',
        title: 'Preço'
      }
    ],
    orderings: [
      {
        name: 'publishingDateAsc',
        title: 'Publishing date new–>old',
        by: [
          {
            field: 'publishedAt',
            direction: 'asc'
          }
        ]
      },
      {
        name: 'publishingDateDesc',
        title: 'Publishing date old->new',
        by: [
          {
            field: 'publishedAt',
            direction: 'desc'
          }
        ]
      }
    ],
    preview: {
        select: {
          title: 'nome',
          publishedAt: 'publishedAt',
          slug: 'slug',
          media: 'mainImage'
        },
        prepare ({title = 'No title', publishedAt, slug = {}, media}) {
          const dateSegment = format(publishedAt, 'YYYY/MM')
          const path = `/${dateSegment}/${slug.current}/`
          return {
            title,
            media,
            subtitle: publishedAt ? path : 'Missing publishing date'
          }
        }
      }
}
  