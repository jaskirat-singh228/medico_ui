import { Button, Image, StyleSheet, Text, TouchableOpacity, View, FlatList, useColorScheme } from 'react-native'
import React from 'react'
import { BRAIN, CATEGORIES, DENTAL, HEART, KIDNEY, LIVER, LUNG, MENTAL, SEE_ALL, STOMACH } from '../../constrants/common/Text'
import Images from '../../constrants/common/Images'
import { COLORS } from '../../constrants/common/Colors'

const CategoriesComponent = () => {
  const colorScheme = useColorScheme()
  const darkmode = colorScheme == 'dark'
  const categoryList = [
    { image: Images.HEART, title: HEART },
    { image: Images.DENTAL, title: DENTAL },
    { image: Images.KIDNEY, title: KIDNEY },
    { image: Images.STOMACH, title: STOMACH },
    { image: Images.LUNG, title: LUNG },
    { image: Images.BRAIN, title: BRAIN },
    { image: Images.MENTAL, title: MENTAL },
    { image: Images.LIVER, title: LIVER },
  ]
  return (
    <View style={{ marginTop: 20 }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginHorizontal: 30,

      }}>
        <Text style={{ fontSize: 22, fontWeight: '700', color: darkmode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>{CATEGORIES}</Text>
        <Text style={{ fontSize: 20, color: darkmode ? COLORS.DARKMODE_OR : COLORS.CONTINUE_BG }}>{SEE_ALL}</Text>
      </View>
      <FlatList
        style={{ marginLeft: 20 }}
        numColumns={4}
        data={categoryList}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <View style={{
                backgroundColor: darkmode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.ICONS_BG,
                margin: 7,
                borderRadius: 20,
                height: 85,
                width: 83,
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Image style={{ height: 34, width: 34, tintColor: darkmode ? COLORS.MAIN_BG : COLORS.BLACK }} source={item.image} />
                <Text style={{ marginTop: 5, color: darkmode ? COLORS.DARKMODE_OR : COLORS.OR, fontWeight: '600' }}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export default CategoriesComponent

const styles = StyleSheet.create({})