import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function SignUp() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
          <Text style={{ fontSize: 28, fontWeight: "bold", position: "absolute", left: 30, top: 20 }}>Create new account</Text>
    
          <TextInput
            placeholder="Full Name"
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
            secureTextEntry
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
            secureTextEntry
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
            secureTextEntry
            style={{
              width: "100%",
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 20,
              padding: 14,
              marginBottom: 30,
            }}
          />
    
          <TouchableOpacity
            onPress={() => {}}
            style={{
              marginTop: 20,
              marginBottom: 70,
              backgroundColor: "#1B1F26",
              paddingVertical: 15,
              paddingHorizontal: 80,
              borderRadius: 8,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
  );
}