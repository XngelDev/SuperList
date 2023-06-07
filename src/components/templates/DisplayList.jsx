import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import ListItem from '../ui/ListItem'

import { FAB } from 'react-native-paper'

const DisplayList = ({ data,
    renderItem: RenderItem,
    emptyComponent: EmptyComponent,
    onItemPress,
    onItemLongPress,
    onAddAction
}) => {

    const onLongPress = (item) => {
        onItemLongPress(item)
    }

    const onPress = (item) => {
        onItemPress(item)
    }

    return (
        <View style={{height:"100%"}} >
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => <ListItem item={item} onPress={onPress} onLongPress={onLongPress} />}
                ListEmptyComponent={EmptyComponent}
            />
            <FAB
                icon="plus"
                style={styles.fab}
                onPress={() => onAddAction()}
            />
        </View>
    )
}


export default DisplayList

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0
    },
})