import { TouchableOpacity, Animated } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/MainScreens/HomeScreen';
import MyShelf from '../screens/MainScreens/MyShelf';
import Favourites from '../screens/MainScreens/Favourites';
import Account from '../screens/MainScreens/Account';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

const TabButton = (props) => (
  <TouchableOpacity {...props} activeOpacity={0.7} />
)

const TAB_ICONS = {
  'Home':       { focused: 'home',   unfocused: 'home-outline'   },
  'My Shelf':   { focused: 'book',   unfocused: 'book-outline'   },
  'Favourites': { focused: 'heart',  unfocused: 'heart-outline'  },
  'Account':    { focused: 'person', unfocused: 'person-outline' },
}

// ✅ Animated icon component
const AnimatedTabIcon = ({ name, color, focused }) => {
  const scaleAnim = React.useRef(new Animated.Value(1)).current

  React.useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: focused ? 1.25 : 1,
      useNativeDriver: true,
      friction: 5,
      tension: 120,
    }).start()
  }, [focused])

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <Ionicons name={name} size={22} color={color} />
    </Animated.View>
  )
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#112353',
        tabBarInactiveTintColor: '#6b7280',
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
        },
        tabBarButton: TabButton,
        tabBarIcon: ({ color, focused }) => {
          const icons = TAB_ICONS[route.name]
          const iconName = focused ? icons.focused : icons.unfocused

          return (
            <AnimatedTabIcon
              name={iconName}
              color={color}
              focused={focused}
            />
          )
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My Shelf" component={MyShelf} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation