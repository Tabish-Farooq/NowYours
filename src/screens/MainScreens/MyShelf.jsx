import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { MyShelfRecordData } from '../../data/MyShelfRecordData';
import { MyShelfData } from '../../data/MyShelfData';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48 - 36) / 4;

const COLORS = {
  bg: '#F6F7FB',
  card: '#FFFFFF',
  text: '#15181F',
  subText: '#8A8FA3',
  border: '#ECEEF4',
  accent: '#4A6FE3',       // blue — primary CTA
  accentLight: '#EEF2FD',
  green: '#28A56C',
  greenLight: '#E6F7F0',
  muted: '#C2C6D4',
};

const renderIcon = (lib, name, color) => {
  if (lib === 'Ionicons') return <Ionicons name={name} color={color} size={20} />;
  if (lib === 'Octicons') return <Octicons name={name} color={color} size={20} />;
  return null;
};

// ─── Stat Card ───────────────────────────────────────────────────────────────
const StatCard = ({ item }) => (
  <View style={[styles.statCard, { width: CARD_WIDTH }]}>
    <View style={[styles.statIcon, { backgroundColor: item.color + '18' }]}>
      {renderIcon(item.lib, item.icon, item.color)}
    </View>
    <Text style={[styles.statCount, { color: item.color }]}>{item.count}</Text>
    <Text style={styles.statLabel} numberOfLines={1}>{item.label}</Text>
  </View>
);

// ─── Book Card ────────────────────────────────────────────────────────────────
const BookCard = ({ item }) => (
  <TouchableOpacity activeOpacity={0.75} style={styles.bookCard}>
    <Image source={item.img} style={styles.bookImg} />

    <View style={styles.bookBody}>
      {/* Title row */}
      <View style={styles.bookTitleRow}>
        <Text style={styles.bookTitle} numberOfLines={1}>{item.title}</Text>
        <TouchableOpacity
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          activeOpacity={0.6}
        >
          <Entypo name="dots-three-horizontal" color={COLORS.muted} size={16} />
        </TouchableOpacity>
      </View>

      {/* Status badge */}
      <View style={[styles.statusBadge, { backgroundColor: item.statusColor + '18' }]}>
        <View style={[styles.statusDot, { backgroundColor: item.statusColor }]} />
        <Text style={[styles.statusTxt, { color: item.statusColor }]}>{item.status}</Text>
      </View>

      {/* Footer */}
      <View style={styles.bookFooter}>
        <View>
          <Text style={styles.bookPrice}>{item.price}</Text>
          <View style={styles.dateRow}>
            <AntDesign name="calendar" color={COLORS.muted} size={10} />
            <Text style={styles.dateText}>{item.date}</Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statChip}>
            <Ionicons name="eye-outline" color={COLORS.subText} size={13} />
            <Text style={styles.statChipText}>{item.views}</Text>
          </View>
          <View style={styles.statChip}>
            <Ionicons name="chatbubble-outline" color={COLORS.subText} size={12} />
            <Text style={styles.statChipText}>{item.chats}</Text>
          </View>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

// ─── Main Screen ──────────────────────────────────────────────────────────────
const MyShelf = () => {
  return (
    <View style={styles.screen}>

      {/* Sticky top section */}
      <View style={styles.topSection}>

        {/* Header */}
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.heading}>My Shelf</Text>
            <Text style={styles.subHeading}>Manage your listed books</Text>
          </View>
          <View style={styles.itemsBadge}>
            <Text style={styles.itemsBadgeText}>{MyShelfData.length} books</Text>
          </View>
        </View>

        {/* Stat Cards */}
        <View style={styles.statsRow}>
          {MyShelfRecordData.map((item) => (
            <StatCard key={item.id} item={item} />
          ))}
        </View>

        {/* Add Button */}
        <TouchableOpacity activeOpacity={0.85} style={styles.addBtn}>
          <AntDesign name="plus" color="#fff" size={16} />
          <Text style={styles.addBtnText}>Add New Book</Text>
        </TouchableOpacity>

        {/* Section header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Listed Books</Text>
          <TouchableOpacity activeOpacity={0.7} style={styles.seeAllBtn}>
            <Text style={styles.seeAllTxt}>See All</Text>
            <AntDesign name="arrowright" color={COLORS.accent} size={11} />
          </TouchableOpacity>
        </View>

      </View>

      {/* Scrollable book list */}
      <FlatList
        data={MyShelfData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <BookCard item={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />

    </View>
  );
};

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  // ── Top Section
  topSection: {
    backgroundColor: COLORS.card,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 22,
    marginBottom: 18,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
    letterSpacing: -0.4,
  },
  subHeading: {
    fontSize: 12,
    color: COLORS.subText,
    marginTop: 3,
  },
  itemsBadge: {
    backgroundColor: COLORS.accentLight,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },
  itemsBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.accent,
  },

  // ── Stat Cards
  statsRow: {
    flexDirection: 'row',
    paddingHorizontal: 18,
    gap: 10,
    marginBottom: 16,
  },
  statCard: {
    backgroundColor: COLORS.bg,
    borderRadius: 14,
    alignItems: 'center',
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 7,
  },
  statCount: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 10,
    color: COLORS.subText,
    textAlign: 'center',
    paddingHorizontal: 4,
  },

  // ── Add Button
  addBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.accent,
    marginHorizontal: 18,
    borderRadius: 13,
    paddingVertical: 13,
    gap: 8,
    marginBottom: 20,
  },
  addBtnText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 0.2,
  },

  // ── Section Header
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingBottom: 14,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.text,
  },
  seeAllBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: COLORS.accentLight,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  seeAllTxt: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.accent,
  },

  // ── Book List
  listContent: {
    paddingHorizontal: 18,
    paddingTop: 14,
    paddingBottom: 28,
  },

  // ── Book Card
  bookCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 14,
    gap: 14,
    alignItems: 'flex-start',
  },
  bookImg: {
    width: 68,
    height: 88,
    borderRadius: 10,
    resizeMode: 'cover',
    backgroundColor: COLORS.bg,
  },
  bookBody: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 8,
  },
  bookTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.text,
    flex: 1,
    marginRight: 8,
    letterSpacing: -0.1,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 20,
    gap: 5,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  statusTxt: {
    fontSize: 11,
    fontWeight: '600',
  },
  bookFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  bookPrice: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.green,
    marginBottom: 4,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  dateText: {
    fontSize: 11,
    color: COLORS.muted,
  },
  statChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: COLORS.bg,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statChipText: {
    fontSize: 11,
    color: COLORS.subText,
    fontWeight: '500',
  },
});

export default MyShelf;