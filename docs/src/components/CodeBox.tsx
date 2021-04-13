/*
  This component is a code block with syntax highlight.
*/
import React from "react";
import { Card, ResponsiveEmbed } from "react-bootstrap";
import SyntaxHighlighter from "react-syntax-highlighter";
import { xcode as theme } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
        wrapLines
        className="p-3"
      >
        {props.children}
      </SyntaxHighlighter>
    </Card>
  );
}
