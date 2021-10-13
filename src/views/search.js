import React from 'react'
import { StatusBar, Text, Animated, FlatList } from 'react-native'

import { Logo1 } from '../components/icons'
import Searchbar from '../components/searchbar'

import Box from '../components/box'

import SafeAreaView from 'react-native-safe-area-view'

import { useFocusEffect } from '@react-navigation/native'
import Bg from '../components/bg'
import { CardContainer, CardSummary, CardTitle } from '../components/card'

function SearchScreen({ navigation }) {
  const [bgOpacity] = React.useState(new Animated.Value(1))
  const [heroHeight] = React.useState(new Animated.Value(225))
  const [isSearchFocus, setSearchFocus] = React.useState(false)

  React.useEffect(() => {
    if (isSearchFocus) {
      //bg Opacity
      Animated.timing(bgOpacity, {
        toValue: 0,
        duration: 320,
        useNativeDriver: false
      }).start()
      //hero yükseklik
      Animated.timing(heroHeight, {
        toValue: 52 + 32,
        duration: 320,
        useNativeDriver: false
      }).start()
    } else {
      Animated.timing(bgOpacity, {
        toValue: 1,
        duration: 320,
        useNativeDriver: false
      }).start()
      //hero yükseklik
      Animated.timing(heroHeight, {
        toValue: 200,
        duration: 320,
        useNativeDriver: false
      }).start()
    }
  }, [bgOpacity, heroHeight, isSearchFocus])

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(isSearchFocus ? 'dark-content' : 'light-content')
    }, [isSearchFocus])
  )

  const DATA = [
    {
      id: '1',
      title: 'First Item 1',
      summary: 'First Item 1'
    },
    {
      id: '2',
      title: 'Second Item 2',
      summary: 'Second Item 2'
    },
    {
      id: '3',
      title: 'Third Item 3',
      summary: 'Third Item 3'
    },
    {
      id: '4',
      title: 'Fourth Item 4',
      summary: 'Fourth Item 4'
    },
    {
      id: '5',
      title: 'Fived Item 5',
      summary: 'Fived Item 5'
    }
  ]

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
          <Box mt={-120} as={Animated.View} opacity={bgOpacity}>
            <Bg pt={120} pb={26}>
              {/*logo*/}
              <Box flex={1} alignItems="center" justifyContent="center">
                <Logo1 color="white" />
              </Box>
            </Bg>
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
          <Box px={16} py={40} flex={1}>
            <Box py={5}>
              <CardContainer onPress={() => navigation.navigate('Detail')}>
                <CardTitle>xd </CardTitle>
                <CardSummary>dsa </CardSummary>
              </CardContainer>
            </Box>
          </Box>

          // <Box px={16} py={40} flex={1}>
          // <FlatList
          //   data={DATA}
          //  renderItem={({ item }) => (
          //   <Box py={5}>
          //     <CardContainer onPress={() => navigation.navigate('Detail')}>
          //      <CardTitle>{item.title} </CardTitle>
          //     <CardSummary>{item.summary} </CardSummary>
          //  </CardContainer>
          //</Box>
          // )}
          // keyExtractor={(item) => item.id}
          //  />
        )}
      </Box>

      {/*Content*/}
    </Box>
  )
}

export default SearchScreen
