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


export default function SignUp() {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name && email && phone && password) {
      setSubmitted(true);
    } else {
      alert('Please fill out all fields.');
    }
  };

  const handleClear = () => {
    setName('');
    setEmail('');
    setPhone('');
    setPassword('');
    setSubmitted(false);
  };



  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={{
          padding: 14,
          marginBottom: 30,
          fontSize: 20,
          textAlign: 'center',
          fontWeight: 700
        }}>User Registration Form</Text>

        <TextInput
          placeholder="Full Name"
          value={name}
          onChangeText={(text: string) => setName(text)}
          style={{
            width: "100%",
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 20,
            padding: 14,
            marginBottom: 30,
          }}
        />

        <TextInput
          placeholder="Phone Number"
          value={phone}
          onChangeText={(text: string) => setPhone(text)}
          style={{
            width: "100%",
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 20,
            padding: 14,
            marginBottom: 30,
          }}
        />

        <TextInput
          placeholder="E-mail Address"
          value={email}
          onChangeText={(text: string) => setEmail(text)}
          keyboardType="email-address"
          style={{
            width: "100%",
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 20,
            padding: 14,
            marginBottom: 30,
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
            padding: 14,
            marginBottom: 30,
          }}
        />

        <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#1B1F26",
              paddingVertical: 10,
              paddingHorizontal: 40,
              borderRadius: 8,
              marginBottom: 12
            }}
          >
            <Pressable onPress={handleSubmit}>
              <Text style={{ color: "white", fontSize: 16 }}>Submit</Text>
            </Pressable>
          </TouchableOpacity>


          <TouchableOpacity
            style={{
              backgroundColor: "#899BC1",
              paddingVertical: 10,
              paddingHorizontal: 40,
              borderRadius: 8,
            }}
          >
            <Pressable onPress={handleClear}>
              <Text style={{ color: "white", fontSize: 16 }}>CLear</Text>
            </Pressable>
          </TouchableOpacity>
        </View>

        {submitted && (
          <View style={{
            display: 'flex',
            justifyContent: "flex-start",
            alignItems: "flex-start",
            marginTop: 10,
            gap: 10,
          }}>
            <hr />
            <Text>Submitted Information:</Text>
            <Text>Full Name: {name}</Text>
            <Text>Phone Number: {phone}</Text>
            <Text>Email: {email}</Text>
            <Text>Password: {password}</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}