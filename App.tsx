/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Footer from './src/components/footer/footer';
import Router from './src/router';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Footer router={Router} />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
