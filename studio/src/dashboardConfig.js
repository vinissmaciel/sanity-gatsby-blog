export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '602d7b50586cbd4ef902ba0c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-zgvfk4ok',
                  apiId: '1d45f0ce-108b-4035-b023-b0635a07db6b'
                },
                {
                  buildHookId: '602d7b5037aefc38ae51458d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-datvqopi',
                  apiId: 'dcfacc98-e320-4a2e-964b-96f378b500eb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vinissmaciel/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-datvqopi.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    },
    {
      name: 'document-list',
      options: { title: 'Produtos', order: '_createdAt desc', types: ['produto'] },
      layout: { width: 'medium' }
    }
  ]
}
