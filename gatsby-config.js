module.exports = {
    siteMetadata: {
      title: "Blog title",
      description: "Gatsby Starter with MDX supported",
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `blog`,
          path: `${__dirname}/src/blog/`,
        },
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          gatsbyRemarkPlugins: [
          ],
        },
      },
    ],
  };
  