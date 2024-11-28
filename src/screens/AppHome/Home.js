import { SafeAreaView, ScrollView, useColorScheme } from 'react-native'
import React from 'react'
import ProfileComponent from './ProfileComponent'
import AppointmentsComponent from './AppointmentsComponent'
import { COLORS } from '../../constrants/common/Colors'
import CategoriesComponent from './CategoriesComponent'
import FindDoctorsComponent from './FindDoctorsComponent'

const Home = () => {
    const colorScheme = useColorScheme()
    const darkmode = colorScheme == 'dark'
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: darkmode ? COLORS.DARKMODE_MAIN_BG : COLORS.MAIN_BG }}>
            <ScrollView>
                <ProfileComponent />
                <AppointmentsComponent />
                <CategoriesComponent />
                <FindDoctorsComponent />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home