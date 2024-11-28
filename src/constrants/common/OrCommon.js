import { Image, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'
import React from 'react'
import { COLORS } from './Colors'
import { OR } from './Text'
import Images from './Images'

const OrCommon = () => {
    const colorScheme = useColorScheme()
    const darkMode = colorScheme == 'dark'
    return (
        <View>
            <View style={{
                flexDirection: 'row',
                marginVertical: 40,
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <View style={[styles.orLine, { backgroundColor: darkMode ? COLORS.DARKMODE_OR_LINES : COLORS.TEXTINPUT_BR }]} />
                <View>
                    <Text style={{ fontSize: 18, color: darkMode ? COLORS.DARKMODE_OR : COLORS.OR }}>{OR}</Text>
                </View>
                <View style={[styles.orLine, { backgroundColor: darkMode ? COLORS.DARKMODE_OR_LINES : COLORS.TEXTINPUT_BR }]} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 100 }}>
                <TouchableOpacity style={[styles.imgesViewStyle, { marginLeft: 0, backgroundColor: darkMode ? COLORS.DARKMODE_APPLE_BG : COLORS.TEXTINPUT_BR }]}>
                    <Image source={Images.GOOGLE}
                        style={styles.imageStyle}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.imgesViewStyle, { backgroundColor: darkMode ? COLORS.DARKMODE_APPLE_BG : COLORS.TEXTINPUT_BR }]}>
                    <Image source={Images.APPLE}
                        style={[styles.imageStyle, { tintColor: darkMode?COLORS.MAIN_BG:COLORS.BLACK }]}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.imgesViewStyle, { backgroundColor: darkMode ? COLORS.DARKMODE_APPLE_BG : COLORS.TEXTINPUT_BR }]}>
                    <Image source={Images.FACEBOOK}
                        style={[styles.imageStyle, { tintColor: COLORS.CONTINUE_BG }]}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OrCommon

const styles = StyleSheet.create({
    orLine: {
        height: 1,
        width: 160
    },
    imgesViewStyle: {
        height: 70,
        width: 70,
        borderRadius: 400,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginLeft: 30
    },
    imageStyle: {
        height: 28,
        width: 28,
    }
})