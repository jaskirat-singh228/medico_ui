import { StyleSheet, Text, TextInput, View, TouchableOpacity, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import { CONTINUE, EMAIL, ENTER_EMAIL, ERROR, FULL_NAME } from './Text'
import { COLORS } from './Colors'
import { useNavigation } from '@react-navigation/native'

const SignUpTextInput = () => {
    const colorScheme = useColorScheme()
    const darkMode = colorScheme == 'dark'
    const navigation = useNavigation()

    const [fullNameText, setFullNameText] = useState('')
    const [fullNameBrColor, setFullNameBrColor] = useState(false)
    const [fullNameError, setFullNameError] = useState(false)

    const [emailText, setEmailText] = useState('')
    const [emailBrColor, setEmailBrColor] = useState(false)
    const [emailError, setEmailError] = useState(false)

    const onPressContinue = () => {
        if (fullNameText == '') {
            setFullNameError(true)
        }
        else if (emailText == '') {
            setEmailError(true);
        }
        else {
            setFullNameError(false);
            setEmailError(false);
            navigation.navigate('SetPasswordScreen', { emailText })
        }
    }

    return (
        <View>
            <TextInput
                value={fullNameText}
                onChangeText={(text) => {
                    text.length > 0 && setFullNameError(false)
                    setFullNameText(text)
                }}
                clearButtonMode='always'
                onFocus={() => {
                    setFullNameBrColor(true)
                }}
                style={[styles.textInputStyle, {
                    borderColor: fullNameBrColor ? fullNameError ? darkMode ? COLORS.DARKMODE_ERROR : COLORS.ERROR
                        : COLORS.CONTINUE_BG : fullNameError ? COLORS.ERROR : darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BR,
                    backgroundColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BG,
                    color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON

                }]}
                placeholder={FULL_NAME}
                placeholderTextColor={darkMode ? COLORS.OR : COLORS.PLACEHOLDER_TEXT_COLOR}
            />
            {
                fullNameError ?
                    <Text style={{ color: COLORS.ERROR, marginTop: 15, fontSize: 20 }}>{ERROR}</Text>
                    : null
            }
            <Text style={{ fontSize: 20, marginTop: 20, color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>{EMAIL}</Text>
            <TextInput
                value={emailText}
                onChangeText={(text) => {
                    text.length > 0 && setEmailError(false)
                    setEmailText(text)
                }}
                clearButtonMode='always'
                onFocus={() => {
                    setEmailBrColor(true)
                }}
                style={[styles.textInputStyle, {
                    borderColor: emailBrColor ? emailError ? darkMode ? COLORS.DARKMODE_ERROR : COLORS.ERROR
                        : COLORS.CONTINUE_BG : emailError ? COLORS.ERROR : darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BR,
                    backgroundColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BG,
                    color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON
                }]}
                placeholder={ENTER_EMAIL}
                placeholderTextColor={darkMode ? COLORS.OR : COLORS.PLACEHOLDER_TEXT_COLOR}
            />
            {
                emailError ?
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
    textInputStyle: {
        height: 70,
        borderRadius: 20,
        borderColor: COLORS.TEXTINPUT_BR,
        borderWidth: 1,
        marginTop: 15,
        padding: 15,
        fontSize: 20
    },
    continueStyle: {
        backgroundColor: COLORS.CONTINUE_BG,
        height: 60,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 40
    },
})