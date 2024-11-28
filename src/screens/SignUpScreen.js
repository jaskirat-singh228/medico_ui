import { Image, SafeAreaView, TouchableOpacity, useColorScheme, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constrants/common/Colors'
import { ALREADY_ACC_QESTION, FULL_NAME, SIGN_IN, SIGN_UP } from '../constrants/common/Text'
import SignInHead from '../constrants/common/SignInHead'
import OrCommon from '../constrants/common/OrCommon'
import SignUpTextInput from '../constrants/common/SignUpTextInput'
import AccountQuestion from '../constrants/common/AccountQuestion'
import { useNavigation } from '@react-navigation/native'
import Images from '../constrants/common/Images'

const SignUpScreen = () => {
  const colorScheme = useColorScheme()
  const darkMode = colorScheme == 'dark'
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: darkMode ? COLORS.DARKMODE_MAIN_BG : COLORS.MAIN_BG }}>
      <View style={{ flex: 1, marginHorizontal: 30 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ height: 30, width: 30, tintColor: darkMode ? COLORS.MAIN_BG : COLORS.BLACK, marginTop: 10 }}
            source={Images.BLACK_ARROW} />
        </TouchableOpacity>
        <SignInHead title={SIGN_UP} title2={FULL_NAME} />
        <SignUpTextInput />
        <AccountQuestion title={ALREADY_ACC_QESTION} buttonTitle={SIGN_IN} onPress={() => navigation.navigate('EmailSignInScreen')} />
        <OrCommon />
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen