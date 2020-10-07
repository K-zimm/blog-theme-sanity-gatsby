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
                  buildHookId: '5f7d2472d6a5a034651b7e2f',
                  title: 'Sanity Studio',
                  name: 'blog-theme-sanity-gatsby-studio',
                  apiId: '6b97c5f4-fe5f-4de3-9d1b-f2ac04997a65'
                },
                {
                  buildHookId: '5f7d24725b9435301f435aa1',
                  title: 'Blog Website',
                  name: 'blog-theme-sanity-gatsby',
                  apiId: 'ba52fa2f-bfdf-4c20-bf9e-388276495012'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/K-zimm/blog-theme-sanity-gatsby',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://blog-theme-sanity-gatsby.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
