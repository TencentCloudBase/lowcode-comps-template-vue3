import React from 'react';
import * as PropTypes from 'prop-types';
import { WedaVue3Wrapper } from '../../util';
import counter from './counter.vue';

export default function CounterWithWrapper({ header, footer, ...props }) {
  const slots = {
    header,
    footer,
  };

  return <WedaVue3Wrapper component={counter} vSlot={slots} {...props} />;
}

CounterWithWrapper.propTypes = {
  header: PropTypes.element,
  footer: PropTypes.element,
};
