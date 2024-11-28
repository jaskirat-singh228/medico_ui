import { StyleSheet, Text, TextInput, View, TouchableOpacity, useColorScheme, Image } from 'react-native'
import React, { useState } from 'react'
import { CONFIRM_PASSWORD, CONTINUE, ERROR, NEW_PASSWORD, } from './Text'
import { COLORS } from './Colors'
import { useNavigation, useRoute } from '@react-navigation/native'
import Images from './Images'

const SignUpTextInput = () => {
    const colorScheme = useColorScheme()
    const darkMode = colorScheme == 'dark'
    const route = useRoute()
    const navigation = useNavigation()

    const [passwordText, setPasswordText] = useState('')
    const [passwordBrColor, setPasswordBrColor] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const [confirmPasswordText, setConfirmPasswordText] = useState('')
    const [confirmPasswordBrColor, setConfirmPasswordBrColor] = useState(false)
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)

    const onPressContinue = () => {
        if (passwordText == '') {
            setPasswordError(true)
        }
        else if (confirmPasswordText == '') {
            setConfirmPasswordError(true);
        }
        else {
            setPasswordError(false);
            setConfirmPasswordError(false);
            navigation.navigate('OtpScreen', { email: route.params.emailText })
        }
    }

    return (
        <View>
            <View style={[styles.textInputViewStyle, {
                borderColor: passwordBrColor ? passwordError ? darkMode ? COLORS.DARKMODE_ERROR : COLORS.ERROR
                    : COLORS.CONTINUE_BG : passwordError ? COLORS.ERROR : darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BR,
                backgroundColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BG,
                color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON
            }]}>
                <TextInput
                    style={[styles.textInputStyle, { color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }]}
                    value={passwordText}
                    onChangeText={(text) => {
                        text.length > 0 && setPasswordError(false)
                        setPasswordText(text)
                    }}
                    clearButtonMode='always'
                    onFocus={() => {
                        setPasswordBrColor(true)
                    }}
                    placeholder={NEW_PASSWORD}
                    placeholderTextColor={darkMode ? COLORS.OR : COLORS.PLACEHOLDER_TEXT_COLOR}
                />
                <Image
                    style={{
                        alignSelf: 'center',
                        height: 28,
                        width: 28,
                        tintColor: COLORS.PLACEHOLDER_TEXT_COLOR,
                    }}
                    source={Images.PASSWORD_EYE} />
            </View>
            {
                passwordError ?
                    <Text style={{ color: COLORS.ERROR, marginTop: 15, fontSize: 20 }}>{ERROR}</Text>
                    : null
            }
            <Text style={{ fontSize: 20, marginTop: 20, color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>{CONFIRM_PASSWORD}</Text>
            <View style={[styles.textInputViewStyle, {
                borderColor: confirmPasswordBrColor ? confirmPasswordError ? darkMode ? DARKMODE_ERROR : COLORS.ERROR
                    : COLORS.CONTINUE_BG : confirmPasswordError ? COLORS.ERROR : darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BR,
                backgroundColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BG,
                color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON
            }]}>
                <TextInput
                    style={[styles.textInputStyle, { color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }]}
                    value={confirmPasswordText}
                    onChangeText={(text) => {
                        text.length > 0 && setConfirmPasswordError(false)
                        setConfirmPasswordText(text)
                    }}
                    clearButtonMode='always'
                    onFocus={() => {
                        setConfirmPasswordBrColor(true)
                    }}
                    placeholder={CONFIRM_PASSWORD}
                    placeholderTextColor={darkMode ? COLORS.OR : COLORS.PLACEHOLDER_TEXT_COLOR}
                />
                <Image
                    style={{
                        alignSelf: 'center',
                        height: 28,
                        width: 28,
                        tintColor: COLORS.PLACEHOLDER_TEXT_COLOR,
                    }}
                    source={Images.PASSWORD_EYE} />
            </View>
            {
                confirmPasswordError ?
                    <Text style={{ color: COLORS.ERROR, marginTop: 15, fontSize: 20 }}>{ERROR}</Text>
                    : null
            }
            <TouchableOpacity
                style={styles.continueStyle}
                onPress={() => {
                    onPressContinue()
                }}
            >
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: COLORS.MAIN_BG }}>
                    {CONTINUE}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignUpTextInput

const styles = StyleSheet.create({
    textInputViewStyle: {
        height: 70,
        borderRadius: 20,
        borderColor: COLORS.TEXTINPUT_BR,
        borderWidth: 1,
        marginTop: 15,
        flexDirection: 'row'
    },
    continueStyle: {
        backgroundColor: COLORS.CONTINUE_BG,
        height: 60,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 40
    },
    textInputStyle: {
        height: 69,
        borderRadius: 20,
        fontSize: 20,
        width: '82%',
        marginLeft: 20
    }
})