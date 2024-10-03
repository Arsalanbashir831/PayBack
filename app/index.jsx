import { View, Text, Image, TextInput, StyleSheet, Dimensions, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import CustomTextInputField from '../components/common/CustomTextInputField'
import { router } from 'expo-router'
const { width, height } = Dimensions.get('window')

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.headerContainer}>
            <View style={styles.logoContainer}>
              <Image 
                source={require('../assets/images/paybackLogo.png')} 
                style={styles.logo}
                resizeMode="contain"
              />
              <View>
                <Text style={styles.brandName}>PAYBACK</Text>
                <Text style={styles.tagline}>It's PayBack Time</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.formContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Login</Text>
              <Text style={styles.subtitle}>Sign in to continue</Text>
            </View>
            
            <CustomTextInputField type={'text'}  label="Phone Number" placeholder="03000 0000" />
            <CustomTextInputField type={'text'} label="Password" placeholder="Enter your password" secureTextEntry />
            
            <TouchableOpacity onPress={()=> router.push('/(tabs)/CustomerDashboard')} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
           

            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{router.push('/Signup')}} >
            <Text  style={[styles.forgotPasswordText, {textAlign:'center'}]}>Signup?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.loginButton,{width:'70%' , alignSelf:'center', borderRadius:20}]}>
                <View style={{display:'flex', flexDirection:'row' , justifyContent:'center' , gap:10}}>
                    <Image style={{height:20 , width: 20}} source={require('../assets/images/googleIcon.png')}/>
                <Text style={[styles.loginButtonText , {fontWeight:'light'}]}>Sign in with Google</Text>
                </View>

            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdba28',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  headerContainer: {
    backgroundColor: 'white',
    paddingVertical: height * 0.06,
    width: '100%',
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: width * 0.02,
  },
  logo: {
    height: width * 0.2,
    width: width * 0.2,
  },
  brandName: {
    fontWeight: 'bold',
    fontSize: width * 0.06,
  },
  tagline: {
    fontWeight: 'bold',
    fontSize: width * 0.035,
    color: '#ffb923',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.04,
    gap: height * 0.02,
  },
  titleContainer: {
    marginBottom: height * 0.02,
  },
  title: {
    fontSize: width * 0.09,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: width * 0.04,
    textAlign: 'center',
    color: '#333',
  },

  loginButton: {
    backgroundColor: '#333',
    padding: height * 0.015,
    borderRadius: 10,
    marginTop: height * 0.02,
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
  forgotPassword: {
    alignSelf: 'center',
    marginTop: height * 0.02,
  },
  forgotPasswordText: {
    color: '#333',
    fontSize: width * 0.04,
  },
})

export default LoginScreen