import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopHeader from '../../components/common/Header'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import ListItem from '../../components/common/ListItem'
import MenuItem from '../../components/common/MenuItem'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
const { width } = Dimensions.get('window');

const CustomerDashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopHeader title={'Dashboard'}/>
      
      <View style={styles.balanceSection}>
        <Text style={styles.balanceLabel}>Total Balance</Text>
        <Text style={styles.balanceAmount}>Rs. 6,700</Text>
      </View>

      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity style={styles.transferButton}>
          <MaterialCommunityIcons name="bank-transfer" size={24} color="black" />
          <Text style={styles.transferText}>Transfer</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.receiveButton}>
          <MaterialCommunityIcons name="bank-transfer-in" size={24} color="#FFB800" />
          <Text style={styles.receiveText}>Receive</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.recentHeader}>
        <Text style={styles.recentText}></Text>
        <TouchableOpacity>
          <Text style={styles.seeMoreText}>See More</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.transactionList}>
        <ListItem title="STYLO" price="2,700" />
        <ListItem title="Broadway" price="2,200" variant="dark" />
        <ListItem title="Sweet Creme" price="700" />
        <ListItem title="Bundu Khan" price="100" variant="dark" />
      </ScrollView>

      <View style={styles.menuContainer}>
        <MenuItem onPress={()=>console.log('test')} topText="Request" bottomText="CashBack" />
        <MenuItem onPress={()=>console.log('test')} topText="Refer" bottomText="& Earn" />
        <MenuItem onPress={()=>console.log('test')} topText="Games" bottomText="& Rewards" />
        <MenuItem onPress={()=>console.log('test')} topText="Deals" bottomText="& Discounts" />
      </View>
      <View style={[styles.menuContainer, {alignSelf:'center' , marginTop:10}]}>
     <TouchableOpacity onPress={()=>router.push('/QRscan')} style={{backgroundColor:'#fdba28' , padding:20 , borderRadius:100  }}>
      <MaterialIcons name="qr-code-scanner" size={44} color="white" />
     </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  dashboardText: {
    fontSize: 18,
    fontWeight: '600',
  },
  paybackText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFB800',
  },
  balanceSection: {
    marginBottom: 20,
  },
  balanceLabel: {
    fontSize: 14,
    color: '#666666',
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 5,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  transferButton: {
    backgroundColor: '#FFB800',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    width: '48%',
  },
  receiveButton: {
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    width: '48%',
  },
  transferText: {
    marginLeft: 10,
    fontWeight: '600',
    fontSize: 16,
  },
  receiveText: {
    marginLeft: 10,
    fontWeight: '600',
    fontSize: 16,
    color: '#FFB800',
  },
  recentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  recentText: {
    fontSize: 16,
    fontWeight: '600',
  },
  seeMoreText: {
    color: '#FFB800',
    fontSize: 14,
  },
  transactionList: {
    flex: 1,
    marginBottom: 15,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
  },
});

export default CustomerDashboard