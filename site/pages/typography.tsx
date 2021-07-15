import Head from 'next/head';
import React, { CSSProperties } from 'react';
import { GalleryTypography } from '../components/typography';

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
        <title>Typography | Pixie Web UIKit</title>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <meta
          name="description"
          content="Web UIKit - Pixie core components gallery"
        />
      </Head>

      <main style={style}>
        <GalleryTypography />
      </main>
    </div>
  );
}
