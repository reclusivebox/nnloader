import React from 'react';
import CodeBox from '../CodeBox';

export default {
    title: 'CodeBox',
    component: CodeBox
};

export function HelloWorldStory() {
    return (
        <div className="bg-dark w-75 vh-100 p-1">
            <CodeBox>
                {"const hello = function(){\n\tconsole.log('Hello World');\n}"}
            </CodeBox>
        </div>
    );
}