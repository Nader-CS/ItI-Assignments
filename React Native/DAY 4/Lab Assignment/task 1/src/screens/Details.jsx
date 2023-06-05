import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import axios from "axios";
import { styles } from "../../Styles";

export default function Details({ route }) {
  const [user, setUser] = useState(null);
  const { id } = route.params;

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data));
  }, []);

  if (!user) {
    return <Text style={{ textAlign: "center" }}>Loading...</Text>;
  }
  const images = [
    require("../screens/images/1.webp"),
    require("../screens/images/2.webp"),
    require("../screens/images/3.jpeg"),
    require("../screens/images/4.webp"),
    require("../screens/images/5.jpeg"),
    require("../screens/images/6.jpeg"),
    require("../screens/images/7.jpeg"),
    require("../screens/images/8.jpeg"),
    require("../screens/images/9.webp"),
    require("../screens/images/10.jpg"),
  ];

  return (
    <View style={styles.contSearch}>
      <Image
        source={images[id - 1]}
        style={{ width: 300, height: 400, marginTop: 10, borderRadius: 15 }}
      />
      <Text style={{ marginTop: 20 }}>
        <Text style={{ color: "red", fontSize: 15, fontWeight: "bold" }}>
          Name:{" "}
        </Text>
        {user.name}
      </Text>
      <Text>
        <Text style={{ color: "red", fontSize: 15, fontWeight: "bold" }}>
          Email:{" "}
        </Text>{" "}
        {user.email}
      </Text>
    </View>
  );
}
