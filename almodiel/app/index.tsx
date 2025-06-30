import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const screenOptions = {
  headerShown: false,
};

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function Index() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text style={{ color: "#0D0F13", fontSize: 36, fontWeight: 700, textAlign: "center", marginBottom: 34, paddingHorizontal: 20 }}>
        Say hello to your new app
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={{
          backgroundColor: "#1B1F26",
          paddingVertical: 10,
          paddingHorizontal: 40,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("SignUp")}
        style={{
          backgroundColor: "#899BC1",
          paddingVertical: 10,
          paddingHorizontal: 30,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
