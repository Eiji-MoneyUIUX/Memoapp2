import React from 'react';
import {
  View, Text, TextInput, StyleSheet,
} from 'react-native';
import AppBar from '../components/AppBar';
import Button from '../components/Button';

export default function LogInScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput style={styles.input} value="Email Address" />
        <TextInput style={styles.input} value="Password" />
        {/* <View style={styles.butotonContainer}>
          <Text style={styles.buttonLabel}>Submit</Text>
        </View> */}
        <Button label="Submit" />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registerd?</Text>
          <Text style={styles.footerLink}>Sign up here!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    // lineHeight: 32,
    fontWeight: 'bold',
    color: '#DDDDDD',
    borderColor: '#DDDDDD',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  // butotonContainer: {
  //   backgroundColor: '#467FD3',
  //   borderRadius: 4,
  //   alignSelf: 'flex-start',
  //   marginBottom: 24,
  // },
  // buttonLabel:{
  //   fontSize: 16,
  //   lineHeight: 32,
  //   paddingVertical: 8,
  //   paddingHorizontal: 32,
  //   color: '#FFFFFF',
  // },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3',
  },
  footer: {
    flexDirection: 'row',
  },
});