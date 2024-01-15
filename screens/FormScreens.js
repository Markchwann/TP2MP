import React from 'react';
import { View, StyleSheet } from 'react-native';
import Form from '../components/FormComponent';
import Footer from '../components/Footer';

const FormScreen = () => {
 return (
    <View style={styles.container}>
      <Form />
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

export default FormScreen;