import Head from 'next/head';
import React, { CSSProperties } from 'react';
import { GalleryAvatar } from '../components/avatar';
import { GalleryButton } from '../components/button';
import { GalleryCheckbox } from '../components/check-box';
import { GalleryInput } from '../components/input';
import { GalleryRadio } from '../components/radio';
import { GallerySeparator } from '../components/separator';
import { GalleryTag } from '../components/tag';
import { GalleryToggle } from '../components/toggle';

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
        <GalleryAvatar />
        <GallerySeparator />
      </main>
    </div>
  );
}
