import { Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../constrants/common/Colors'
import { useNavigation } from '@react-navigation/native'
import { GPAY, MASTERCARD, NEXT, PAYMENT_METHODS, PAYONEER, PAYPAL, SELECT_METHOD, VISA, } from '../../constrants/common/Text'
import Images from '../../constrants/common/Images'


const PaymentMethodScreen = () => {
    const colorScheme = useColorScheme()
    const darkMode = colorScheme == 'dark'
    const navigation = useNavigation()

    const [onPress1, setOnPress1] = useState(false)
    const [onPress2, setOnPress2] = useState(false)
    const [onPress3, setOnPress3] = useState(false)
    const [onPress4, setOnPress4] = useState(false)
    const [onPress5, setOnPress5] = useState(false)

    const onPressRadioButton1 = () => {
        if (onPress1) {
            setOnPress1(false)
        }
        else {
            setOnPress1(true)
            setOnPress2(false)
            setOnPress3(false)
            setOnPress4(false)
            setOnPress5(false)
        }
    }
    const onPressRadioButton2 = () => {
        if (onPress2) {
            setOnPress2(false)
        }
        else {
            setOnPress1(false)
            setOnPress2(true)
            setOnPress3(false)
            setOnPress4(false)
            setOnPress5(false)
        }
    }
    const onPressRadioButton3 = () => {
        if (onPress3) {
            setOnPress3(false)
        }
        else {
            setOnPress1(false)
            setOnPress2(false)
            setOnPress3(true)
            setOnPress4(false)
            setOnPress5(false)
        }
    }
    const onPressRadioButton4 = () => {
        if (onPress4) {
            setOnPress4(false)
        }
        else {
            setOnPress1(false)
            setOnPress2(false)
            setOnPress3(false)
            setOnPress4(true)
            setOnPress5(false)
        }
    }
    const onPressRadioButton5 = () => {
        if (onPress5) {
            setOnPress5(false)
        }
        else {
            setOnPress1(false)
            setOnPress2(false)
            setOnPress3(false)
            setOnPress4(false)
            setOnPress5(true)
        }
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: darkMode ? COLORS.DARKMODE_MAIN_BG : COLORS.MAIN_BG }}>
            <View style={{ flex: 1, marginHorizontal: 30, marginVertical: 8 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                style={{ height: 28, width: 28, tintColor: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}
                                source={Images.BLACK_ARROW} />
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: '700',
                            marginTop: 2,
                            color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON,
                            marginLeft: 20
                        }}>{PAYMENT_METHODS}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={{ paddingHorizontal: 20 }}
                            onPress={() => {
                                navigation.navigate('SearchForDoctorsComponent')
                            }}>
                            <Image
                                style={{ height: 33, width: 33, tintColor: darkMode ? COLORS.MAIN_BG : COLORS.BLACK }}
                                source={Images.BLACK_SEARCH}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ paddingHorizontal: 8 }}>
                            <Image
                                tintColor={COLORS.BLACK}
                                style={{ height: 30, width: 30, tintColor: darkMode ? COLORS.MAIN_BG : COLORS.BLACK }}
                                source={Images.UNFILLED_BLACK_HEART}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 20,
                        marginTop: 45,
                        color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON
                    }}>{SELECT_METHOD}</Text>
                    <Image style={{
                        marginVertical: 20,
                        marginTop: 40,
                        height: 30,
                        width: 30,
                        tintColor: COLORS.OR
                    }} source={Images.ADD} />
                </View>
                <TouchableOpacity
                    onPress={() => onPressRadioButton1()}
                    style={[styles.methodView, {
                        backgroundColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BG,
                        borderColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BR
                    }]}>
                    <View style={styles.parentView}>
                        <View style={styles.childView}>
                            <View style={[styles.radioButtonParentView, { borderColor: onPress1 ? COLORS.CONTINUE_BG : COLORS.PLACEHOLDER_TEXT_COLOR }]}>
                                <View style={[styles.radioButtonChildView, { backgroundColor: onPress1 ? COLORS.CONTINUE_BG : darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.MAIN_BG }]} />
                            </View>
                            <Text style={{ fontSize: 20, marginLeft: 20, color: darkMode ? COLORS.MAIN_BG : COLORS.BLACK }}>{MASTERCARD}</Text>
                        </View>
                        <Image
                            style={{
                                alignSelf: 'center',
                                height: 30,
                                width: 50
                            }}
                            source={Images.MASTERCARD} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onPressRadioButton2()}
                    style={[styles.methodView, {
                        backgroundColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BG,
                        borderColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BR
                    }]}>
                    <View style={styles.parentView}>
                        <View style={styles.childView}>
                            <View style={[styles.radioButtonParentView, { borderColor: onPress2 ? COLORS.CONTINUE_BG : COLORS.PLACEHOLDER_TEXT_COLOR }]}>
                                <View style={[styles.radioButtonChildView, { backgroundColor: onPress2 ? COLORS.CONTINUE_BG : darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.MAIN_BG }]} />
                            </View>
                            <Text style={{ fontSize: 20, marginLeft: 20, color: darkMode ? COLORS.MAIN_BG : COLORS.BLACK }}>{VISA}</Text>
                        </View>
                        <Image
                            style={{
                                alignSelf: 'center',
                                height: 30,
                                width: 85,
                                tintColor: darkMode ? COLORS.MAIN_BG : null
                            }}
                            source={Images.VISA} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onPressRadioButton3()}
                    style={[styles.methodView, {
                        backgroundColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BG,
                        borderColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BR
                    }]}>
                    <View style={styles.parentView}>
                        <View style={styles.childView}>
                            <View style={[styles.radioButtonParentView, { borderColor: onPress3 ? COLORS.CONTINUE_BG : COLORS.PLACEHOLDER_TEXT_COLOR }]}>
                                <View style={[styles.radioButtonChildView, { backgroundColor: onPress3 ? COLORS.CONTINUE_BG : darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.MAIN_BG }]} />
                            </View>
                            <Text style={{ fontSize: 20, marginLeft: 20, color: darkMode ? COLORS.MAIN_BG : COLORS.BLACK }}>{PAYONEER}</Text>
                        </View>
                        {
                            darkMode ?
                                <Image
                                    style={{
                                        alignSelf: 'center',
                                        height: 28,
                                        width: 85
                                    }}
                                    source={Images.DARKMODE_PAYONEER} />
                                : <Image
                                    style={{
                                        alignSelf: 'center',
                                        height: 28,
                                        width: 85
                                    }}
                                    source={Images.PAYONEER} />
                        }
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onPressRadioButton4()}
                    style={[styles.methodView, {
                        backgroundColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BG,
                        borderColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BR
                    }]}>
                    <View style={styles.parentView}>
                        <View style={styles.childView}>
                            <View style={[styles.radioButtonParentView, { borderColor: onPress4 ? COLORS.CONTINUE_BG : COLORS.PLACEHOLDER_TEXT_COLOR }]}>
                                <View style={[styles.radioButtonChildView, { backgroundColor: onPress4 ? COLORS.CONTINUE_BG : darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.MAIN_BG }]} />
                            </View>
                            <Text style={{ fontSize: 20, marginLeft: 20, color: darkMode ? COLORS.MAIN_BG : COLORS.BLACK }}>{GPAY}</Text>
                        </View>
                        <Image
                            style={{
                                alignSelf: 'center',
                                height: 30,
                                width: 30
                            }}
                            source={Images.GPAY} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onPressRadioButton5()}
                    style={[styles.methodView, {
                        backgroundColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BG,
                        borderColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BR
                    }]}>
                    <View style={styles.parentView}>
                        <View style={styles.childView}>
                            <View style={[styles.radioButtonParentView, { borderColor: onPress5 ? COLORS.CONTINUE_BG : COLORS.PLACEHOLDER_TEXT_COLOR }]}>
                                <View style={[styles.radioButtonChildView, { backgroundColor: onPress5 ? COLORS.CONTINUE_BG : darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.MAIN_BG }]} />
                            </View>
                            <Text style={{ fontSize: 20, marginLeft: 20, color: darkMode ? COLORS.MAIN_BG : COLORS.BLACK }}>{PAYPAL}</Text>
                        </View>
                        <Image
                            style={{
                                alignSelf: 'center',
                                height: 28,
                                width: 25
                            }}
                            source={Images.PAYPAL} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.continueStyle} >
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: COLORS.MAIN_BG }}>
                        {NEXT}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default PaymentMethodScreen

const styles = StyleSheet.create({
    methodView: {
        height: 70,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    continueStyle: {
        backgroundColor: COLORS.CONTINUE_BG,
        height: 60,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 90,
    },
    radioButtonParentView: {
        height: 25,
        width: 25,
        borderRadius: 200,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    radioButtonChildView: {
        height: 13,
        width: 13,
        borderRadius: 200,
    },
    parentView: {
        height: 40,
        width: 325,
        justifyContent: 'space-between',
        flexDirection: 'row',

    },
    childView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})