/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import React from 'react';
import {graphql} from 'gatsby';
// import {Grommet} from 'grommet';
import Base from './base';
import {RawHTML} from '../utils/utils';
import TutorialNavigator from '../components/tutorialNavigator';

import '../styles/tutorialPageTemplate.scss';
import '../styles/codeHighlight.scss';

export default function BaseTemplate({data}: {data: any}) {
  const tutorialItems = data.allMarkdownRemark.nodes
      .map((item: {frontmatter: any}) => item.frontmatter);
  const active: number = data.markdownRemark.frontmatter.id;
  return (
    <Base>
      <div className="pageContainer">
        <TutorialNavigator items={tutorialItems} active={active} />
        <div className="markdownContent">
          <RawHTML content={data.markdownRemark.html} />
        </div>
      </div>
    </Base>
  );
}

export const query = graphql`
  query GetMarkdown($id: Int! = 1) {
    markdownRemark(frontmatter: {id: {eq: $id}}) {
      html
      frontmatter {
        id
      }
    }
    allMarkdownRemark(sort: {fields: frontmatter___id}) {
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
