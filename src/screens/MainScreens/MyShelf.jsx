import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { MyShelfRecordData } from '../../data/MyShelfRecordData';
import { MyShelfData } from '../../data/MyShelfData';
import SubmitBtn from '../../components/SubmitBtn';

const { width, height } = Dimensions.get('window');
const CARD_WIDTH = (width - 32 - 30) / 4;

const MyShelf = () => {

  const renderIcon = (lib, name, color) => {
    if (lib === 'Ionicons') return <Ionicons name={name} color={color} size={20} />;
    if (lib === 'Octicons') return <Octicons name={name} color={color} size={20} />;
  };

  const renderBookItem = (item) => (
    <View key={item.id} style={styles.bookCard}>
      <Image source={item.img} style={styles.bookImg} />

      <View style={styles.bookInfo}>

        {/* TOP: title + status + dots */}
        <View style={styles.bookTopRow}>
          <Text style={styles.bookTitle} numberOfLines={1}>{item.title}</Text>
          <View style={styles.topRight}>
            <View style={[styles.statusBadge, { backgroundColor: item.statusColor + '18' }]}>
              <Text style={[styles.statusTxt, { color: item.statusColor }]}>{item.status}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.6} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
              <Entypo name="dots-three-horizontal" color="#BBBBBB" size={18} />
            </TouchableOpacity>
          </View>
        </View>

        {/* BOTTOM: price+date (left) | eye+chat (right) */}
        <View style={styles.bookBottomRow}>
          <View>
            <Text style={styles.price}>{item.price}</Text>
            <View style={styles.dateRow}>
              <AntDesign name="calendar" color="#BBBBBB" size={11} />
              <Text style={styles.dateText}>{item.date}</Text>
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Ionicons name="eye-outline" color="#999" size={16} />
              <Text style={styles.statText}>{item.views}</Text>
            </View>
            <View style={styles.statItem}>
              <Ionicons name="chatbubble-outline" color="#999" size={15} />
              <Text style={styles.statText}>{item.chats}</Text>
            </View>
          </View>
        </View>

      </View>
    </View>
  );

  return (
    <View style={styles.mainView}>

      {/* ── FIXED TOP PART ── */}
      <View style={styles.topSection}>

        {/* Header */}
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.heading}>MyShelf</Text>
            <Text style={styles.subHeading}>Manage your listed books</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{MyShelfRecordData.length} Items</Text>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Stats Cards */}
        <View style={styles.row}>
          {MyShelfRecordData.map((item) => (
            <View key={item.id} style={[styles.card, { width: CARD_WIDTH }]}>
              <View style={[styles.iconBox, { backgroundColor: item.color + '20' }]}>
                {renderIcon(item.lib, item.icon, item.color)}
              </View>
              <Text style={[styles.count, { color: item.color }]}>{item.count}</Text>
              <Text style={styles.label}>{item.label}</Text>
            </View>
          ))}
        </View>

        {/* Add Button */}
        <View style={styles.btnView}>
          <SubmitBtn text="+ Add New Book" />
        </View>

        {/* Section Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Listed Books</Text>
          <TouchableOpacity activeOpacity={0.7} style={styles.seeAllBtn}>
            <Text style={styles.seeAllTxt}>See All</Text>
            <AntDesign name="arrowright" color="#4CAF50" size={12} />
          </TouchableOpacity>
        </View>

      </View>

      {/* ── SCROLLABLE BOOKS ONLY ── */}
      <ScrollView
        style={styles.scrollArea}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        nestedScrollEnabled={true}
      >
        {MyShelfData.map((item) => renderBookItem(item))}
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  // Fixed top
  topSection: {
    backgroundColor: '#ffffff',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A2E',
  },
  subHeading: {
    fontSize: 13,
    color: '#999',
    marginTop: 2,
  },
  badge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#4CAF50',
  },
  divider: {
    height: 1,
    backgroundColor: '#F4F4F4',
    marginHorizontal: 16,
    marginTop: 14,
    marginBottom: 14,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 12,
    borderWidth: 0.5,
    borderColor: '#EBEBEB',
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  count: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 2,
  },
  label: {
    fontSize: 11,
    color: '#999',
    textAlign: 'center',
  },
  btnView: {
    marginTop: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 22,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1A1A2E',
  },
  seeAllBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: '#F0FAF1',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  seeAllTxt: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4CAF50',
  },

  // Scrollable books area
  scrollArea: {
    flex: 1,
    maxHeight: height * 0.45,
  },
  scrollContent: {
    paddingBottom: 24,
    gap: 12,
  },

  // Book card
  bookCard: {
    flexDirection: 'row',
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: '#EBEBEB',
    padding: 14,
    gap: 12,
    alignItems: 'flex-start',
  },
  bookImg: {
    width: 70,
    height: 90,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  bookInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  bookTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1A1A2E',
    flex: 1,
    marginRight: 8,
  },
  topRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 20,
  },
  statusTxt: {
    fontSize: 11,
    fontWeight: '600',
  },
  bookBottomRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 15,
    fontWeight: '700',
    color: '#4CAF50',
    marginBottom: 4,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  dateText: {
    fontSize: 11,
    color: '#BBBBBB',
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 12,
    color: '#999',
    fontWeight: '500',
  },
});

export default MyShelf;