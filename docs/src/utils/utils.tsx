/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import React from 'react';

export function RawHTML(props: React.PropsWithChildren<{content: string}>) {
  return <div dangerouslySetInnerHTML={{__html: props.content}} ></div>;
}

/**
 * A small function that gives you the index for the last common character
 * between two strings.
 * @param {string} string1 - One string to compare.
 * @param {string} string2 - The other string to compare.
 * @return {number} - The index of the last common character,
 * -1 if there isn't any.
 */
export function getLastCommonIndex(string1: string, string2: string): number {
  const biggerString = (string1.length > string2.length)? string1 : string2;
  const smallerString = (string1.length <= string2.length)? string1 : string2;
  let commonIndexes = -1;

  for (let index = 0; index < smallerString.length; index++) {
    if (string1[index] === string2[index]) {
      commonIndexes++;
    } else {
      return commonIndexes;
    }
  }
  return commonIndexes;
}
