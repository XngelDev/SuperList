import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import { useTranslation } from 'react-i18next'

const EmptyShopLists = ({image, title, subtitle}) => {

    const { t } = useTranslation()

    return (
        <View style={styles.root} >
            <Image source={image} style={styles.image} resizeMode='center' />
            <Text variant='titleLarge' style={{textAlign:"center", marginTop:16}} >{t(title)}</Text>
            <Text variant='titleSmall' style={{textAlign:"center", marginTop:8}}  >{t(subtitle)}</Text>
        </View>
    )
}

export default EmptyShopLists

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image:{
        maxHeight:240,
        marginVertical:8
    }
})