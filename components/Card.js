import { View, Text,StyleSheet} from 'react-native'
import React from 'react'
import Job from '../assets/briefcase.svg'
import { MaterialIcons } from '@expo/vector-icons';
import Ripple from "react-native-material-ripple";
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Card() {


  const navigation=useNavigation();
  const NavigatetoDetails=()=>{
    navigation.navigate('Details');
  }

  return (
    <Ripple onPress={NavigatetoDetails} style={styles.container}>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <View style={{flexDirection:'row',gap:4}}>
        <View style={styles.imgContainer}><Job height={25} width={25}></Job></View>
        <View>
            <Text style={styles.boldText}>Tele Sales Executive</Text>
            <Text style={styles.lightText}>HSR Layout Banglore</Text>
        </View>
        </View>
        <MaterialIcons name="verified" size={24} color="#06BCEE" />
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{color:'grey'}}>Expected Salary</Text>
        <Text style={{color:'#2A9FB8',fontFamily:'Poppins_500Medium'}}>₹18000 - ₹25000+</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <View style={{borderWidth:1,borderColor:'grey',paddingVertical:8,paddingHorizontal:8,borderRadius:14,backgroundColor:'#FAFAFA'}}>
        <Text style={{fontSize:12,fontFamily:'Poppins_300Light',color:'grey'}}>834338438</Text>
        </View>
      </View>
    </Ripple>
  )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
        borderRadius:8,
        flexDirection:'column',
        gap:6,
        paddingHorizontal:12,
        paddingVertical:8,
        marginVertical:8
    },
    imgContainer:{height:45,width:45,borderWidth:1,borderRadius:45,justifyContent:'center',alignItems:'center',borderColor:'grey'},
    boldText:{
        fontFamily:'Poppins_500Medium',
        fontSize:16,
        marginBottom:-5

    },
    lightText:{
        fontFamily:'Poppins_300Light',
        fontSize:12
    }
})