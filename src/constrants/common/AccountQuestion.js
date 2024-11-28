import { Button, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { COLORS } from './Colors'

const AccountQuestion = ({ title, buttonTitle, onPress }) => {
    const colorScheme = useColorScheme()
    const darkMode = colorScheme == 'dark'
    return (
        <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: darkMode ? COLORS.PLACEHOLDER_TEXT_COLOR : COLORS.OR, fontSize: 18 }}>{title}</Text>
            <Text
                style={{ color: darkMode ? COLORS.MAIN_BG : COLORS.CREATE_ACC_BUTTON, fontSize: 18, marginLeft: 3, fontWeight: '500' }}
                onPress={onPress}
            >{buttonTitle}</Text>
        </View >
    )
}

export default AccountQuestion

const styles = StyleSheet.create({})