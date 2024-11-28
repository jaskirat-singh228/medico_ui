import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, useColorScheme } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { COLORS } from '../../constrants/common/Colors';
import { BOOK_APPOINTMENT, DAY, DOCTORS_INFO, EXP, HOURLY_RATE, MONTH, SCHEDULES, SCHEDULES_TIME1, SCHEDULES_TIME2, SCHEDULES_TIME3, SCHEDULES_TIME4, SCHEDULES_TIME5, SCHEDULES_TIME6, SELECT_DATE, TREATED } from '../../constrants/common/Text';
import Feather from 'react-native-vector-icons/Feather'
import Images from '../../constrants/common/Images';


const DoctorsInfo = () => {
    const colorScheme = useColorScheme()
    const darkMode = colorScheme == 'dark'
    const navigation = useNavigation()
    const route = useRoute();

    return (
        <View style={{ backgroundColor: darkMode ? COLORS.DARKMODE_DOCTORS_INFO_BG : COLORS.CONTINUE_BG, flex: 1 }}>
            <Image
                style={{ width: 430, marginTop: 220, height: 130, tintColor: darkMode ? COLORS.MAIN_BG : COLORS.OR }}
                source={Images.BG_HEART} />
            <View style={{ flex: 1, marginTop: -350 }}>
                <View style={{
                    flexDirection: 'row',
                    marginHorizontal: 30,
                    marginVertical: 8,
                    justifyContent: 'space-between',
                }}>
                    <View style={{ flexDirection: 'row', marginTop: 60 }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                style={{ height: 28, width: 28, tintColor: COLORS.MAIN_BG }}
                                source={Images.WHITE_ARROW} />
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginTop: 2,
                            marginLeft: 22,
                            color: COLORS.MAIN_BG
                        }}>{DOCTORS_INFO}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 60, justifyContent: 'flex-end' }}>
                        <TouchableOpacity
                            style={{ paddingHorizontal: 25 }}>
                            <Image
                                style={{ height: 33, width: 33, tintColor: COLORS.MAIN_BG }}
                                source={Images.WHITE_SEARCH}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                style={{ height: 30, width: 30, tintColor: COLORS.MAIN_BG }}
                                source={Images.UNFILLED_WHITE_HEART}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Image style={{
                    alignSelf: 'center',
                    height: 300,
                    width: 300,
                }} source={route.params.doctor.image} />
                <View style={{
                    backgroundColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.MAIN_BG,
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                    flex: 1
                }}>
                    <View style={[styles.indicatorStyle, { backgroundColor: darkMode ? COLORS.MAIN_BG : COLORS.LINE_VIEW, }]} />
                    <ScrollView>
                        <View style={{
                            backgroundColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.MAIN_BG,
                            marginTop: 30,
                            marginHorizontal: 25,
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                height: 30,
                            }}>
                                <Text style={{ fontSize: 22, fontWeight: 'bold', color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>{route.params.doctor.name}</Text>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ paddingHorizontal: 5, fontSize: 15, color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>{route.params.doctor.rating}</Text>
                                    <Image
                                        style={{ height: 17, width: 17, marginBottom: 5 }}
                                        source={route.params.doctor.ratingStar} />
                                </View>
                            </View>
                            <Text style={{ fontSize: 18, color: darkMode ? COLORS.DARKMODE_OR : COLORS.OR, marginTop: 10 }}>{route.params.doctor.exp}</Text>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                <Image style={{ height: 19, width: 19, tintColor: darkMode ? COLORS.DARKMODE_OR : COLORS.OR }} source={Images.DARK_TIME} />
                                <Text style={{ fontSize: 16, marginLeft: 8, color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>{route.params.doctor.amTime}</Text>
                                <Text style={{ fontSize: 16, marginLeft: 5, color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>- {route.params.doctor.pmTime}</Text>
                            </View>
                            <View style={{ height: 1, backgroundColor: darkMode ? COLORS.DARKMODE_LINE : COLORS.TEXTINPUT_BR, marginVertical: 30 }} />
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignSelf: 'center',
                            }}>
                                <View>
                                    <Text style={{ fontSize: 18, fontWeight: '700', marginLeft: 30, color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>{route.params.doctor.Exp}</Text>
                                    <Text style={{ fontSize: 18, color: darkMode ? COLORS.DARKMODE_OR : COLORS.OR, marginVertical: 10, fontWeight: '400' }}>{EXP}</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 18, fontWeight: '700', marginLeft: 65, color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>{route.params.doctor.treated}</Text>
                                    <Text style={{ fontSize: 18, color: darkMode ? COLORS.DARKMODE_OR : COLORS.OR, marginHorizontal: 50, marginTop: 10, fontWeight: '400' }}>{TREATED}</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 18, fontWeight: '700', marginLeft: 20, color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>{route.params.doctor.hourlyRate}</Text>
                                    <Text style={{ fontSize: 18, color: darkMode ? COLORS.DARKMODE_OR : COLORS.OR, marginTop: 10, fontWeight: '400' }}>{HOURLY_RATE}</Text>
                                </View>
                            </View>
                            <Text style={{ marginTop: 20, fontSize: 22, fontWeight: '700', color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>{SELECT_DATE}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <View style={[styles.dayMonthView, {
                                    borderColor: darkMode ? COLORS.DARKMODE_DAY_MONTH_BG : COLORS.TEXTINPUT_BG,
                                    backgroundColor: darkMode ? COLORS.DARKMODE_DAY_MONTH_BG : COLORS.TEXTINPUT_BR
                                }]}>
                                    <TouchableOpacity style={styles.dayMonthChildView}>
                                        <Text style={{ color: COLORS.TAB_BAR_INACTIVE, fontSize: 15 }}>{DAY}</Text>
                                        <Feather name='chevron-down' size={25} color={darkMode ? COLORS.DARKMODE_OR : COLORS.TAB_BAR_INACTIVE} />
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.dayMonthView, {
                                    borderColor: darkMode ? COLORS.DARKMODE_DAY_MONTH_BG : COLORS.TEXTINPUT_BG,
                                    backgroundColor: darkMode ? COLORS.DARKMODE_DAY_MONTH_BG : COLORS.TEXTINPUT_BR
                                }]}>
                                    <TouchableOpacity style={styles.dayMonthChildView}>
                                        <Text style={{ color: COLORS.TAB_BAR_INACTIVE, fontSize: 15 }}>{MONTH}</Text>
                                        <Feather name='chevron-down' size={25} color={darkMode ? COLORS.DARKMODE_OR : COLORS.TAB_BAR_INACTIVE} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Text style={{ marginTop: 30, fontSize: 22, fontWeight: '700', color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>{SCHEDULES}</Text>
                            <View style={styles.scheduleParentView}>
                                <TouchableOpacity style={[styles.scheduleChildView, { borderColor: darkMode ? COLORS.DARKMODE_OR : COLORS.TEXTINPUT_BR, }]}>
                                    <Text style={[styles.scheduleTextStyle, { color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }]}>{SCHEDULES_TIME1}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.scheduleChildView, { borderColor: darkMode ? COLORS.DARKMODE_OR : COLORS.TEXTINPUT_BR, marginLeft: 20 }]}>
                                    <Text style={[styles.scheduleTextStyle, { color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }]}>{SCHEDULES_TIME2}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.scheduleParentView}>
                                <TouchableOpacity style={[styles.scheduleChildView, { borderColor: darkMode ? COLORS.DARKMODE_OR : COLORS.TEXTINPUT_BR, }]}>
                                    <Text style={[styles.scheduleTextStyle, { color: COLORS.OR }]}>{SCHEDULES_TIME3}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.scheduleChildView, { borderColor: darkMode ? COLORS.DARKMODE_OR : COLORS.TEXTINPUT_BR, marginLeft: 20 }]}>
                                    <Text style={[styles.scheduleTextStyle, { color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }]}>{SCHEDULES_TIME4}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.scheduleParentView}>
                                <TouchableOpacity style={[styles.scheduleChildView, { borderColor: darkMode ? COLORS.DARKMODE_OR : COLORS.TEXTINPUT_BR, }]}>
                                    <Text style={[styles.scheduleTextStyle, { color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }]}>{SCHEDULES_TIME5}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.scheduleChildView, { borderColor: darkMode ? COLORS.DARKMODE_OR : COLORS.TEXTINPUT_BR, marginLeft: 20 }]}>
                                    <Text style={[styles.scheduleTextStyle, { color: COLORS.OR }]}>{SCHEDULES_TIME6}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('AppointmentDetails', { doctor: route.params.doctor })
                            }}
                            style={styles.continueStyle}
                        >
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: COLORS.MAIN_BG }}>
                                {BOOK_APPOINTMENT}</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    dayMonthView: {
        height: 60,
        width: '47.5%',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dayMonthChildView: {
        width: "85%",
        height: '85%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    scheduleChildView: {
        borderWidth: 1,
        borderRadius: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scheduleParentView: {
        flexDirection: 'row',
        marginTop: 25,
    },
    scheduleTextStyle: {
        fontSize: 14,
        fontWeight: '500',
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    continueStyle: {
        backgroundColor: COLORS.CONTINUE_BG,
        height: 60,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 50,
        marginHorizontal: 30
    },
    indicatorStyle: {
        width: 70,
        height: 5,
        alignSelf: 'center',
        marginTop: 15,
        borderRadius: 200
    }
})

export default DoctorsInfo;

