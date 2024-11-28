import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { COLORS } from '../../constrants/common/Colors'
import { AUDIO_CALL } from '../../constrants/common/Text'
import Images from '../../constrants/common/Images'

const AudioCall = () => {

  const navigation = useNavigation()
  const route = useRoute()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.CONTINUE_BG }}>
      <View style={{ flex: 1 }}>
        <View style={styles.viewStyle}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ height: 30, width: 30, tintColor: COLORS.MAIN_BG }}
              source={Images.WHITE_ARROW} />
          </TouchableOpacity>
          <Text style={styles.textStyle}>{AUDIO_CALL}</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image
            style={styles.doctorsImageStyle}
            source={route.params.doctor.image} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.MAIN_BG, marginTop: 15 }}>{route.params.doctor.name}</Text>
          <Text style={{ fontSize: 20, color: COLORS.CB_GRAY, marginTop: 15, fontWeight: '500' }}>{route.params.doctor.time} min</Text>
        </View>
        <View style={styles.callingParentView}>
          <TouchableOpacity>
            <Image style={styles.imageStyle} source={Images.SPEAKER} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={[styles.imageStyle, { borderWidth: 0 }]} source={Images.FILLED_VIDEO_CALL} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={[styles.imageStyle, { borderWidth: 0 }]} source={Images.RECORDER} />
          </TouchableOpacity>
        </View>
        <View style={[styles.callingParentView, { marginTop: 10, alignSelf: 'center', justifyContent: 'center' }]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Chat')}
          >
            <Image style={[styles.imageStyle, { borderWidth: 0 }]} source={Images.CALL_END} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default AudioCall

const styles = StyleSheet.create({
  viewStyle: {
    marginTop: 10,
    flexDirection: 'row',
    marginHorizontal: 30,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.MAIN_BG,
    marginLeft: 20,
    marginTop: 2
  },
  doctorsImageStyle: {
    height: 170,
    width: 170,
    borderRadius: 200,
    marginTop: 100,
    backgroundColor: COLORS.IMAGE_BG,
    borderWidth: 1,
    borderColor: COLORS.MAIN_BG
  },
  callingParentView: {
    height: 80,
    marginTop: 130,
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 30,
    width: 350,
    marginLeft: 40
  },
  imageStyle: {
    height: 75,
    width: 95,
    borderRadius: 40,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.MAIN_BG
  },
})