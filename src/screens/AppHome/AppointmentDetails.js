import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput, SafeAreaView, useColorScheme } from 'react-native'
import React from 'react'
import { COLORS } from '../../constrants/common/Colors'
import { useNavigation, useRoute } from '@react-navigation/native'
import { APPOINTMENT_DETAILS, DATE, HOURLY_RATE, MESSAGE, MSG_FOR_DOCTOR, NEXT, SCHEDULE, SCHEDULES_DATE, SCHEDULES_TIME, TIME } from '../../constrants/common/Text'
import Images from '../../constrants/common/Images'

const AppointmentDetails = () => {
    const colorScheme = useColorScheme()
    const darkMode = colorScheme == 'dark'
    const route = useRoute()
    const navigation = useNavigation()
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
                        }}>{APPOINTMENT_DETAILS}</Text>
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
                <View style={[styles.parentView, {
                    borderColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BR,
                    backgroundColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BG
                }]}>
                    <View style={styles.childView}>
                        <View>
                            <Image
                                style={styles.imageView}
                                source={route.params.doctor.image} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 17, fontWeight: '600', color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>{route.params.doctor.name}</Text>
                            <Text style={{ fontSize: 17, color: darkMode ? COLORS.DARKMODE_OR : COLORS.OR, marginVertical: 8 }}>{route.params.doctor.exp}</Text>
                            <Text style={{ fontSize: 17, color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>{HOURLY_RATE}: {route.params.doctor.hourlyRate}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ paddingHorizontal: 8, fontSize: 16, color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>{route.params.doctor.rating}</Text>
                            <Image
                                style={{ height: 17, width: 17 }}
                                source={route.params.doctor.ratingStar} />
                        </View>
                    </View>
                </View>
                <Text style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON
                }}>{SCHEDULE}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={[styles.parentView, {
                        width: '46.5%',
                        borderColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BR,
                        backgroundColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BG
                    }]}>
                        <View style={{ flexDirection: 'column', alignItems: 'center', height: 55, justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>{SCHEDULES_DATE}</Text>
                            <Text style={{ fontSize: 18, color: darkMode ? COLORS.DARKMODE_OR : COLORS.OR }}>{DATE}</Text>
                        </View>
                    </View>
                    <View style={[styles.parentView, {
                        width: '46.5%',
                        borderColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BR,
                        backgroundColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BG
                    }]}>
                        <View style={{ flexDirection: 'column', alignItems: 'center', height: 55, justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>{SCHEDULES_TIME}</Text>
                            <Text style={{ fontSize: 18, color: darkMode ? COLORS.DARKMODE_OR : COLORS.OR }}>{TIME}</Text>
                        </View>
                    </View>
                </View>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON
                }}>{MESSAGE}</Text>
                <View style={[styles.msgView, {
                    borderColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BR,
                    backgroundColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BG
                }]}>
                    <TextInput
                        style={{ padding: 20, fontSize: 18, color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}
                        placeholder={MSG_FOR_DOCTOR}
                        placeholderTextColor={darkMode ? COLORS.DARKMODE_OR : COLORS.OR}
                        multiline
                    />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('PaymentMethodScreen')
                    }}
                    style={styles.continueStyle}
                >
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: COLORS.MAIN_BG }}>
                        {NEXT}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default AppointmentDetails

const styles = StyleSheet.create({
    parentView: {
        height: 110,
        borderRadius: 20,
        borderWidth: 1,
        marginVertical: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    childView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%'
    },
    imageView: {
        height: 40,
        width: 40,
        borderRadius: 200,
        borderWidth: 1,
        borderColor: COLORS.TEXTINPUT_BR,
        backgroundColor: COLORS.IMAGE_BG
    },
    msgView: {
        height: 200,
        borderRadius: 20,
        borderWidth: 1,
        marginTop: 35
    },
    continueStyle: {
        backgroundColor: COLORS.CONTINUE_BG,
        height: 60,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 60,
    },
})