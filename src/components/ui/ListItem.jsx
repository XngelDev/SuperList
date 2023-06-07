import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Card, List, ProgressBar, Text, useTheme } from 'react-native-paper'

const ListItem = ({ item, index, onPress, onLongPress }) => {

    const theme = useTheme()

    const getProgress = () => {
        if (item.items_check > 0) {
            const progress = item.items_check / item.items_count
            return progress
        }
        return 0
    }

    return (
        <TouchableOpacity 
            onPress={() => onPress(item)} 
            onLongPress={() => onLongPress(item)}
            style={StyleSheet.flatten([styles.root, {
                backgroundColor: theme.colors.surfaceVariant,
                paddingVertical: 16
            }])}  >
            <View onPress={() => { }} mode='contained'  >
                <Text adjustsFontSizeToFit numberOfLines={1} variant='headlineLarge'
                    style={StyleSheet.flatten([styles.total, {
                        color: theme.colors.secondary,
                        textAlign: "right"
                    }])} >$ {Intl.NumberFormat().format(item.total)}</Text>
                <Card.Title
                    titleVariant='titleLarge'
                    titleStyle={{ color: theme.colors.secondary }}
                    title={item.title}
                    titleNumberOfLines={1}
                    subtitleNumberOfLines={1}
                    subtitle={`${item.items_check}/${item.items_count}`}
                    subtitleStyle={{ color: theme.colors.secondary }}
                />
                <Card.Content>
                    <ProgressBar theme={{
                        colors: {
                            surfaceVariant: theme.colors.background
                        }
                    }} color={theme.colors.secondary} progress={getProgress()} />
                </Card.Content>
            </View>
        </TouchableOpacity>
    )
}

export default ListItem

const styles = StyleSheet.create({
    root: {
        marginVertical: 8,
        borderRadius: 24
    },
    total: {
        position: "absolute",
        right: 16,
        width: 100,
        maxWidth: 100
    }
})