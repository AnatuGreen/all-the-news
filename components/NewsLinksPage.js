import React, { useState, useEffect } from "react";
import { View, Text, Linking, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import Data from "./Data";

const NewsLinks = () => {
  const [links, setLinks] = useState([]);
  const [currentLink, setCurrentLink] = useState("");

  //   useEffect(() => {
  //     // Fetch the list of news websites from an API or a local file
  //     fetch(Data)
  //       .then((response) => response.json())
  //       .then((data) => setLinks(data));
  //   }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>News Websites</Text>
      {Data.map((link) => (
        <Text
          key={link.id}
          style={styles.link}
          onPress={() => setCurrentLink(link.mediaLink)}
        >
          {link.mediaName}
        </Text>
      ))}
      <WebView
        source={{ uri: "https://reactnative.dev/" }}
        style={styles.webView}
        // startInLoadingState
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  link: {
    fontSize: 16,
    color: "blue",
    marginBottom: 10,
  },
  webView: {
    flex: 1,
    width: "100%",
  },
});

export default NewsLinks;
