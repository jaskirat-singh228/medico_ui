import { StyleSheet, Text, View, TextInput, TouchableOpacity, useColorScheme, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from './Colors'
import { useNavigation } from '@react-navigation/native'
import { CONTINUE, ENTER_EMAIL, ERROR } from './Text'

const EmailTextInput = () => {
    const colorScheme = useColorScheme()
    const darkMode = colorScheme == 'dark'
    const navigation = useNavigation();

    const [email1Text, setEmail1Text] = useState('')
    const [email1BrColor, setEmail1BrColor] = useState(false)
    const [email1Error, setEmail1Error] = useState(false)

    const onPressContinue = () => {
        if (email1Text == '') {
            setEmail1Error(true);
        }
        else {
            setEmail1Error(false);
            navigation.navigate('PasswordSignInScreen', { email1Text })
        }
    }
    return (
        <View>
            <TextInput
                style={[styles.textInputStyle, {
                    borderColor: email1BrColor ? email1Error ? darkMode ? COLORS.DARKMODE_ERROR : COLORS.ERROR
                        : COLORS.CONTINUE_BG : email1Error ? darkMode ? COLORS.DARKMODE_ERROR : COLORS.ERROR : darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BR,
                    backgroundColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BG,
                    color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON,
                }]}
                value={email1Text}
                onChangeText={(text) => {
                    text.length > 0 && setEmail1Error(false)
                    setEmail1Text(text)
                }}
                clearButtonMode='always'
                onFocus={() => {
                    setEmail1BrColor(true)
                }}
                placeholder={ENTER_EMAIL}
                placeholderTextColor={darkMode ? COLORS.OR : COLORS.PLACEHOLDER_TEXT_COLOR}
            />
            {
                email1Error ?
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

export default EmailTextInput

const styles = StyleSheet.create({
    textInputStyle: {
        height: 70,
        borderRadius: 20,
        borderWidth: 1,
        marginTop: 15,
        padding: 20,
        fontSize: 20,
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