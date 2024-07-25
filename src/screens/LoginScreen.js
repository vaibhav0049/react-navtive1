import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Login from '../components/Auth/Login';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Login />
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default LoginScreen;
