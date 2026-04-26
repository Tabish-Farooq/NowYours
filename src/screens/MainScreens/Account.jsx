import React from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { AccountDetailsData } from '../../data/AccountDetailsData';

const COLORS = {
  bg: '#F7F8FA',
  card: '#FFFFFF',
  primary: '#3B6DCA',
  primaryLight: '#EBF0FB',
  text: '#1A1D23',
  subText: '#7A7F8A',
  border: '#EAECF0',
  green: '#2E7D52',
  greenLight: '#E8F5EE',
  iconBg: '#F0F2F8',
  danger: '#C0392B',
  dangerLight: '#FDECEA',
  avatarBg: '#D6E4FF',
  avatarText: '#1A3A7C',
};

const renderIcon = (lib, name, color) => {
  const props = { name, color, size: 20 };
  if (lib === 'Ionicons') return <Ionicons {...props} />;
  if (lib === 'Octicons') return <Octicons {...props} />;
  if (lib === 'EvilIcons') return <EvilIcons {...props} />;
  if (lib === 'SimpleLineIcons') return <SimpleLineIcons {...props} />;
  if (lib === 'MaterialCommunityIcons') return <MaterialCommunityIcons {...props} />;
  if (lib === 'AntDesign') return <AntDesign {...props} />;
  return null;
};

const SettingsRow = ({ item }) => (
  <TouchableOpacity activeOpacity={0.7} style={styles.row}>
    <View style={[styles.iconBox, { backgroundColor: item.bgColor || COLORS.iconBg }]}>
      {renderIcon(item.lib, item.icon, item.color)}
    </View>
    <View style={styles.rowContent}>
      <Text style={styles.rowTitle}>{item.heading}</Text>
      {item.subHeading ? (
        <Text style={styles.rowSub}>{item.subHeading}</Text>
      ) : null}
    </View>
    <AntDesign name="right" color={COLORS.subText} size={14} />
  </TouchableOpacity>
);

const Divider = () => <View style={styles.divider} />;

const Account = () => {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <Text style={styles.screenTitle}>Account</Text>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>TF</Text>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Tabish Farooq</Text>
          <Text style={styles.profileEmail}>tabishfarooq@gmail.com</Text>
          <View style={styles.verifiedBadge}>
            <MaterialCommunityIcons
              name="check-decagram"
              color={COLORS.green}
              size={14}
            />
            <Text style={styles.verifiedText}>Verified User</Text>
          </View>
        </View>
        
      </View>

      {/* Settings Card */}
      <View style={styles.card}>
        <Text style={styles.sectionLabel}>Settings</Text>
        <FlatList
          data={AccountDetailsData}
          renderItem={({ item, index }) => (
            <>
              <SettingsRow item={item} />
              {index < AccountDetailsData.length - 1 && <Divider />}
            </>
          )}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
        />
      </View>

      {/* Safety Card */}
      <View style={styles.card}>
        <View style={styles.safetyRow}>
          <View style={[styles.iconBox, { backgroundColor: COLORS.primaryLight }]}>
            <AntDesign name="Safety" color={COLORS.primary} size={20} />
          </View>
          <View style={styles.rowContent}>
            <Text style={styles.rowTitle}>Safety First</Text>
            <Text style={styles.rowSub}>
              Always meet in public and verify the book before any payment.
            </Text>
          </View>
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutBtn} activeOpacity={0.8}>
        <AntDesign name="logout" color={COLORS.danger} size={16} />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>

      <View style={{ height: 32 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  screenTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 20,
    letterSpacing: -0.3,
  },

  // Profile Card
  profileCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: COLORS.avatarBg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  avatarText: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.avatarText,
    letterSpacing: 1,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 2,
  },
  profileEmail: {
    fontSize: 13,
    color: COLORS.subText,
    marginBottom: 6,
  },
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.greenLight,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 20,
    gap: 4,
  },
  verifiedText: {
    fontSize: 11,
    color: COLORS.green,
    fontWeight: '600',
    marginLeft: 4,
  },
  editBtn: {
    padding: 8,
    backgroundColor: COLORS.primaryLight,
    borderRadius: 10,
  },

  // Card
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.subText,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    marginBottom: 12,
  },

  // Row
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  safetyRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  rowContent: {
    flex: 1,
  },
  rowTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 1,
  },
  rowSub: {
    fontSize: 12,
    color: COLORS.subText,
    lineHeight: 17,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginLeft: 52,
  },

  // Logout
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.dangerLight,
    borderRadius: 14,
    paddingVertical: 14,
    gap: 8,
    borderWidth: 1,
    borderColor: '#F5C6C2',
  },
  logoutText: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.danger,
    marginLeft: 8,
  },
});

export default Account;