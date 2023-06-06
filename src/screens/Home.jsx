import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper'

const Home = () => {
    return (
        <View>
            <Appbar.Header>
                <Appbar.Content title="Super List" />
                <Appbar.Action icon="filter" />
            </Appbar.Header>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})