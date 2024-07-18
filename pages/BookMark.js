import { View, Text,StyleSheet} from 'react-native'
import React from 'react'

export default function BookMark() {
  return (
    <View style={styles.screen}>
      <Text style={{fontFamily:"Poppins_600SemiBold",fontSize:20}}>BookMark Collection</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 38,
    paddingBottom:108,
    backgroundColor: "#F9F9F9",
  },
});
