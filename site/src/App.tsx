import React, { CSSProperties } from 'react';
import { GalleryButton } from './components/button';
import { GalleryCheckbox } from './components/check-box';
import { GalleryInput } from './components/input';
import { GalleryRadio } from './components/radio';
import { GalleryTag } from './components/tag';
import { GalleryToggle } from './components/toggle';

const style: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  padding: 20
};

function App() {
  return (
    <main style={style}>
      <GalleryButton />
      <GalleryTag />
      <GalleryCheckbox />
      <GalleryRadio />
      <GalleryToggle />
      <GalleryInput />
    </main>
  );
}

export default App;
