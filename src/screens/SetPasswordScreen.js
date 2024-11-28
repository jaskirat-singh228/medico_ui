import { Image, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../constrants/common/Colors'
import { ALREADY_ACC_QESTION, NEW_PASSWORD, SET_PASSWORD, SIGN_IN } from '../constrants/common/Text'
import OrCommon from '../constrants/common/OrCommon'
import SignInHead from '../constrants/common/SignInHead'
import SetPasswordTextInput from '../constrants/common/SetPasswordTextInput'
import AccountQuestion from '../constrants/common/AccountQuestion'
import { useNavigation } from '@react-navigation/native';
import Images from '../constrants/common/Images'


const SetPasswordScreen = () => {
  const colorScheme = useColorScheme()
  const darkMode = colorScheme == 'dark'
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: darkMode ? COLORS.DARKMODE_MAIN_BG : COLORS.MAIN_BG }}>
      <View style={{ flex: 1, marginHorizontal: 30 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ height: 30, width: 30, tintColor: darkMode ? COLORS.MAIN_BG : COLORS.BLACK, marginTop: 10 }}
            source={Images.BLACK_ARROW} />
        </TouchableOpacity>
        <SignInHead title={SET_PASSWORD} title2={NEW_PASSWORD} />
        <SetPasswordTextInput />
        <AccountQuestion title={ALREADY_ACC_QESTION} buttonTitle={SIGN_IN} onPress={() => navigation.navigate('EmailSignInScreen')} />
        <OrCommon />
      </View>
    </SafeAreaView>
  )
}

export default SetPasswordScreen

const styles = StyleSheet.create({})