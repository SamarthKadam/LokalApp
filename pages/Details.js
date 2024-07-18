import { View, Text,StyleSheet, Pressable} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Brief from '../assets/briefcase.svg'
import Chip from '../components/Chip';
import { FontAwesome,FontAwesome5,AntDesign,Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Ripple from 'react-native-material-ripple';

export default function Details() {

  const navigation=useNavigation();

  const BackIconPressHandler=()=>{
    navigation.navigate('Home')
  }

  const AddToBookMarksHandler=()=>{

  }


  return (
    <View style={styles.screen}>
      <View style={styles.headerContainer}>
        <Pressable onPress={BackIconPressHandler}>
        <Ionicons name="arrow-back-outline" size={28} color="black" />
        </Pressable>
        <Text style={{fontFamily:'Poppins_500Medium',fontSize:18}}>Job Details</Text>
        <Ripple>
        <MaterialCommunityIcons name="bookmark-plus-outline" size={30} color="black" />
        </Ripple>
      </View>
      <View style={styles.midContainer}>
        <View style={styles.imgContainer}>
        <Brief height={45} width={45}></Brief>
        </View>
        <Text style={{fontFamily:'Poppins_600SemiBold',fontSize:18}}>Junior Graphic Designer</Text>
        <Text style={{fontFamily:'Poppins_400Regular',fontSize:14}}>Surathkhal India</Text>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.row}>
           <Chip type='Expected Salary' value='$2k-4k' icon={<FontAwesome name="money" size={24} color="black" />}  color='#EBF6F9'></Chip>
           <Chip type='Job Type' value='FullTime' icon={<FontAwesome5 name="briefcase" size={24} color="black" />}  color='#F9EBEB'></Chip>
        </View>
        <View style={styles.row}>
        <Chip type='Working hours' value='8-5pm' icon={<AntDesign name="clockcircleo" size={24} color="black" />}  color='#F4F9EB'></Chip>
        <Chip type='Qualification' value='Expert' icon={<Ionicons name="grid-outline" size={24} color="black" />}  color='#EBECF9'></Chip>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={{fontFamily:'Poppins_600SemiBold',fontSize:18}}>Job description</Text>
        <Text style={{fontFamily:'Poppins_400Regular',color:'grey',fontSize:13}}>Hatypo STudio is </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 38,
      paddingBottom:108,
      backgroundColor: "#F5F5F5",
    },
    headerContainer:{
      flexDirection:'row',
      marginVertical:12,
      justifyContent:'space-between',
      alignItems:'center'
    },
    midContainer:{
      flexDirection:'column',
      alignItems:'center'
    },
    imgContainer:{height:75,width:75,borderWidth:1,borderRadius:75,justifyContent:'center',alignItems:'center',borderColor:'grey'},
    detailsContainer:{
      gap:4,
      flexDirection:'column',
      marginVertical:8
    },
    row:{
      flexDirection:'row',
      justifyContent:'space-between',
      gap:6
    },
    descriptionContainer:{
      flexDirection:'column',
      marginVertical:12
    }
  });
  