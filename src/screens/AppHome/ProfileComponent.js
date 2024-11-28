import { Image, StyleSheet, Text, View, TouchableOpacity, useColorScheme } from 'react-native'
import React from 'react'
import Images from '../../constrants/common/Images'
import { COLORS } from '../../constrants/common/Colors'
import { WELCOME_BACK } from '../../constrants/common/Text'
import { useNavigation } from '@react-navigation/native'

const ProfileComponent = () => {
    const colorScheme = useColorScheme()
    const darkmode = colorScheme == 'dark'
    const navigation = useNavigation()
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
            marginHorizontal: 30
        }}>
            <View style={styles.profileStyle}>
                <Image
                    style={{
                        height: 55,
                        width: 55,
                        borderRadius: 200,
                        borderWidth: 1,
                        borderColor: COLORS.TEXTINPUT_BR
                    }}
                    source={Images.PROFILE} />
                <View style={{ marginLeft: 8 }}>
                    <Text style={{ fontSize: 17, color: darkmode ? COLORS.DARKMODE_OR : COLORS.OR }}>{WELCOME_BACK}</Text>
                    <Text style={{ fontSize: 20, marginTop: 5, color: darkmode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }}>Andrew Smith</Text>
                </View>
            </View>
            <View style={[styles.profileStyle, { flex: 0.35, justifyContent: 'flex-end' }]}>
                <TouchableOpacity
                    style={{ padding: 20 }}
                    onPress={() => {
                        navigation.navigate('SearchForDoctorsComponent')
                    }}>
                    <Image
                        tintColor={COLORS.BLACK}
                        style={{ height: 33, width: 33, tintColor: darkmode ? COLORS.MAIN_BG : COLORS.BLACK }}
                        source={Images.BLACK_SEARCH}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ padding: 8 }}>
                    <Image
                        tintColor={COLORS.BLACK}
                        style={{ height: 30, width: 30, tintColor: darkmode ? COLORS.MAIN_BG : COLORS.BLACK }}
                        source={Images.UNFILLED_BLACK_HEART}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfileComponent

const styles = StyleSheet.create({
    profileStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 0.4
    }
})