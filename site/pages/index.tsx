import Head from 'next/head';
import React, { CSSProperties } from 'react';
import { ButtonDemo } from '../components/button-demo';
import { GalleryCheckbox } from '../components/check-box';
import { InputDemo } from '../components/input-demo';
import { GalleryToggle } from '../components/toggle';

const style: CSSProperties = {
    maxWidth: 1170,
    margin: '2rem auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 20
};

export default function Home() {
    return (
        <div>
            <Head>
                <title>Pixie Web UIKit</title>
                <link rel="icon" type="image/svg+xml" href="/logo.svg" />
                <meta name="description" content="Web UIKit - Pixie core components gallery" />
            </Head>

            <main style={style}>
                <InputDemo />
                <ButtonDemo />
                {/*<GalleryTypographyIntro />*/}
                {/*<GalleryButton />*/}
                {/*<GalleryTag />*/}
                <GalleryCheckbox />
                {/*<GalleryRadio />*/}
                <GalleryToggle />
                {/*<GalleryInput />*/}
                {/*<GalleryAvatar />*/}
                {/*<GallerySeparator />*/}
            </main>
        </div>
    );
}
