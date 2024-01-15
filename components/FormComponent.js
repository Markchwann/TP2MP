import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';


const FormComponent = () => {
 const [name, setName] = useState('');
 const [hobby, setHobby] = useState('');

 const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Hobby:', hobby);
 };

 return (
    <View>
     <WebView source={require('./header.html')} />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Enter your name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Enter your hobby"
        value={hobby}
        onChangeText={text => setHobby(text)}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
 );
};

export default FormComponent;