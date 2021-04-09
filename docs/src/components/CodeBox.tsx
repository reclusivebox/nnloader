import React from "react";
import { Card, ResponsiveEmbed } from "react-bootstrap";

import "bootstrap/scss/bootstrap.scss";


export default function CodeBox(
  props: React.PropsWithChildren<{
    language?: string;
    children: string;
  }>
) {
  return (
    <ResponsiveEmbed aspectRatio="4by3">
      <Card className="bg-white rounded-5 w-100 h-auto p-3 shadow-sm overflow-auto">
        <p className="text-danger">Hello World</p>
      </Card>
    </ResponsiveEmbed>
  );
}
