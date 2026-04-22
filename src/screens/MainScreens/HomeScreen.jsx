import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Colors } from '../../theme/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InputField from '../../components/InputField';
import Explore from '../../assets/explore.png'
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PopularCategoriesData } from '../../data/PopularCategoriesData';
import { RecommendedData } from '../../data/RecommendedData';

const HomeScreen = () => {

  const renderIcon = (lib, name, color) => {
    if (lib === 'Ionicons') return <Ionicons name={name} color={color} size={22} />;
    if (lib === 'Octicons') return <Octicons name={name} color={color} size={22} />;
    if (lib === 'Entypo') return <Entypo name={name} color={color} size={22} />;
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.categoryItem}>
        <View style={styles.eachItemPopular}>
          {renderIcon(item.lib, item.icon, item.color)}
        </View>
        <Text style={styles.categoryLabel}>{item.label}</Text>
      </View>
    );
  };

  const renderRecommendedItem = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={0.85} style={styles.recommendedCard}>
        <View style={styles.recommendedImgWrapper}>
          <Image source={item.image} style={styles.recommendedImg} />
        </View>

        <View style={styles.recommendedInfo}>
          <Text style={styles.recommendedTitle} numberOfLines={2}>
            {item.title}
          </Text>

          <View style={styles.recommendedFooter}>
            <Text style={styles.recommendedPrice}>
              ₹{item.price || 199}
            </Text>

            <View style={styles.addBtn}>
              <Text style={styles.addBtnTxt}>+</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <ScrollView
      style={styles.mainView}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 40 }}
    >

      {/* Header */}
      <View style={styles.addressBar}>
        <View style={styles.location}>
          <MaterialIcons name="location-on" color={Colors.primary} size={24} />
          <Text style={styles.addressTxt}>Aligarh</Text>
          <AntDesign name="down" color="#999" size={10} style={styles.chevron} />
        </View>

        <View style={styles.bell}>
          <Fontisto name="bell" color="#222" size={17} />
        </View>
      </View>

      {/* Search */}
      <View style={styles.searchWrapper}>
        <InputField
          placeholder="Search books, courses..."
          icon="search-outline"
        />
      </View>

      {/* Banner */}
      <TouchableOpacity activeOpacity={0.6} style={styles.bannerWrapper}>
        <Image source={Explore} style={styles.exploreImage} />
      </TouchableOpacity>

      {/* Popular Categories */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Categories</Text>

        
      </View>

      <FlatList
        data={PopularCategoriesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8 }}
      />

      {/* Divider */}
      <View style={styles.divider} />

      {/* Recommended */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recommended For You</Text>

        <TouchableOpacity activeOpacity={0.6} style={styles.seeAllBtn}>
          <Text style={styles.seeAllTxt}>See All</Text>
          <AntDesign name="arrowright" color="#4CAF50" size={13} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={RecommendedData}
        keyExtractor={(item) => item.id}
        renderItem={renderRecommendedItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8 }}
      />

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#FAFAFA',
    flex: 1,
  },

  addressBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 16,
  },

  location: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },

  addressTxt: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111',
  },

  chevron: {
    marginTop: 1,
  },

  bell: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#E8E8E8',
    elevation: 1,
  },

  searchWrapper: {
    marginTop: 14,
    marginHorizontal: 4,
  },

  bannerWrapper: {
    marginHorizontal: 16,
    marginTop: 14,
    borderRadius: 16,
    overflow: 'hidden',
  },

  exploreImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 8,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
  },

  seeAllBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: '#F0FAF1',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  seeAllTxt: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4CAF50',
  },

  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginHorizontal: 16,
    marginTop: 16,
  },

  categoryItem: {
    alignItems: 'center',
    marginHorizontal: 6,
  },

  eachItemPopular: {
    backgroundColor: '#fff',
    width: 58,
    height: 58,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#ECECEC',
    elevation: 1,
  },

  categoryLabel: {
    fontSize: 11,
    textAlign: 'center',
    width: 62,
    marginTop: 6,
    color: '#444',
  },

  recommendedCard: {
    width: 132,
    backgroundColor: '#fff',
    borderRadius: 16,
    marginRight: 12,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: '#ECECEC',
    elevation: 2,
  },

  recommendedImgWrapper: {
    width: '100%',
    height: 150,
    backgroundColor: '#F4F6FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  recommendedImg: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },

  recommendedInfo: {
    padding: 10,
  },

  recommendedTitle: {
    fontSize: 12.5,
    fontWeight: '600',
    color: '#111',
    marginBottom: 8,
  },

  recommendedFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  recommendedPrice: {
    fontSize: 13,
    fontWeight: '700',
    color: '#4CAF50',
  },

  addBtn: {
    width: 26,
    height: 26,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addBtnTxt: {
    color: '#fff',
    fontSize: 18,
  },
})

export default HomeScreen