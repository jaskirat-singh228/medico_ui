import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { COLORS } from './Colors'

const SignInHead = ({ title, title2 }) => {
    const colorScheme = useColorScheme()
    const darkMode = colorScheme == 'dark'
    return (
        <View>
            <Text style={[styles.textStyle, { color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON }]}>{title}</Text>
            <Text style={[styles.textStyle2, { color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON, }]}>{title2}</Text>
        </View>
    )
}

export default SignInHead

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 25,
    },
    textStyle2: {
        fontSize: 20,
        marginTop: 100,
    }
})