import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BodyContainer = ({ children, hasNavigation }) => {
    return (
        <View style={StyleSheet.flatten([
            styles.root,
            hasNavigation == "bottom" ? { marginBottom: 120 } : {}
        ])} >
            {children}
        </View>
    )
}

export default BodyContainer

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 16,
        paddingVertical: 8
    }
})