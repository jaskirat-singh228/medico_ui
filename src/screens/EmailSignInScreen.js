import { SafeAreaView, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import { CONTINUE, CREATE_ACC, CREATE_ACC_QESTION, EMAIL, ENTER_EMAIL, SIGN_IN } from '../constrants/common/Text'
import { COLORS } from '../constrants/common/Colors'
import OrCommon from '../constrants/common/OrCommon'
import SignInHead from '../constrants/common/SignInHead'
import AccountQuestion from '../constrants/common/AccountQuestion'
import EmailTextInput from '../constrants/common/EmailTextInput'
import { useNavigation } from '@react-navigation/native'

const EmailSignInScreen = () => {
    const colorScheme = useColorScheme()
    const darkMode = colorScheme == 'dark'
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: darkMode ? COLORS.DARKMODE_MAIN_BG : COLORS.MAIN_BG }}>
            <View style={{ flex: 1, margin: 30, marginVertical: 70 }}>
                <SignInHead title={SIGN_IN} title2={EMAIL} />
                <EmailTextInput />
                <AccountQuestion title={CREATE_ACC_QESTION} buttonTitle={CREATE_ACC} onPress={() => navigation.navigate('SignUpScreen')} />
                <OrCommon />
            </View>
        </SafeAreaView>
    )
}

export default EmailSignInScreen