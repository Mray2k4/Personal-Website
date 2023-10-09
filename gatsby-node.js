
const path = require('path')

exports.createPages = async ({graphql, actions}) => {

    const {data} = await graphql(`
    query Projects {
        allMarkdownRemark {
          nodes {
            frontmatter {
              paths
            }
          }
        }
      }
    `)
    
    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: '/projects' + node.frontmatter.paths,
            component:  path.resolve('./src/templates/project-details.js'),
            context: {paths: node.frontmatter.paths}
        })
      })


}