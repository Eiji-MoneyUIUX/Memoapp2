import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, bool, shape } from 'prop-types';

function Hello(props) {
  const { children, bang, style } = props;
  return (
    // eslint-disable-next-line react/jsx-indent
    <View>
      <Text style={[styles.text, style]}>
        {`Hello yes ${children}${bang ? '!' : 'No..'}`}
      </Text>
    </View>
  );
}

Hello.prototype = {
  children: string.isRequred,
  bang: bool,
  style: shape(),
};

Hello.defaultProps = {
  bang: false,
  style: null,
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontWeight: 'bold',
    fontSize: 40,
    padding: 16,
  },
});

export default Hello;
