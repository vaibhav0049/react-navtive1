import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import CaptureMedia from '../components/Media/CaptureMedia';

const CaptureScreen = () => {
  const handleCapture = (uri) => {
    console.log('Captured media:', uri);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <CaptureMedia onCapture={handleCapture} />
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

export default CaptureScreen;
