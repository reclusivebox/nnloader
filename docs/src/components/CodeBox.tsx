/*
  This component is a code block with syntax highlight.
*/
import React from "react";
import { Card, ResponsiveEmbed } from "react-bootstrap";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { ghcolors as theme } from "react-syntax-highlighter/dist/esm/styles/prism";

import "bootstrap/scss/bootstrap.scss";

export default function CodeBox(
  props: React.PropsWithChildren<{
    language?: string;
    children: string;
  }>
) {
  return (
    <Card className="shadow-sm h-auto p-2">
      <SyntaxHighlighter
        language={props.language ?? "javascript"}
        style={theme}
        customStyle={{border: '0px'}}
        wrapLines
        className="p-3"
      >
        {props.children}
      </SyntaxHighlighter>
    </Card>
  );
}
