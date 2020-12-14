import React, {MutableRefObject} from 'react';
import {useEffect, useRef} from 'react';
import {Header, BoxProps} from 'grommet';

import '../styles/dynamicTopBar.scss';

function toggleVisibility(
    reference: React.MutableRefObject<HTMLElement>,
    visible: boolean,
) {
  const element = reference.current;

  if (visible) {
    element.classList.remove('slideOutTheTop');
    window.requestAnimationFrame(() => {
      element.classList.add('slideFromTop');
    });
  } else {
    element.classList.remove('slideFromTop');

    window.requestAnimationFrame(() => {
      element.classList.add('slideOutTheTop');
    });
  }
}

function useScrollHook(
    dynamicBarRef: React.MutableRefObject<HTMLElement>,
) {
  useEffect(() => {
    dynamicBarRef.current.dataset.previousPosition = String(window.pageYOffset);
    dynamicBarRef.current.dataset.previousScroll = 'noscroll';
    function scrollEventHandler(event: Event) {
      const previousPosition = Number(
          dynamicBarRef.current.dataset.previousPosition,
      );
      const previousScroll = dynamicBarRef.current.dataset.previousScroll;

      let state = 'noscroll';

      if (previousPosition < window.pageYOffset) {
        state = 'scrolldown';
      } else if (previousPosition > window.pageYOffset) {
        state = 'scrollup';
      }

      dynamicBarRef.current.dataset.previousPosition = String(
          window.pageYOffset,
      );

      if (
        state !== previousScroll &&
        state !== 'noscroll'
      ) {
        toggleVisibility(dynamicBarRef, state === 'scrollup');
      }

      dynamicBarRef.current.dataset.previousScroll = state;
    }

    window.addEventListener('scroll', scrollEventHandler);

    return () => window.removeEventListener('scroll', scrollEventHandler);
  }, []);
}

export default function DynamicTopBar<
T extends React.PropsWithChildren<BoxProps>
>(
    props: T,
) {
  const reference = useRef() as MutableRefObject<HTMLElement>;
  useScrollHook(reference);

  return (
    <div ref={reference as any} className="dynamicTopBar">
      <Header
        elevation="small"
        background="brand"
        fill
        {...props}
      >
        {props.children}
      </Header>
    </div>
  );
}
