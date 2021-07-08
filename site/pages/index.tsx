import Head from 'next/head';
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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pixie Web UIKit</title>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <meta
          name="description"
          content="Web UIKit - Pixie core components gallery"
        />
      </Head>

      <main style={style}>
        <GalleryButton />
        <GalleryTag />
        <GalleryCheckbox />
        <GalleryRadio />
        <GalleryToggle />
        <GalleryInput />
      </main>
    </div>
  );
}
