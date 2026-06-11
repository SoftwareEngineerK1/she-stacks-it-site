import { Text, View } from "react-native";

export default function MobileHome() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 24 }}>
      <Text style={{ fontSize: 28, fontWeight: "800" }}>myPAW Mobile</Text>
      <Text style={{ marginTop: 12, textAlign: "center" }}>
        Mobile app starter for the SheStacksIT myPAW portal.
      </Text>
    </View>
  );
}
