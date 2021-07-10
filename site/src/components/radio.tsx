import { H3, Radio, RadioProps } from '../../../core/src';
import React from 'react';
import { container, row } from './_shared-styles';

const options: RadioProps[] = [
  { name: 'radio', value: 'BTC', children: 'Bitcoin' },
  { name: 'radio', value: 'AXS', children: 'Axie Infinity' },
  { name: 'radio', value: 'KNC', children: 'Kyber Network' }
];

export const GalleryRadio = (): JSX.Element => {
  return (
    <div style={container}>
      <H3>Radios</H3>
      <div style={row}>
        {options.map((props, index: number) => (
          <Radio key={`radio-options-${index}`} {...props} />
        ))}
      </div>
    </div>
  );
};
