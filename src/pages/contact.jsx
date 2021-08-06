import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SectionContact from '../components/section-contact'

const Index = ({ data }) => {
    const posts = data.allMarkdownRemark.edges;
    const noBlog = !posts || !posts.length;

  return (
    <Layout>
      <SEO title="Contact" />
      <Header metadata={data.site.siteMetadata} noBlog={noBlog} />
      {<SectionContact />}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
        cv
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
