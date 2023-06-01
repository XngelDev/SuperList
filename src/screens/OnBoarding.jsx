import { View, FlatList, StatusBar, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { useTheme, Text, Button } from 'react-native-paper'
import Slide from '../components/ui/Slide'

import ob0 from '../assets/onboarding/Hotpot_0.png'
import ob1 from '../assets/onboarding/Hotpot_1.png'
import ob2 from '../assets/onboarding/Hotpot_2.png'
import ob3 from '../assets/onboarding/Hotpot_3.png'
import ob4 from '../assets/onboarding/Hotpot_4.png'
import { useNavigation } from '@react-navigation/native'

const Slides = [
  {
    key: 0,
    title: "¡Organiza tus compras!",
    text: "Crea listas personalizadas y simplifica tu experiencia de compra.",
    background: ob0
  },
  {
    key: 1,
    title: "Nunca olvides un artículo",
    text: "Registra tus productos favoritos y mantén un seguimiento de lo que necesitas.",
    background: ob1
  },
  {
    key: 2,
    title: "Compra inteligente, ahorra tiempo",
    text: "Optimiza tu rutina de compras con nuestra app fácil de usar y mejora tu productividad.",
    background: ob2
  },
  {
    key: 3,
    title: "Haz que comprar sea divertido",
    text: "Descubre una forma emocionante de hacer tus compras diarias con características interactivas.",
    background: ob3
  },
  {
    key: 4,
    title: "Tu asistente de compras personal",
    text: "Obtén recomendaciones personalizadas y mantén el control de tu presupuesto en todo momento.",
    background: ob4
  },
]

const OnBoarding = () => {

  const theme = useTheme()
  const nav = useNavigation()

  const { width, height } = useWindowDimensions("window")

  const [slideIndex, setIndex] = useState(0)

  const ref = React.useRef(null);

  const updateIndex = (e) => {
    const contentOffset = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffset / width);
    setIndex(currentIndex)
  }

  const Skip = () => {
    nav.navigate("Home")
  }

  const goToNextSlide = () => {
    const nextSlideIndex = slideIndex + 1;
    if (nextSlideIndex == Slides.length) {
      nav.navigate("Home")
    }
    if (nextSlideIndex != Slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setIndex(slideIndex + 1)
    }
  };

  return (
    <View style={{ flex: 1, marginVertical: 16 }} >
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={theme.dark ? "light-content" : "dark-content"} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateIndex}
        contentContainerStyle={{ height: "100%" }}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
        data={Slides}
      />
      <View style={{
        marginVertical: 16,
        width: width,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      }} >
        {Slides.map((item, index) => (
          <View key={index} style={{
            width: 8,
            height: 8,
            borderRadius: 4,
            marginHorizontal: 4,
            backgroundColor: slideIndex === index ? theme.colors.primary : theme.colors.primaryContainer
          }} />
        )
        )}
      </View>
      <View style={{
        marginVertical: 32,
        width: width,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
      }} >
        <Button onPress={Skip} >Skip</Button>
        <Button mode='contained' onPress={goToNextSlide} >Next</Button>
      </View>
    </View>
  )
}

export default OnBoarding