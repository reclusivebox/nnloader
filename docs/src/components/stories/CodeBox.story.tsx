import React from 'react';
import CodeBox from '../CodeBox';

export default {
    title: 'CodeBox',
    component: CodeBox
};

export function HelloWorldStory() {
    return (
        <div className="bg-dark w-50 vh-100 p-4">
            <CodeBox>
                Hello World
            </CodeBox>
        </div>
    );
}