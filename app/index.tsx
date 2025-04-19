import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  const API_key = "";
  
  return (
    <View style={styles.text}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})
