import React from "react";
import { graphql } from "gatsby";
import { DocContent } from "../components/DocContent";

import "../../node_modules/prism-themes/themes/prism-ghcolors.css";

export const query = graphql`
  query MyQuery($id: Int) {
    markdownRemark(frontmatter: { id: { eq: $id } }) {
      html
      frontmatter {
        title
        path
        id
      }
    }
    allMarkdownRemark {
      nodes {
        frontmatter {
          id
          path
          title
        }
      }
    }
  }
`;

type FrontMatter = { title: string; path: string; id: number };
type QueryResult = {
  markdownRemark: {
    html: string;
    frontmatter: FrontMatter;
  };
  allMarkdownRemark: {
    nodes: Array<{
      frontmatter: FrontMatter;
    }>;
  };
};
type DocPageProps = React.PropsWithChildren<{ data: QueryResult }>;

export default function DocPage(props: DocPageProps) {
  const links = {};
  props.data.allMarkdownRemark.nodes.forEach(
    ({ frontmatter }: { frontmatter: FrontMatter }) => {
        links[frontmatter.title] = frontmatter.path;
    }
  );

  const active = props.data.markdownRemark.frontmatter.title;

  return (
      <DocContent links={links} activeItem={active}>
        <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}} />
      </DocContent>
  );
}
