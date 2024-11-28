import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Bookings from './Bookings';
import Chat from './Chat';
import Profile from './Profile';
import { COLORS } from '../../constrants/common/Colors';
import { Image, StyleSheet, Text, useColorScheme } from 'react-native';
import { BOOKINGS, CHAT, HOME, PROFILE } from '../../constrants/common/Text';
import Images from '../../constrants/common/Images';

const Tab = createBottomTabNavigator();

const HomePage = () => {
  const colorScheme = useColorScheme()
  const darkmode = colorScheme == 'dark'
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 100,
          backgroundColor: darkmode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.CONTINUE_BG,
        },
        tabBarActiveTintColor: COLORS.MAIN_BG,
        tabBarInactiveTintColor: COLORS.TAB_BAR_INACTIVE,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            <Image
              style={[style.imageStyle, { tintColor: focused ? COLORS.MAIN_BG : darkmode ? COLORS.DARKMODE_OR : COLORS.TAB_BAR_INACTIVE }]}
              source={Images.HOME} />,
          tabBarLabel: ({ focused }) => (<Text style={{ color: focused ? COLORS.MAIN_BG : darkmode ? COLORS.DARKMODE_OR : COLORS.TAB_BAR_INACTIVE, fontSize: 18, fontWeight: '500' }}>{HOME}</Text>)
        }} />
      <Tab.Screen
        name="Booking"
        component={Bookings}
        options={{
          tabBarIcon: ({ focused }) =>
            <Image
              style={[style.imageStyle, { tintColor: focused ? COLORS.MAIN_BG : darkmode ? COLORS.DARKMODE_OR : COLORS.TAB_BAR_INACTIVE }]}
              source={Images.BOOKINGS} />,
          tabBarLabel: ({ focused }) => (<Text style={{ color: focused ? COLORS.MAIN_BG : darkmode ? COLORS.DARKMODE_OR : COLORS.TAB_BAR_INACTIVE, fontSize: 18, fontWeight: '500' }}>{BOOKINGS}</Text>)
        }} />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ focused }) =>
            <Image
              style={[style.imageStyle, { tintColor: focused ? COLORS.MAIN_BG : darkmode ? COLORS.DARKMODE_OR : COLORS.TAB_BAR_INACTIVE }]}
              source={Images.CHAT} />,
          tabBarLabel: ({ focused }) => (<Text style={{ color: focused ? COLORS.MAIN_BG : darkmode ? COLORS.DARKMODE_OR : COLORS.TAB_BAR_INACTIVE, fontSize: 18, fontWeight: '500' }}>{CHAT}</Text>)

        }} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            <Image
              style={[style.imageStyle, { tintColor: focused ? COLORS.MAIN_BG : darkmode ? COLORS.DARKMODE_OR : COLORS.TAB_BAR_INACTIVE }]}
              source={Images.PROFILE_ICON} />,
          tabBarLabel: ({ focused }) => (<Text style={{ color: focused ? COLORS.MAIN_BG : darkmode ? COLORS.DARKMODE_OR : COLORS.TAB_BAR_INACTIVE, fontSize: 18, fontWeight: '500' }}>{PROFILE}</Text>)

        }} />
    </Tab.Navigator>
  )
}
export default HomePage

const style = StyleSheet.create({
  imageStyle: {
    height: 28,
    width: 28,
    marginTop: 8
  }
})