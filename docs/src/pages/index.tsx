// eslint-disable-next-line no-unused-vars
import React from "react";
import { graphql } from "gatsby";
import "../styles/base.scss";

import CodeBox from '../components/CodeBox';
import HomeCodeBox from '../components/HomeCodeBoxes';
import Template from "../templates/DefaultPage";

export const query = graphql`
  query ExamplesQuery {
    allPlainText {
      nodes {
        content
        parent {
          ... on File {
            name
          }
        }
      }
    }
  }
`;

type QueryData = {allPlainText: {nodes: Array<{content: string, parent: {name: string}}>}};

export default function (props: {data: QueryData}) {
  const jsonContent = props.data.allPlainText.nodes.find((item) => item.parent.name === 'json').content;
  const jsonCodeBox = <CodeBox>{jsonContent}</CodeBox>;

  const stringContent = props.data.allPlainText.nodes.find((item) => item.parent.name === 'string').content;
  const stringCodeBox = <CodeBox>{stringContent}</CodeBox>;

  const bufferContent = props.data.allPlainText.nodes.find((item) => item.parent.name === 'buffer').content;
  const bufferCodeBox = <CodeBox>{bufferContent}</CodeBox>;

  return (
    <Template pageTitle="nnLoader">
        <HomeCodeBox title="Strings" codebox={stringCodeBox} link='/docs/strings'>
          You can easily load your files as strings. YAML? TOML? Let the strings rule them all!
        </HomeCodeBox>
        <HomeCodeBox title="JSON" codebox={jsonCodeBox} link='/docs/json'>
          If you want some syntatic sugar you can use the JSON loader to get some nice objects directly.
        </HomeCodeBox>
        <HomeCodeBox title="Buffers" codebox={bufferCodeBox} link='/docs/buffer'>
          If nothing else works, unleash your binary magician skills with NodeJS Buffers!
        </HomeCodeBox>
    </Template>
  );
}
