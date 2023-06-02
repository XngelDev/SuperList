import { View, FlatList, StatusBar, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme, Text, Button } from 'react-native-paper'
import Slide from '../components/ui/Slide'

import ob0 from '../assets/onboarding/Hotpot_0.png'
import ob1 from '../assets/onboarding/Hotpot_1.png'
import ob2 from '../assets/onboarding/Hotpot_2.png'
import ob3 from '../assets/onboarding/Hotpot_3.png'
import ob4 from '../assets/onboarding/Hotpot_4.png'
import { useNavigation } from '@react-navigation/native'

const OnBoarding = () => {

  const theme = useTheme()
  const { t } = useTranslation()
  const nav = useNavigation()

  const { width, height } = useWindowDimensions("window")

  const Slides = [
    {
      title: t('onboarding.0.title'),
      text: t('onboarding.0.text'),
      background: ob0,
      icon:require('../assets/icons/ic_ob_1.png')
    },
    {
      title: t('onboarding.1.title'),
      text: t('onboarding.1.text'),
      background: ob0,
      icon:require('../assets/icons/ic_ob_2.png')
    },
    {
      title: t('onboarding.2.title'),
      text: t('onboarding.2.text'),
      background: ob0,
      icon:require('../assets/icons/ic_ob_3.png')
    },
    {
      title: t('onboarding.3.title'),
      text: t('onboarding.3.text'),
      background: ob0,
      icon:require('../assets/icons/ic_ob_4.png')
    },
    {
      title: t('onboarding.4.title'),
      text: t('onboarding.4.text'),
      background: ob0,
      icon:require('../assets/icons/ic_ob_5.png')
    }
  ]

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
        <Button onPress={Skip} >{t("action.skip")}</Button>
        <Button mode='contained' onPress={goToNextSlide} >{t("action.next")}</Button>
      </View>
    </View>
  )
}

export default OnBoarding