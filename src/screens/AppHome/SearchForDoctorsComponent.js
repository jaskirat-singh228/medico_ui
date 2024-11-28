import { FlatList, Image, StyleSheet, Text, TextInput, View, TouchableOpacity, SafeAreaView, useColorScheme } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS } from '../../constrants/common/Colors';
import { BOOK_APPOINTMENT, RESULTS, SEARCH_FOR_DOCTORS } from '../../constrants/common/Text';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Images from '../../constrants/common/Images';
import { useNavigation } from '@react-navigation/native';

const SearchForDoctorsComponent = () => {
    const colorScheme = useColorScheme()
    const darkMode = colorScheme == 'dark'

    const navigation = useNavigation()

    const [idsToSelect, setIdsToSelect] = useState([]);
    const [text, setText] = useState('');
    const [doctorsList, setDoctorsList] = useState([
        {
            id: 1,
            name: 'Jennifer Miller',
            exp: 'Pediatrician | Mercy hospital',
            rating: '4.8',
            ratingStar: Images.STAR,
            amTime: '10.30am',
            pmTime: '05.30pm',
            image: Images.DOCTOR10,
            isSelect: false,
            Exp: '15yr',
            treated: '62+',
            hourlyRate: '$35.00'
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
            isSelect: false,
            Exp: '16yr',
            treated: '43+',
            hourlyRate: '$18.00'
        },
        {
            id: 3,
            name: 'Loura White',
            exp: 'Dentist | Cedar Dental Care',
            rating: '4.8',
            ratingStar: Images.STAR,
            amTime: '10.30am',
            pmTime: '05.30pm',
            image: Images.DOCTOR5,
            isSelect: false,
            Exp: '27yr',
            treated: '49+',
            hourlyRate: '$22.00'
        },
        {
            id: 4,
            name: 'Brian Clark',
            exp: 'Cardiologist | Max hospital',
            rating: '4.8',
            ratingStar: Images.STAR,
            amTime: '10.30am',
            pmTime: '05.30pm',
            image: Images.DOCTOR14,
            isSelect: false,
            Exp: '5yr',
            treated: '19+',
            hourlyRate: '$18.00'
        },
        {
            id: 5,
            name: 'Jason Smith',
            exp: 'Dentist | ABC hospital',
            rating: '4.8',
            ratingStar: Images.STAR,
            amTime: '10.30am',
            pmTime: '05.30pm',
            image: Images.DOCTOR13,
            isSelect: false,
            Exp: '19yr',
            treated: '54+',
            hourlyRate: '$27.00'
        },
        {
            id: 6,
            name: 'Divide H. Brown',
            exp: 'Psychologist | Apollo hospital',
            rating: '4.8',
            ratingStar: Images.STAR,
            amTime: '10.30am',
            pmTime: '05.30pm',
            image: Images.DOCTOR9,
            isSelect: false,
            Exp: '23yr',
            treated: '60+',
            hourlyRate: '$30.00'
        },
        {
            id: 7,
            name: 'Patricia Garcia',
            exp: 'Oncologist | ABC hospital',
            rating: '4.8',
            ratingStar: Images.STAR,
            amTime: '10.30am',
            pmTime: '05.30pm',
            image: Images.DOCTOR7,
            isSelect: false,
            Exp: '30yr',
            treated: '59+',
            hourlyRate: '$29.00'
        },
        {
            id: 8,
            name: 'Poonam',
            exp: 'Psychologist | Max hospital',
            rating: '4.8',
            ratingStar: Images.STAR,
            amTime: '10.30am',
            pmTime: '05.30pm',
            image: Images.DOCTOR4,
            isSelect: false,
            Exp: '7yr',
            treated: '23+',
            hourlyRate: '$15.00'
        },
        {
            id: 9,
            name: 'Rahul',
            exp: 'Oncologist | Mercy hospital',
            rating: '4.8',
            ratingStar: Images.STAR,
            amTime: '10.30am',
            pmTime: '05.30pm',
            image: Images.DOCTOR8,
            isSelect: false,
            Exp: '13yr',
            treated: '33+',
            hourlyRate: '$20.00'
        },
        {
            id: 10,
            name: 'Neha Sharma',
            exp: 'Geriatrician | Civil hospital',
            rating: '4.8',
            ratingStar: Images.STAR,
            amTime: '10.30am',
            pmTime: '05.30pm',
            image: Images.DOCTOR6,
            isSelect: false,
            Exp: '25yr',
            treated: '58+',
            hourlyRate: '$30.00'
        },
        {
            id: 11,
            name: 'Amandeep Kaur',
            exp: 'Dentist | IVY hospital',
            rating: '4.8',
            ratingStar: Images.STAR,
            amTime: '10.30am',
            pmTime: '05.30pm',
            image: Images.DOCTOR2,
            isSelect: false,
            Exp: '20yr',
            treated: '55+',
            hourlyRate: '$28.00'
        },
        {
            id: 12,
            name: 'Deepika Sharma',
            exp: 'Oncologist | Fortis hospital',
            rating: '4.8',
            ratingStar: Images.STAR,
            amTime: '10.30am',
            pmTime: '05.30pm',
            image: Images.DOCTOR12,
            isSelect: false,
            Exp: '9yr',
            treated: '45+',
            hourlyRate: '$26.00'
        },
        {
            id: 13,
            name: 'Annu Choudhry',
            exp: 'Geriatrician | Amcare hospital',
            rating: '4.8',
            ratingStar: Images.STAR,
            amTime: '10.30am',
            pmTime: '05.30pm',
            image: Images.DOCTOR11,
            isSelect: false,
            Exp: '17yr',
            treated: '47+',
            hourlyRate: '$14.00'
        },
        {
            id: 14,
            name: 'Karan Chohan',
            exp: 'RadioLogist | Civil hospital',
            rating: '4.8',
            ratingStar: Images.STAR,
            amTime: '10.30am',
            pmTime: '05.30pm',
            image: Images.DOCTOR1,
            isSelect: false,
            Exp: '12yr',
            treated: '40+',
            hourlyRate: '$19.00'
        },
        {
            id: 15,
            name: 'John Doe',
            exp: 'Radiologist | ABC hospital',
            rating: '4.8',
            ratingStar: Images.STAR,
            amTime: '10.30am',
            pmTime: '05.30pm',
            image: Images.DOCTOR15,
            isSelect: false,
            Exp: '13yr',
            treated: '53+',
            hourlyRate: '$23.00'
        }
    ]);

    const filteredDoctorsList = doctorsList.filter(doctor =>
        doctor.name.includes(text) || doctor.exp.includes(text)
    );

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
        setDoctorsList(prevDoctorsList => prevDoctorsList.map(doctor =>
            idsToSelect.includes(doctor.id)
                ? { ...doctor, isSelect: true }
                : { ...doctor, isSelect: false }
        ));
    }, [idsToSelect]);

    const onPressBookAppointment = (doctor) => {
        navigation.navigate('DoctorsInfo', { doctor });
    };

    return (
        <View style={{ flex: 1, backgroundColor: darkMode ? COLORS.DARKMODE_MAIN_BG : COLORS.MAIN_BG }}>
            <View style={{ height: 20, backgroundColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.MAIN_BG }} />
            <View style={{
                flexDirection: "row",
                backgroundColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.MAIN_BG,
                height: 110,
                alignItems: 'center'
            }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        style={{ height: 33, width: 33, tintColor: darkMode ? COLORS.MAIN_BG : COLORS.BLACK, marginLeft: 30, marginTop: 15 }}
                        source={Images.WHITE_ARROW}
                    />
                </TouchableOpacity>
                <View style={[styles.searchContainer, {
                   
                }]}>
                    <TextInput
                        style={[styles.textInput, { color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }]}
                        placeholder={SEARCH_FOR_DOCTORS}
                        placeholderTextColor={darkMode ? COLORS.DARKMODE_OR : COLORS.PLACEHOLDER_TEXT_COLOR}
                        value={text}
                        onChangeText={text => setText(text)}
                    />
                    {text.length > 0 && (
                        <TouchableOpacity
                            onPress={() => setText('')}>
                            <MaterialIcons name='clear' size={35} color={darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON} />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
            <View style={{ height: 10, backgroundColor: darkMode ? COLORS.BLACK : COLORS.TAB_BAR_INACTIVE }}></View>
            <View style={{ margin: 30, marginBottom: 8 }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>{RESULTS}</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ marginHorizontal: 20 }}
                data={filteredDoctorsList}
                renderItem={({ item }) => (
                    <View style={[styles.parentView, {
                        borderColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.TEXTINPUT_BR,
                        backgroundColor: darkMode ? COLORS.DARKMODE_TEXTINPUT_BG : COLORS.DOCTORS_LIST_BG_COLOR,
                    }]}>
                        <View style={{ height: 130, width: 330, marginTop: 20 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={styles.doctorsImageStyle} source={item.image} />
                                <View style={{ marginLeft: 8, width: 245 }}>
                                    <Text style={{ fontSize: 18, fontWeight: '500', color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>{item.name}</Text>
                                    <Text style={{ color: darkMode ? COLORS.DARKMODE_OR : COLORS.TAB_BAR_INACTIVE, fontSize: 18, marginTop: 10 }}>{item.exp}</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ marginTop: 10, fontSize: 17, color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>{item.rating}</Text>
                                        <Image style={{ height: 19, width: 19, marginVertical: 10, marginHorizontal: 5 }} source={item.ratingStar} />
                                        <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 10 }}>
                                            <Image style={{ height: 20, width: 20 }} source={Images.DARK_TIME} />
                                            <Text style={{ fontSize: 16, marginLeft: 8, color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>{item.amTime}</Text>
                                            <Text style={{ fontSize: 16, marginLeft: 5, color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>- {item.pmTime}</Text>
                                        </View>
                                    </View>
                                </View>
                                <TouchableOpacity
                                    onPress={() => onPressHeart(item.id)}
                                    style={styles.heartStyle}>
                                    {
                                        item.isSelect
                                            ? <Image style={{ height: 24, width: 24, tintColor: darkMode ? COLORS.DARKMODE_ERROR : COLORS.ERROR }} source={Images.FILLED_HEART} />
                                            : <Image style={{ height: 24, width: 24, tintColor: darkMode ? COLORS.DARKMODE_ERROR : COLORS.ERROR }} source={Images.UNFILLED_RED_HEART} />
                                    }
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                onPress={() => onPressBookAppointment(item)}
                                style={[styles.bookAppointmentStyle, { backgroundColor: darkMode ? COLORS.DARKMODE_BOOK_APPOINTMENT_BG : COLORS.BOOK_APPOINTMENT_BG }]}>
                                <Text style={{ fontSize: 16, color: darkMode ? COLORS.MAIN_BG : COLORS.CONTINUE_BG, fontWeight: '500' }}>{BOOK_APPOINTMENT}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default SearchForDoctorsComponent;

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
        justifyContent: 'center'
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '75%',
        height: 50,
        marginTop: 15,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLORS.DARKMODE_OR,
        marginLeft:10
    },
    textInput: {
        fontSize: 20,
        marginLeft: 10,
        width: '85%',
        height: 50,
    },
});
