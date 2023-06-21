import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { string, shape, func } from 'prop-types';
import { Feather } from '@expo/vector-icons';

export default function CircleBultton(props) {
  //  const { children, style, name } = props;
  const { style, name, onPress } = props;
  return (
    <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
      <Feather name={name} size={24} color="white" />
    </TouchableOpacity>
  );
}

CircleBultton.propTypes = {
  // eslint-disable-next-line react/require-default-props
  // children: string,
  style: shape(),
  name: string.isRequired,
  onPress: func,
};

CircleBultton.defaultProps = {
  style: null,
  onPress: null,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.50,
    shadowRadius: 8,
    elevation: 8,
  },
  circleButtonLabel: {
    color: '#FFFFFF',
    fontSize: 40,
    lineHeight: 40,
  },
});
