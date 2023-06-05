import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BoxStyle from "./BoxStyle";

const Box = ({ colorName, hexCode }) => {
  return (
    <View
      style={StyleSheet.flatten({
        ...BoxStyle.container,
        backgroundColor: hexCode,
      })}
    >
      <Text style={BoxStyle.textStyle}>{colorName}</Text>
    </View>
  );
};

export default Box;
