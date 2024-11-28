import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity, useColorScheme } from 'react-native'
import React from 'react'
import { APPOINTMENTS } from '../../constrants/common/Text'
import { COLORS } from '../../constrants/common/Colors'
import Images from '../../constrants/common/Images'

const AppointmentsComponent = () => {
  const colorScheme = useColorScheme()
  const darkmode = colorScheme == 'dark'

  const doctorList = [
    {
      name: 'Jason Smith',
      exp: 'Dentist',
      rating: '4.8',
      ratingStar: Images.STAR,
      date: '5 Oct',
      time: '10.30pm',
      image: Images.DOCTOR13,
    },
    {
      name: 'Robert Johnson',
      exp: 'Neurologist',
      rating: '4.5',
      ratingStar: Images.STAR,
      date: '6 Oct',
      time: '10.00pm',
      image: Images.DOCTOR3,
    },
    {
      name: 'Brian Clark',
      exp: 'Psychiatrist',
      rating: '3.9',
      ratingStar: Images.STAR,
      date: '7 Oct',
      time: '10.10pm',
      image: Images.DOCTOR14,
    },
    {
      name: 'Divide H. Brown',
      exp: 'Pediatrician',
      rating: '5',
      ratingStar: Images.STAR,
      date: '8 Oct',
      time: '10.20am',
      image: Images.DOCTOR9,
    },
    {
      name: 'Patricia Garcia',
      exp: 'Psychlogist',
      rating: '3.8',
      ratingStar: Images.STAR,
      date: '9 Oct',
      time: '09.30pm',
      image: Images.DOCTOR7,
    },
    {
      name: 'Loura White',
      exp: 'Dentist',
      rating: '4.9',
      ratingStar: Images.STAR,
      date: '10 Oct',
      time: '11.50pm',
      image: Images.DOCTOR5,
    },
  ]
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={{
        fontSize: 22,
        fontWeight: '700',
        marginVertical: 20,
        marginHorizontal: 30,
        color: darkmode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON
      }}>
        {APPOINTMENTS}</Text>
      <FlatList
        style={{ marginLeft: 20 }}
        showsHorizontalScrollIndicator={false}
        data={doctorList}
        horizontal
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <View style={styles.parentView}>
                <View style={styles.childView}>
                  <View style={{ flexDirection: 'row', }}>
                    <Image
                      style={styles.imageStyle}
                      source={item.image} />
                    <View style={{ marginLeft: 8 }}>
                      <Text style={{ color: COLORS.MAIN_BG, fontSize: 18, fontWeight: 500, width: 110 }} numberOfLines={1}>{item.name}</Text>
                      <Text style={{ color: COLORS.CB_GRAY, fontSize: 18, marginTop: 3 }}>{item.exp}</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={{ marginTop: 10, color: COLORS.MAIN_BG, fontSize: 17, fontWeight: 500 }}>{item.rating}</Text>
                        <Image style={{ height: 18, width: 18, marginVertical: 10, marginHorizontal: 5 }} source={item.ratingStar} />
                      </View>
                    </View>
                    <TouchableOpacity style={{ alignItems: 'center', marginTop: 15, marginLeft: 25 }}>
                      <Image
                        style={{ height: 23, width: 23 }}
                        source={Images.THREE_DOTS} />
                    </TouchableOpacity>
                  </View>
                  <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Image style={{ height: 20, width: 20 }} source={Images.CALENDER} />
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ color: COLORS.MAIN_BG, fontSize: 17, marginLeft: 8, fontWeight: 500 }}>{item.date}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 20, }}>
                      <Image style={{ height: 20, width: 20 }} source={Images.TIME} />
                      <Text style={{ color: COLORS.MAIN_BG, fontSize: 17, marginLeft: 5, fontWeight: 500 }}>{item.time}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export default AppointmentsComponent

const styles = StyleSheet.create({
  parentView: {
    backgroundColor: COLORS.CONTINUE_BG,
    height: 150,
    margin: 10,
    width: 250,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    height: 42,
    width: 42,
    borderRadius: 200,
    borderWidth: 1,
    borderColor: COLORS.MAIN_BG,
    backgroundColor: COLORS.IMAGE_BG
  },
  childView: {
    height: 110,
    width: 200,
    justifyContent: 'center',
    margin: 50,
  }
})