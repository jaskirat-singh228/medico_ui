import { StyleSheet, Text, View, TextInput, TouchableOpacity, useColorScheme, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from './Colors'
import { useNavigation } from '@react-navigation/native'
import { CONTINUE, ENTER_PASSWORD, ERROR } from './Text'
import Images from './Images'

const PasswordTextInput = () => {
    const colorScheme = useColorScheme()
    const darkMode = colorScheme == 'dark'
    const navigation = useNavigation();

    const [passwordText, setPasswordText] = useState('')
    const [passwordBrColor, setPasswordBrColor] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const onPressContinue = () => {
        if (passwordText == '') {
            setEmail1Error(true);
        }
        else {
            setEmail1Error(false);
            navigation.navigate('PasswordSignInScreen', { passwordText })

        }
    }
    return (
        <View>
            <View style={[styles.textInputViewStyle, {
                borderColor: passwordBrColor ? passwordError ? darkMode ? COLORS.DARKMODE_ERROR : COLORS.ERROR
                    : COLORS.CONTINUE_BG : passwordError ? darkMode ? COLORS.DARKMODE_ERROR : COLORS.ERROR : darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BR,
                backgroundColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BG,
                color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON,
            }]}>
                <TextInput
                    style={{
                        height: 69,
                        borderRadius: 20,
                        fontSize: 20,
                        width: '82%',
                        marginLeft: 20
                    }}
                    value={passwordText}
                    onChangeText={(text) => {
                        text.length > 0 && setPasswordError(false)
                        setPasswordText(text)
                    }}
                    clearButtonMode='always'
                    onFocus={() => {
                        setPasswordBrColor(true)
                    }}
                    placeholder={ENTER_PASSWORD}
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
            <TouchableOpacity
                style={styles.continueStyle}
                onPress={() => {
                    onPressContinue()
                }}
            >
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: COLORS.MAIN_BG }}>
                    {CONTINUE}</Text>
            </TouchableOpacity>
        </View >
    )
}

export default PasswordTextInput

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
})