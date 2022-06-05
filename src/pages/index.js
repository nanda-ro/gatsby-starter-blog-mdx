import React from "react"
import { graphql, Link } from "gatsby"

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata
  const { posts } = data.blog

  return (
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          {posts.map(post => (
            <article key={post.node.id}>
              <Link to={`/blog/${post.node.slug}/`}>
                <h2>{post.node.frontmatter.title}</h2>
              </Link>
              <small>
                {post.node.frontmatter.author}, {post.node.frontmatter.date}
              </small>
              <p>{post.node.excerpt}</p>
            </article>
          ))}
        </div>
  )
}

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    blog: allMdx {
      posts: edges {
        node {
          slug
          frontmatter {
            date(fromNow: true)
            title
            author
          }
          excerpt
          id
        }
      }
    }
  }
`
