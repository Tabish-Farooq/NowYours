import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Colors } from '../../theme/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InputField from '../../components/InputField';
import Explore from '../../assets/explore.png'

const HomeScreen = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.addressBar}>

        <View style={styles.location}>
          <MaterialIcons name="location-on" color={Colors.primary} size={22} />
          <Text style={styles.addressTxt}>Aligarh</Text>
          <AntDesign name="down" color="#555" size={11} style={styles.chevron} />
        </View>

        <View style={styles.bell}>
          <Fontisto name="bell" color="#111" size={18} />
        </View>

      </View>

       <View style={styles.searchWrapper}>
  <InputField
    placeholder="Search books, courses..."
    icon="search-outline"
    
  />
</View>

<Image source={Explore} style={styles.exploreImage} />
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#fff',
  },
  addressBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 14,
    marginBottom: 6,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  addressTxt: {
    fontSize: 17,
    fontWeight: '600',
    color: '#111',
    letterSpacing: 0.2,
  },
  chevron: {
    marginTop: 2,
    marginLeft: 2,
  },
  bell: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchWrapper: {
  marginTop: 8,
},
exploreImage: {
  width: '100%',    // ya jo chahiye — jaise 300, 200
  height: 180,
  alignSelf: 'center',
  resizeMode:'contain'
},
})

export default HomeScreen