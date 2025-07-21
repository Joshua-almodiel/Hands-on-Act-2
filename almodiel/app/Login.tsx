import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';
export default function Login() {

  const [emailphone, setEmailPhone] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (emailphone && password) {
      setSubmitted(true);
    } else {
      alert('Please fill out all fields.');
    }
  };

  const handleClear = () => {
    setEmail('');
    setPhone('');
    setSubmitted(false);
  };


  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: "bold", position: "absolute", left: 30, top: 20 }}>Sign In</Text>

      <TextInput
        placeholder="E-mail or phone number"
        value={emailphone}
        onChangeText={(text: string) => setEmailPhone(text)}
        style={{
          width: "100%",
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 20,
          padding: 16,
          marginBottom: 15,
        }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={(text: string) => setPassword(text)}
        style={{
          width: "100%",
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 20,
          padding: 16,
          marginBottom: 20,
        }}
      />

      <TouchableOpacity
        onPress={() => { }}
        style={{
          marginTop: 20,
          backgroundColor: "#1B1F26",
          paddingVertical: 15,
          paddingHorizontal: 80,
          borderRadius: 8,
        }}
      >
        <Pressable onPress={handleSubmit}>
        <Text style={{ color: "white", fontWeight: "bold" }}>Log in</Text>
        </Pressable>
      </TouchableOpacity>

      <Text style={{ color: "black", fontWeight: "bold", marginTop: 30, marginBottom: 30 }}>OR</Text>

      <TouchableOpacity
        onPress={() => { }}
        style={{
          marginTop: 15,
          marginBottom: 75,
          backgroundColor: "#899BC1",
          paddingVertical: 15,
          paddingHorizontal: 20,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Log in with Facebook</Text>
      </TouchableOpacity>

      {submitted && (
              <View style={{
                display: 'flex',
                justifyContent: "flex-start",
                alignItems: "flex-start",
                marginTop: 10,
                marginLeft: -200,
                gap: 10,
              }}>
                <hr />
                <Text>Submitted Information:</Text>
                <Text>Email or Phone: {emailphone}</Text>
                <Text>Password: {password}</Text>
              </View>
            )}
    </View>

    
  );
}
