import { View, Text, StyleSheet } from "react-native";
import React from "react";
import User from "../assets/user.svg";
import Card from "../components/Card";
import { FlatList } from "react-native";
import Loading from "./Loading";

const renderItem = ({ item }) => (
  <Card></Card>
);

const data=[1,2,3,4,5]

export default function Home() {


  return (
    <View style={styles.screen}>
      <View style={styles.headerContainer}>
        <View>
          <User height={45} width={45}></User>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              fontSize: 22,
              fontFamily: "Poppins_600SemiBold",
              marginBottom: -8,
            }}
          >
            Hello👋
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: "grey",
              fontFamily: "Poppins_300Light",
            }}
          >
            All job updates covered here
          </Text>
        </View>
      </View>
      <View>
        <Text style={{fontFamily:'Poppins_600SemiBold',fontSize:20}}>Trending jobs near you</Text>
      </View>
      <View style={{flexDirection:'col'}}>
      <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      // keyExtractor={(item) => item.id.toString()}
    />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 38,
    paddingBottom:108,
    backgroundColor: "#F9F9F9",
  },
  headerContainer: {
    flexDirection: "row",
    gap: 5,
    marginVertical: 12,
  },
});
