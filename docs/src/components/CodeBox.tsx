/*
  This component is a code block with syntax highlight.
*/
import React from "react";
import { Card, ResponsiveEmbed } from "react-bootstrap";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { ghcolors as theme } from "react-syntax-highlighter/dist/esm/styles/prism";

import "../styles/base.scss";

export default function CodeBox(
  props: React.PropsWithChildren<{
    language?: string;
    children: string;
  }>
) {
  return (
    <Card className="shadow-sm h-auto p-2 rounded-lg">
      <SyntaxHighlighter
        language={props.language ?? "javascript"}
        style={theme}
        customStyle={{border: '0px'}}
        wrapLongLines
        className="p-3"
      >
        {props.children}
      </SyntaxHighlighter>
    </Card>
  );
}
