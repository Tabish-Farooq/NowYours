import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Habit = require('../../assets/habits.png');
const Rich = require('../../assets/rich.png');
const The = require('../../assets/the.png');
const Harry = require('../../assets/harry.png');

const DATA = [
  { id: '1', title: 'Atomic Habits', author: 'James Clear', price: 349, image: Habit },
  { id: '2', title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', price: 199, image: Rich },
  { id: '3', title: 'The Alchemist', author: 'Paulo Coelho', price: 249, image: The },
  { id: '4', title: 'Harry Potter', author: 'J.K. Rowling', price: 399, image: Harry },
];

const Favourites = () => {
  const [list, setList] = useState(DATA);

  const removeItem = (id) => {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>

        {/* Book Image */}
        <Image source={item.image} style={styles.image} resizeMode="cover" />

        {/* Book Info */}
        <View style={styles.info}>
          <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
          <Text style={styles.author}>{item.author}</Text>
          <Text style={styles.price}>₹{item.price}</Text>
        </View>

        {/* Delete Button */}
        <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.deleteBtn}>
          <Ionicons name="trash-outline" size={20} color="#E84040" />
        </TouchableOpacity>

      </View>
    );
  };

  return (
    <View style={styles.screen}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>Favourites</Text>
        {list.length > 0 && (
          <View style={styles.badge}>
            <AntDesign name="star" size={12} color="#F5A623" />
            <Text style={styles.badgeTxt}>{list.length} saved</Text>
          </View>
        )}
      </View>

      {/* Empty State */}
      {list.length === 0 ? (
        <View style={styles.emptyBox}>
          <AntDesign name="staro" size={50} color="#F5A623" />
          <Text style={styles.emptyTitle}>No Favourites Yet</Text>
          <Text style={styles.emptySub}>Tap ★ on any book to save it here</Text>
        </View>
      ) : (
        <FlatList
          data={list}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ padding: 16, gap: 12 }}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <TouchableOpacity style={styles.clearBtn} onPress={() => setList([])}>
              <Ionicons name="trash-outline" size={16} color="#E84040" />
              <Text style={styles.clearTxt}>Clear All</Text>
            </TouchableOpacity>
          }
        />
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F6F7FB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
    paddingTop: 22,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ECEEF4',
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#15181F',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#FEF6E7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  badgeTxt: {
    fontSize: 12,
    fontWeight: '700',
    color: '#F5A623',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ECEEF4',
    gap: 12,
  },
  image: {
    width: 65,
    height: 88,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: '#15181F',
  },
  author: {
    fontSize: 13,
    color: '#8A8FA3',
  },
  price: {
    fontSize: 15,
    fontWeight: '700',
    color: '#28A56C',
  },
  deleteBtn: {
    padding: 6,
    backgroundColor: '#FDECEA',
    borderRadius: 8,
  },
  clearBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 8,
    paddingVertical: 13,
    borderRadius: 12,
    backgroundColor: '#FDECEA',
    borderWidth: 1,
    borderColor: '#F5C6C2',
  },
  clearTxt: {
    fontSize: 14,
    fontWeight: '700',
    color: '#E84040',
  },
  emptyBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingBottom: 60,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#15181F',
  },
  emptySub: {
    fontSize: 14,
    color: '#8A8FA3',
  },
});

export default Favourites;