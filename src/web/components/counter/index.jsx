import React from 'react';
import { WedaVue3Wrapper } from '../../util';
import counter from './counter.vue';

export default function CounterWithWrapper({ header, footer, ...props }) {
  const slots = {
    header,
    footer,
  };

  return <WedaVue3Wrapper component={counter} vSlot={slots} {...props} />;
}
