import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { height: "90%", marginTop: Platform.OS === "android" ? 40 : 0 },
});
