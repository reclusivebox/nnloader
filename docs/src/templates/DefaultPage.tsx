// eslint-disable-next-line no-unused-vars
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

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
      <div className="min-vh-100 p-0 m-0">
        <Navbar activeNavId={props.activeNavId} />
        <main className="px-1 py-5 p-lg-5">
          {props.children}
        </main>
        <Footer />
      </div>
    </>
  );
}
