import React from 'react';
import {JSONExample, StringExample, BufferExample} from '../HomeCodeBoxes';

export default {
    title: 'Home Code Boxes',
};

export function JSONCodeBox() {
    return (
        <div className="bg-light w-75 vh-100 p-1">
            <JSONExample />
        </div>
    );
}

export function StringCodeBox() {
    return (
        <div className="bg-light w-75 vh-100 p-1">
            <StringExample />
        </div>
    );
}

export function BufferCodeBox() {
    return (
        <div className="bg-light w-75 vh-100 p-1">
            <BufferExample />
        </div>
    );
}