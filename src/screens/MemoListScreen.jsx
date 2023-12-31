import React from 'react';
import { View, StyleSheet } from 'react-native';

// import AppBar from '../components/AppBar';
import MemoList from '../components/MemoList';
import CircleBultton from '../components/CircleButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      {/* <AppBar /> */}
      <MemoList />
      <CircleBultton
        name="plus"
        onPress={() => { navigation.navigate('MemoCreate'); }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
