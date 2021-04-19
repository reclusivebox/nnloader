// eslint-disable-next-line no-unused-vars
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";

import "../styles/base.scss";

type PageTemplateProps = React.PropsWithChildren<{
    activeNavId?: string,
    pageTitle: string,
    keywords?: Array<string>,
    description?: string
}>;

export default function (props: PageTemplateProps) {
  return (
    <>
      <Helmet defer={false}>
        <title>{props.pageTitle}</title>
        <body className="bg-light" />
        <meta name="author" content="Bruno Gregório" />
        <meta name="keywords" content={['nnloader', 'javascript', 'node', 'load', 'package'].concat(props.keywords ?? []).join(', ')} />
        <meta name="description" content={props.description ?? 'Load files from your package\'s root efortlessly!'} />
      </Helmet>
      <Navbar activeNavId={props.activeNavId} />
      {props.children}
    </>
  );
}
