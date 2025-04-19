import { Text, View, StyleSheet, TextInput } from "react-native";

export default function Index() {
  const API_key = "";
  
  return (
    <View style={styles.text}>
      <Text>Hello</Text>
      <Text>Good Morning</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    height: 20, 
    color: "black",
    borderStyle: "solid"
  }
})
