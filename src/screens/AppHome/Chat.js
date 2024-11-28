import { FlatList, Image, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../constrants/common/Colors'
import { CHAT } from '../../constrants/common/Text'
import Images from '../../constrants/common/Images'
import { useNavigation } from '@react-navigation/native'

const Chat = () => {
  const colorScheme = useColorScheme()
  const darkMode = colorScheme == 'dark'
  const navigation = useNavigation()

  const [doctorsList, setDoctorsList] = useState([
    {
      id: 1,
      name: 'Davide H. Brown',
      exp: 'Psychologists',
      image: Images.DOCTOR3,
      time: '22:55'
    },
    {
      id: 2,
      name: 'Robert Johnson',
      exp: 'Neurologist',
      image: Images.DOCTOR8,
      time: '20:25'
    },
    {
      id: 3,
      name: 'Loura White',
      exp: 'Dentist',
      image: Images.DOCTOR2,
      time: '02:20'
    },
    {
      id: 4,
      name: 'Jennifer Miller',
      exp: 'Padiatrician',
      image: Images.DOCTOR4,
      time: '08:03'
    },
    {
      id: 5,
      name: 'Brian Clark',
      exp: 'Psychologists',
      image: Images.DOCTOR1,
      time: '28:11'
    },
    {
      id: 6,
      name: 'Joden John',
      exp: 'Cardiologist',
      image: Images.DOCTOR3,
      time: '42:52'
    },
    {
      id: 7,
      name: 'Jason Smith',
      exp: 'Psychologists',
      image: Images.DOCTOR14,
      time: '12:02'
    },
    {
      id: 8,
      name: 'Patricia Garcia',
      exp: 'Oncologist',
      image: Images.DOCTOR7,
      time: '17:12'
    },
    {
      id: 9,
      name: 'Poonam',
      exp: 'Dentist',
      image: Images.DOCTOR4,
      time: '05:50'
    },
    {
      id: 10,
      name: 'Rahul',
      exp: 'Geriatrician',
      image: Images.DOCTOR8,
      time: '21:15'
    },
    {
      id: 11,
      name: 'Neha Sharma',
      exp: 'Oncologist',
      image: Images.DOCTOR4,
      time: '22:01'
    },
    {
      id: 12,
      name: 'Amandeep Kaur',
      exp: 'Geriatrician',
      image: Images.DOCTOR11,
      time: '25:10'
    },
    {
      id: 13,
      name: 'Annu Choudhry',
      exp: 'RadioLogist',
      image: Images.DOCTOR7,
      time: '10:35'
    },
    {
      id: 14,
      name: 'John Doe',
      exp: 'Radiologist',
      image: Images.DOCTOR10,
      time: '20:40'
    },
  ])

  const onPressAudio = (doctor) => {
    navigation.navigate('AudioCall', { doctor })
  }
  return (
    <View style={{ flex: 1, backgroundColor: darkMode ? COLORS.DARKMODE_MAIN_BG : COLORS.MAIN_BG }}>
      <View style={{ flex: 1, marginHorizontal: 30, }}>
        <View style={styles.viewStyle}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON
          }}>{CHAT}</Text>
          <View style={{ flexDirection: 'row', marginTop: 0 }}>
            <TouchableOpacity style={{ paddingHorizontal: 20 }}>
              <Image
                style={{ height: 33, width: 33, tintColor: darkMode ? COLORS.MAIN_BG : COLORS.BLACK }}
                source={Images.BLACK_SEARCH}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingHorizontal: 8 }}>
              <Image
                style={{ height: 33, width: 33, tintColor: darkMode ? COLORS.MAIN_BG : COLORS.BLACK }}
                source={Images.UNFILLED_BLACK_HEART}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={doctorsList}
            renderItem={({ item }) => {
              return (
                <View style={styles.flatlistView}>
                  <View style={{ flexDirection: 'row' }}>
                    <Image style={styles.imageStyle} source={item.image} />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={{ fontSize: 17, fontWeight: 'bold', color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>{item.name}</Text>
                      <Text style={{ color: darkMode ? COLORS.DARKMODE_OR : COLORS.OR, marginTop: 10, fontSize: 17 }}>{item.exp}</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                      onPress={() => onPressAudio(item)}
                      style={{ padding: 10, paddingHorizontal: 25 }}>
                      <Image
                        style={{ height: 19, width: 21, tintColor: darkMode ? COLORS.MAIN_BG : COLORS.BLACK }}
                        source={Images.CALL} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 10 }}>
                      <Image
                        style={{ height: 18, width: 26, tintColor: darkMode ? COLORS.MAIN_BG : COLORS.BLACK }}
                        source={Images.UNFILLED_VIDEO_CALL} />
                    </TouchableOpacity>
                  </View>
                </View>
              )
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  imageStyle: {
    height: 50,
    width: 50,
    borderRadius: 200,
    borderWidth: 1,
    borderColor: COLORS.TEXTINPUT_BR,
    backgroundColor: COLORS.IMAGE_BG
  },
  viewStyle: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 70,
  },
  flatlistView: {
    height: 60,
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})