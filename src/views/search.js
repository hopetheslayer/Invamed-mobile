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
  const [heroHeight] = React.useState(new Animated.Value(225))
  const [isSearchFocus, setSearchFocus] = React.useState(false)

  React.useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(heroHeight, {
        toValue: 52 + 32,
        duration: 320
      }).start()
    } else {
      Animated.timing(heroHeight, {
        toValue: 200,
        duration: 320
      }).start()
    }
  }, [heroHeight, isSearchFocus])

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(isSearchFocus ? 'dark-content' : 'light-content')
    }, [isSearchFocus])
  )

  return (
    <Box as={SafeAreaView} bg={isSearchFocus ? 'white' : 'blue'} flex={1}>
      {/*Header*/}
      <Box
        as={Animated.View}
        position="relative"
        zIndex={1}
        height={heroHeight}
      >
        {!isSearchFocus && (
          <Box
            as={ImageBackground}
            source={bg}
            style={{ width: '100%', height: '100%' }}
          >
            {/*logo*/}
            <Box flex={1} alignItems="center" justifyContent="center">
              <Logo1 color="white" />
            </Box>
          </Box>
        )}

        {/*İnput*/}
        <Box
          position="absolute"
          zIndex={1}
          left={0}
          bottom={isSearchFocus ? -0 : -42}
          width="100%"
          p={16}
        >
          <Searchbar onChangeFocus={(status) => setSearchFocus(status)} />
        </Box>
      </Box>
      {/*Content*/}
      <Box flex={1} bg="searchwhite" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box p={30} flex={1}>
            <Text>History</Text>
          </Box>
        ) : (
          <Box p={30} flex={1}>
            <Text>Categories</Text>
          </Box>
        )}
      </Box>

      {/*Content*/}
    </Box>
  )
}

export default SearchScreen
