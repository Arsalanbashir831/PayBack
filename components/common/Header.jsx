import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const TopHeader = ({title}) => {
  return (
    <View style={{display:'flex' , justifyContent:'space-between' , alignItems:'center' , flexDirection:'row' , paddingHorizontal:10}}>
                {/* <TouchableOpacity onPress={()=>router.back()} style={{ backgroundColor: '#fdba28', padding:5 , borderRadius:20 }}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity> */}
                <Text style={{ color:'#fdba28' , fontSize:20 , fontWeight:'bold'}}>{title}</Text>
                <View style={{ display:'flex' , flexDirection:'row' , alignItems:'center' , gap:10}}>
                    <Image source={require('../../assets/images/paybackLogo.png')} style={{height:50 , width:50}} />
                    <Text style={{fontSize:20 , fontWeight:'bold'}}>PayBack</Text>
                </View>
            </View>
  )
}

export default TopHeader