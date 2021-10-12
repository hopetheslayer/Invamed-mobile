import React from 'react'
import {
  Button,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
  Animated
} from 'react-native'

import { Invlogo, Logo, Logo1 } from '../components/icons'
import Searchbar from '../components/searchbar'

import Box from '../components/box'
import bg from '../assets/bg2.jpg'

import SafeAreaView from 'react-native-safe-area-view'

import { useFocusEffect } from '@react-navigation/native'

function SearchScreen({ navigation }) {
  const [heroHeight] = React.useState(new Animated.Value(200))
  const [isSearchFocus, setSearchFocus] = React.useState(false)

  React.useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(heroHeight, {
        toValue: 155,
        duration: 500
      }).start()
    } else {
      Animated.timing(heroHeight, {
        toValue: 285,
        duration: 500
      }).start()
    }
  }, [heroHeight, isSearchFocus])

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content')
    }, [])
  )

  return (
    <Box as={SafeAreaView} bg="blue">
      <StatusBar barStyle="light-content" />
      {/*Header*/}
      <Box as={Animated.View} position="relative" height={heroHeight}>
        <Box
          as={ImageBackground}
          source={bg}
          style={{ width: '100%', height: '100%' }}
        >
          {/*logo*/}
          <Box flex={1} alignItems="center" justifyContent="center">
            <Logo1 color="white" />
          </Box>
          {/*İnput*/}
          <Box p={16} width="100%">
            <Searchbar onChangeFocus={(status) => setSearchFocus(status)} />
          </Box>
        </Box>
        {/*Content*/}
        <Box>
          <Box p={15}>
            <Text>Deneme</Text>
          </Box>
        </Box>
      </Box>

      {/*Content*/}
    </Box>
  )
}

export default SearchScreen
