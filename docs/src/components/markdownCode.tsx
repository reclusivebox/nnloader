import React, {useEffect} from 'react';
import {Markdown} from 'grommet';
import PrismJS from 'prismjs';

export default function MarkdownCode(props: React.PropsWithChildren<{
lang: string,
code: string,
className?: string,
}>) {
  useEffect(() => {
    PrismJS.highlightAll();
  }, []);
  return (
    <Markdown className={props.className ?? ''}>
      {`\`\`\`${props.lang}\n${props.code}\`\`\``}
    </Markdown>
  );
}
