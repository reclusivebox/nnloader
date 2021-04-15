import React from 'react';
import { DocContent } from '../DocContent';

export default {
    title: 'DocContent',
    component: DocContent
};

const links = {
    'first item': '#',
    'second item': '#',
    'third item': '#',
};

export function FirstLink() {
    return (
        <div className="bg-dark vh-100 p-1">
            <DocContent links={links} activeItem="first item" >
                <div className="bg-danger" style={{width: '40vw', height: '70vh'}}>Working?</div>
            </DocContent>
        </div>
    );
}

export function SecondLink() {
    return (
        <div className="bg-dark vh-100 p-1">
            <DocContent links={links} activeItem="second item">
                <div className="bg-danger" style={{width: '40vw', height: '70vh'}}>Working?</div>
            </DocContent>
        </div>
    );
}

export function ThirdLink() {
    return (
        <div className="bg-dark vh-100 p-1">
            <DocContent links={links} activeItem="third item">
                <div className="bg-danger" style={{width: '40vw', height: '70vh'}}>Working?</div>
            </DocContent>
        </div>
    );
}