import { Image, ImageBackground, StyleSheet, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme, Text } from 'react-native-paper'

const Slide = ({ item }) => {

    const theme = useTheme()
    const { t } = useTranslation()

    const { title, text, background, icon } = item

    const { width, height } = useWindowDimensions("window")

    return (
        <ImageBackground
            imageStyle={{ resizeMode: "contain" }}
            source={background}
            style={StyleSheet.flatten([styles.root, { width: width }])} >
            <Image source={icon}
                style={StyleSheet.flatten([
                    styles.image,
                ])}
                resizeMode='contain'
            >

            </Image>
            <View style={styles.textContainer} >
                <Text variant='titleLarge' style={{ textAlign: "center", marginVertical: 4 }} >{title}</Text>
                <Text variant='labelLarge' style={{ textAlign: "center", marginVertical: 4 }} >{text}</Text>
            </View>
        </ImageBackground>
    )
}

Slide.defaultProps = {
    item: {
        title: "Welcome to the App",
        text: "This is a sample text",
        background: require('../../assets/onboarding/Hotpot_0.png')
    }
};

export default Slide

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    image: {
        height: 320,
        width: 320,
        marginVertical: "10%",
    },
    textContainer: {
        marginHorizontal: 24,
        marginVertical: 16,
        justifyContent: 'center',
        alignItems: 'center',
        flexBasis: "30%",
    },
    buttonContainer: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        height: 100
    }
})