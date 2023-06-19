import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useFonts } from '@use-expo/font';
import PropTypes from 'prop-types';
//import { number, string } from 'prop-types';

import icomoon from '../../assets/fonts/icomoon.ttf';
import selection from '../../assets/fonts/selection.json';

export default function Icon(props) {
  const [fontLoaded] = useFonts({ icomoon });
  const { name, size, color } = props;
  const CustomIcon = createIconSetFromIcoMoon(selection);
  if (!fontLoaded) {
    return null;
  }
  return <CustomIcon name={name} size={size} color={color} />;
}

Icon.propTypes = {
  name: oneOf(['plus', 'delete', 'pencil', 'check', 'Vectorwallet']).isRequired,
  size: number,
  color: string,
};

Icon.defaultProps = {
  size: 24,
  color: '#000000',
};
