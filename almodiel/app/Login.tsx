import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Login() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: "bold", position: "absolute", left: 30, top: 20 }}>Sign In</Text>

      <TextInput
        placeholder="E-mail or phone number"
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
        secureTextEntry
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
        onPress={() => {}}
        style={{
          marginTop: 20,
          backgroundColor: "#1B1F26",
          paddingVertical: 15,
          paddingHorizontal: 80,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Log in</Text>
      </TouchableOpacity>
        
        <Text style={{ color: "black", fontWeight: "bold", marginTop: 30, marginBottom: 30 }}>OR</Text>

      <TouchableOpacity
        onPress={() => {}}
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
    </View>
  );
}
