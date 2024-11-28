import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FORGET_PASSWORD } from './Text'
import { COLORS } from './Colors'

const ForgetPassword = () => {
  return (
    <View style={{ alignSelf: 'flex-end', marginTop: 20 }}>
      <Button title={FORGET_PASSWORD} color={COLORS.CREATE_ACC_BUTTON} />
    </View>
  )
}

export default ForgetPassword