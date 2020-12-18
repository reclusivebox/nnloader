import React, {useEffect} from 'react';

export default function DynamicFocuser() {
  useEffect(() => {
    function eventHandler() {
      const documentHeight = window.document.body.clientHeight;
      const deviceHeight = window.innerHeight;
      const maxScroll = documentHeight - deviceHeight;
      const scrollPosition = window.pageYOffset / maxScroll;
      const horizontalCenter = Math.floor(window.innerWidth / 2);
      const heightToFocus = Math.floor(deviceHeight * scrollPosition);
      const elementToFocus = document.elementFromPoint(horizontalCenter, heightToFocus);
      if (elementToFocus ?? false) {
        (elementToFocus as HTMLElement).focus();
      }
    }
    window.addEventListener('scroll', eventHandler);
    return () => window.removeEventListener('scroll', eventHandler);
  }, []);
  return <></>;
}