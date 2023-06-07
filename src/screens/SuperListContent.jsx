import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BodyContainer from '../components/templates/BodyContainer'
import { Appbar, useTheme } from 'react-native-paper'

import DisplayList from '../components/templates/DisplayList'
import EmptyShopLists from '../components/ui/EmptyShopLists'
import ListItem from '../components/ui/ListItem'

import EmptyCart from '../assets/icons/ic_empty_cart.png'

const SuperListContent = ({ navigation, route }) => {

    const theme = useTheme()

    const { data } = route.params


    const handleAddAction = () => {

    }

    const handleOnItemPress = () => {

    }

    return (
        <View>
            <Appbar.Header >
                <Appbar.Action icon={"chevron-left"} onPress={() => navigation.goBack()} />
                <Appbar.Content titleStyle={{ color: theme.colors.secondary, }} title={data.title} />
                <Appbar.Action icon="filter" />
            </Appbar.Header>
            <BodyContainer hasNavigation="bottom" >
                <DisplayList
                    data={[]}
                    renderItem={ListItem}
                    emptyComponent={<EmptyShopLists image={EmptyCart} title="text_empty_list" subtitle="text_empty_list_subtitle" />}
                    onAddAction={handleAddAction}
                    onItemPress={handleOnItemPress}
                />
            </BodyContainer>
        </View>
    )
}

export default SuperListContent

const styles = StyleSheet.create({})