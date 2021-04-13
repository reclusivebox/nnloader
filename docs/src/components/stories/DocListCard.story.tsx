import React from 'react';
import { DocListCard } from '../DocContent';

export default {
    title: 'DocContent Card',
    component: DocListCard
};

const links = {
    'first item': '#',
    'second item': '#',
    'third item': '#',
};

export function FirstLink() {
    return (
        <div className="bg-dark w-75 vh-100 p-1">
            <DocListCard links={links} activeItem="first item" />
        </div>
    );
}

export function SecondLink() {
    return (
        <div className="bg-dark w-75 vh-100 p-1">
            <DocListCard links={links} activeItem="second item" />
        </div>
    );
}

export function ThirdLink() {
    return (
        <div className="bg-dark w-75 vh-100 p-1">
            <DocListCard links={links} activeItem="third item" />
        </div>
    );
}