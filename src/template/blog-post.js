import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

export default function BlogPost({ data }) {
  const post = data.mdx

  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <small>{post.frontmatter.date}</small>
      <MDXProvider>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}

export const query = graphql`
  query BlogQuery($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        date
      }
    }
  }
`
