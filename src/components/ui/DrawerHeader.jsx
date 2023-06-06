import { StyleSheet } from 'react-native'
import React from 'react'

import { Appbar } from 'react-native-paper'
import { DrawerActions, useNavigation } from '@react-navigation/native'

const DrawerHeader = () => {
    const navigation = useNavigation()



    return (
        <Appbar.Header>
            <Appbar.Action icon="menu" onPress={() => {
                navigation.dispatch(DrawerActions.toggleDrawer())
            }} />
            <Appbar.Content title="Title" />
        </Appbar.Header>
    )
}

export default DrawerHeader

const styles = StyleSheet.create({})