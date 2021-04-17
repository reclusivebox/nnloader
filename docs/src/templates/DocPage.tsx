import React from "react";
import { graphql } from "gatsby";
import { DocContent } from "../components/DocContent";
import Template from './DefaultPage';

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
  const entries: Array<[number, string, string]> = props.data.allMarkdownRemark.nodes.map(
    ({ frontmatter }: { frontmatter: FrontMatter }) => {
        return [frontmatter.id, frontmatter.title, frontmatter.path];
    }
  );
  entries.sort((a, b) => a[0] - b[0]);

  const active = props.data.markdownRemark.frontmatter.title;

  return (
    <Template>
      <div className="mx-2 mx-md-5">
        <DocContent links={entries} activeItem={active}>
          <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}} />
        </DocContent>
      </div>
    </Template>
  );
}
