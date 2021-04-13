import React from 'react';
import ExampleSection from '../ExampleSection';
import CodeBox from '../CodeBox';

export default {
    title: 'ExampleSection',
    component: ExampleSection
};

export function HelloWorldStory() {
    const exampleCode = (
        <CodeBox>
            {'const helloFuntion = function(){\n\tconsole.log("Hello World")\n}'}
        </CodeBox>
    );
    
    return (
        <div className="bg-light p-2">
            <ExampleSection className="p-3 text-white bg-dark" title="Hello World" code={exampleCode}>
                This section is just an example.
            </ExampleSection>
        </div>
    );
}