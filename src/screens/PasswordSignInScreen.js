import { Image, TouchableOpacity, useColorScheme, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../constrants/common/Colors'
import { CONTINUE, CREATE_ACC, CREATE_ACC_QESTION, ENTER_PASSWORD, PASSWORD, SIGN_IN } from '../constrants/common/Text'
import SignInHead from '../constrants/common/SignInHead'
import OrCommon from '../constrants/common/OrCommon'
import AccountQuestion from '../constrants/common/AccountQuestion'
import EmailTextInput from '../constrants/common/EmailTextInput'
import Images from '../constrants/common/Images'
import { useNavigation } from '@react-navigation/native'
import PasswordTextInput from '../constrants/common/PasswordTextInput'

const PasswordSignInScreen = () => {
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
        <SignInHead title={SIGN_IN} title2={PASSWORD} />
        <PasswordTextInput />
        <AccountQuestion title={CREATE_ACC_QESTION} buttonTitle={CREATE_ACC} onPress={() => navigation.navigate('SignUpScreen')} />
        <OrCommon />
      </View>
    </SafeAreaView>
  )
}

export default PasswordSignInScreen