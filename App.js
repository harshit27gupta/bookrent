import React from 'react';
import { RentedBooksProvider } from './RentedBooksContext';

import StackNavigator from './navigation/StackNavigator';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <RentedBooksProvider>  
        <View style={styles.container}>
          <StackNavigator />
        </View>
    </RentedBooksProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
