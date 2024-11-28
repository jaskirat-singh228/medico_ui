import { Button, Image, StyleSheet, Text, TouchableOpacity, View, FlatList, useColorScheme } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BOOK_APPOINTMENT, FIND_DOCTORS, SEE_ALL } from '../../constrants/common/Text';
import { COLORS } from '../../constrants/common/Colors';
import Images from '../../constrants/common/Images';
import { useNavigation } from '@react-navigation/native';

const FindDoctorsComponent = () => {
    const colorScheme = useColorScheme()
    const darkmode = colorScheme == 'dark'
    const navigation = useNavigation()

    const [idsToSelect, setIdsToSelect] = useState([]);
    const [doctorsList, setDoctorsList] = useState([
        {
            id: 1,
            name: 'Jennifer Miller',
            exp: 'Pediatrician | Mercy hospital',
            rating: '4.8',
            ratingStar: Images.STAR,
            amTime: '10.30am',
            pmTime: '05.30pm',
            image: Images.DOCTOR2,
            isSelect: false
        },
        {
            id: 2,
            name: 'Robert Johnson',
            exp: 'Neurologist | ABC hospital',
            rating: '4.8',
            ratingStar: Images.STAR,
            amTime: '10.30am',
            pmTime: '05.30pm',
            image: Images.DOCTOR3,
            isSelect: false
        },
        {
            id: 3,
            name: 'Loura White',
            exp: 'Dentist | Cedar Dental Care',
            rating: '4.8',
            ratingStar: Images.STAR,
            amTime: '10.30am',
            pmTime: '05.30pm',
            image: Images.DOCTOR11,
            isSelect: false
        },
        {
            id: 4,
            name: 'Brian Clark',
            exp: 'Cardiologist | Max hospital',
            rating: '4.8',
            ratingStar: Images.STAR,
            amTime: '10.30am',
            pmTime: '05.30pm',
            image: Images.DOCTOR10,
            isSelect: false
        },
    ]);

    const onPressHeart = (id) => {
        setIdsToSelect(prevIds => {
            const isSelected = prevIds.includes(id);
            if (isSelected) {
                return prevIds.filter(existingId => existingId !== id);
            } else {
                return [...new Set([...prevIds, id])];
            }
        });
    };

    useEffect(() => {
        const updatedDoctorsList = doctorsList.map(doctor =>
            idsToSelect.includes(doctor.id)
                ? { ...doctor, isSelect: true }
                : { ...doctor, isSelect: false }
        );

        setDoctorsList(updatedDoctorsList);
    }, [idsToSelect]);

    const onPressBookAppointment = (doctor) => {
        navigation.navigate('DoctorsInfo', { doctor })
    }

    return (
        <View style={{ marginTop: 20 }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 20,
                marginHorizontal: 30,
                marginBottom: 15
            }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', color: darkmode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>{FIND_DOCTORS}</Text>
                <Text onPress={() => {
                    navigation.navigate('SearchForDoctorsComponent')
                }}
                    style={{ fontSize: 20, color: darkmode ? COLORS.DARKMODE_OR : COLORS.CONTINUE_BG }}>{SEE_ALL}</Text>
            </View>
            <FlatList
                style={{ marginHorizontal: 20 }}
                data={doctorsList}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={[styles.parentView, {
                        backgroundColor: darkmode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.DOCTORS_LIST_BG_COLOR,
                        borderColor: darkmode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BR,
                    }]}>
                        <View style={{ height: 130, width: 330, marginTop: 20 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={styles.doctorsImageStyle} source={item.image} />
                                <View style={{ marginLeft: 8, width: 245 }}>
                                    <Text style={{ fontSize: 18, fontWeight: '500', color: darkmode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>{item.name}</Text>
                                    <Text style={{ color: darkmode ? COLORS.DARKMODE_OR : COLORS.TAB_BAR_INACTIVE, fontSize: 17, marginTop: 10 }}>{item.exp}</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ marginTop: 10, fontSize: 17, color: darkmode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>{item.rating}</Text>
                                        <Image style={{ height: 19, width: 19, marginVertical: 10, marginHorizontal: 5 }} source={item.ratingStar} />
                                        <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 10 }}>
                                            <Image style={{ height: 20, width: 20, tintColor: COLORS.OR }} source={Images.DARK_TIME} />
                                            <Text style={{ fontSize: 16, marginLeft: 8, color: darkmode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>{item.amTime}</Text>
                                            <Text style={{ fontSize: 16, marginLeft: 5, color: darkmode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>- {item.pmTime}</Text>
                                        </View>
                                    </View>
                                </View>
                                <TouchableOpacity
                                    onPress={() => onPressHeart(item.id)}
                                    style={styles.heartStyle}>
                                    {
                                        item.isSelect
                                            ? <Image style={{ height: 24, width: 24, tintColor: darkmode ? COLORS.DARKMODE_ERROR : COLORS.ERROR }} source={Images.FILLED_HEART} />
                                            : <Image style={{ height: 24, width: 24, tintColor: darkmode ? COLORS.DARKMODE_ERROR : COLORS.ERROR }} source={Images.UNFILLED_RED_HEART} />
                                    }
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                onPress={() => onPressBookAppointment(item)}
                                style={[styles.bookAppointmentStyle, { backgroundColor: darkmode ? COLORS.DARKMODE_BOOK_APPOINTMENT_BG : COLORS.BOOK_APPOINTMENT_BG }]}>
                                <Text style={{ fontSize: 16, color: darkmode ? COLORS.MAIN_BG : COLORS.CONTINUE_BG, fontWeight: '500' }}>{BOOK_APPOINTMENT}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

export default FindDoctorsComponent;

const styles = StyleSheet.create({
    parentView: {
        margin: 10,
        height: 190,
        borderRadius: 20,
        borderWidth: 1,
        alignItems: 'center',
    },
    heartStyle: {
        height: 30,
        width: 30,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: 10
    },
    doctorsImageStyle: {
        height: 40,
        width: 40,
        borderRadius: 200,
        borderWidth: 1,
        borderColor: COLORS.TEXTINPUT_BR,
        backgroundColor: COLORS.IMAGE_BG
    },
    bookAppointmentStyle: {
        borderRadius: 200,
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
});