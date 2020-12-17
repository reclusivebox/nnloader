import React, {useContext} from 'react';
import loadable from '@loadable/component';

export default function MainPage() {
  const MainTemplate = loadable(() => import('../templates/indexTemplate'));
  return <MainTemplate />;
}
