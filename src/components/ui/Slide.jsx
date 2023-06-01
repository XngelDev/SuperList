import { ImageBackground, StyleSheet, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { useTheme, Text } from 'react-native-paper'

const Slide = ({ item }) => {
    const theme = useTheme()
    const { title, text, background } = item

    const { width, height } = useWindowDimensions("window")

    return (
        <ImageBackground
            imageStyle={{ resizeMode: "contain" }}
            source={background}
            style={StyleSheet.flatten([styles.root, { width: width }])} >
            <View style={StyleSheet.flatten([
                styles.image,
                {
                    backgroundColor: theme.colors.primary,
                }
            ])} >

            </View>
            <View style={styles.textContainer} >
                <Text variant='titleLarge' style={{ textAlign: "center", marginVertical:4 }} >{title}</Text>
                <Text variant='labelLarge' style={{ textAlign: "center", marginVertical:4 }} >{text}</Text>
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
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
    },
    image: {
        height: 240,
        width: 240,
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