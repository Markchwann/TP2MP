import React from 'react';
import { View, StyleSheet } from 'react-native';
import Map from '../components/MapsComponent';
import Footer from '../components/Footer';

const MapScreen = () => {
 return (
    <View style={styles.container}>
      <Map />
      <Footer />
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   padding: 10,
 },
});

export default MapScreen;