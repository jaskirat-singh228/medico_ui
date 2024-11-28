import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, SafeAreaView, useColorScheme } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { COLORS } from '../constrants/common/Colors'
import { ALREADY_ACC_QESTION, CONTINUE, OTP, OTP_TITLE, REMEMBER_PASSWORD, RESEND_OTP, RESND_CODE, SIGN_IN, VERIFY } from '../constrants/common/Text'
import AccountQuestion from '../constrants/common/AccountQuestion'
import { useNavigation, useRoute } from '@react-navigation/native'
import Images from '../constrants/common/Images'

const OtpScreen = () => {
    const colorScheme = useColorScheme()
    const darkMode = colorScheme == 'dark'
    const navigation = useNavigation()
    const route = useRoute();

    if (time == 0) return;
    useEffect(() => {
        const timerId = setInterval(() => {
            setTime((time) => time - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [time]);

    const textInput1 = useRef()
    const textInput2 = useRef()
    const textInput3 = useRef()
    const textInput4 = useRef()

    const [border1, setBorder1] = useState(false)
    const [border2, setBorder2] = useState(false)
    const [border3, setBorder3] = useState(false)
    const [border4, setBorder4] = useState(false)

    const [time, setTime] = useState(60)

    const onPressContinue = () => {
        if (border1 == false) {
            null
        }
        else if (border2 == false) {
            null
        }
        else if (border3 == false) {
            null
        }
        else if (border4 == false) {
            null
        }
        else {
            navigation.navigate('HomePage')
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: darkMode ? COLORS.DARKMODE_MAIN_BG : COLORS.MAIN_BG }}>
            <View style={{ flex: 1, marginHorizontal: 30 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        style={{ height: 30, width: 30, tintColor: darkMode ? COLORS.MAIN_BG : COLORS.BLACK, marginTop: 10 }}
                        source={Images.BLACK_ARROW} />
                </TouchableOpacity>
                <Text style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    marginTop: 100,
                    color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON
                }}>{OTP}</Text>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 20, color: COLORS.OR }}>{OTP_TITLE}</Text>
                    <Text style={{ fontSize: 20, marginTop: 10, color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>{route.params.email}</Text>
                </View>
                <View style={styles.otpContainer} >
                    <View style={[styles.textInputView, { borderColor: border1 ? COLORS.CONTINUE_BG : darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BR, marginLeft: 0 }]}>
                        <TextInput
                            style={[styles.otpTextInputStyle, {
                                color: darkMode ? COLORS.MAIN_BG : COLORS.CONTINUE_BG,
                                backgroundColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BG
                            }]}
                            onFocus={() => {
                                setBorder1(true)
                                setBorder2(false)
                                setBorder3(false)
                                setBorder4(false)
                            }}
                            placeholder='0'
                            maxLength={1}
                            placeholderTextColor={darkMode ? COLORS.OR : COLORS.OTP_PLACE_HOLDER}
                            ref={textInput1}
                            onChangeText={(text) => {
                                text ? textInput2.current.focus() : textInput1.current.focus()
                            }}
                        />
                    </View>
                    <View style={[styles.textInputView, { borderColor: border2 ? COLORS.CONTINUE_BG : darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BR }]}>
                        <TextInput
                            style={[styles.otpTextInputStyle, {
                                color: darkMode ? COLORS.MAIN_BG : COLORS.CONTINUE_BG,
                                backgroundColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BG
                            }]}
                            onFocus={() => {
                                setBorder1(true)
                                setBorder2(true)
                                setBorder3(false)
                                setBorder4(false)
                            }}
                            placeholder='0'
                            maxLength={1}
                            placeholderTextColor={darkMode ? COLORS.OR : COLORS.OTP_PLACE_HOLDER}
                            ref={textInput2}
                            onChangeText={(text) => {
                                text ? textInput3.current.focus() : textInput1.current.focus()
                            }}
                        />
                    </View>
                    <View style={[styles.textInputView, { borderColor: border3 ? COLORS.CONTINUE_BG : darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BR }]}>
                        <TextInput
                            style={[styles.otpTextInputStyle, {
                                color: darkMode ? COLORS.MAIN_BG : COLORS.CONTINUE_BG,
                                backgroundColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BG
                            }]}
                            onFocus={() => {
                                setBorder1(true)
                                setBorder2(true)
                                setBorder3(true)
                                setBorder4(false)
                            }}
                            placeholder='0'
                            placeholderTextColor={darkMode ? COLORS.OR : COLORS.OTP_PLACE_HOLDER}
                            maxLength={1}
                            ref={textInput3}
                            onChangeText={(text) => {
                                text ? textInput4.current.focus() : textInput2.current.focus()
                            }}
                        />
                    </View>
                    <View style={[styles.textInputView, { borderColor: border4 ? COLORS.CONTINUE_BG : darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BR }]}>
                        <TextInput
                            style={[styles.otpTextInputStyle, {
                                color: darkMode ? COLORS.MAIN_BG : COLORS.CONTINUE_BG,
                                backgroundColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BG
                            }]}
                            onFocus={() => {
                                setBorder1(true)
                                setBorder2(true)
                                setBorder3(true)
                                setBorder4(true)
                            }}
                            placeholder='0'
                            maxLength={1}
                            placeholderTextColor={darkMode ? COLORS.OR : COLORS.OTP_PLACE_HOLDER}
                            ref={textInput4}
                            onChangeText={(text) => {
                                text ? textInput4.current.focus() : textInput3.current.focus()
                            }}
                        />
                    </View>
                </View>
                <View style={{ justifyContent: 'center', flexDirection: 'row', marginBottom: 10 }}>
                    <Text style={{ fontSize: 18, color: COLORS.OR }}>{RESND_CODE}</Text>
                    <Text style={{ fontSize: 18, color: darkMode ? COLORS.PLACEHOLDER_TEXT_COLOR : COLORS.CONTINUE_BG }}>{time} s</Text>
                </View>
                <TouchableOpacity
                    style={styles.continueStyle}
                    onPress={() => onPressContinue()} >
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: COLORS.MAIN_BG }}>
                        {border4 ? time <= 0 ? RESEND_OTP : VERIFY : CONTINUE}</Text>
                </TouchableOpacity>
                <AccountQuestion title={border4 ? REMEMBER_PASSWORD : ALREADY_ACC_QESTION} buttonTitle={SIGN_IN} onPress={() => navigation.navigate('EmailSignInScreen')} />
            </View>
        </SafeAreaView>
    )
}

export default OtpScreen

const styles = StyleSheet.create({
    textInputView: {
        borderWidth: 1,
        borderRadius: 20,
        marginLeft: 20,
    },
    otpTextInputStyle: {
        backgroundColor: COLORS.TEXTINPUT_BG,
        fontSize: 30,
        color: COLORS.CONTINUE_BG,
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 28,
        fontWeight: '600'
    },
    otpContainer: {
        height: 100,
        flexDirection: 'row',
        marginVertical: 35,
        alignItems: 'center',
    },
    continueStyle: {
        backgroundColor: COLORS.CONTINUE_BG,
        height: 60,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30
    },
})