import React, { useState } from 'react'
import { StatusBar, Text, Animated, FlatList } from 'react-native'

import { Logo1 } from '../components/icons'
import Searchbar from '../components/searchbar'

import Box from '../components/box'

import SafeAreaView from 'react-native-safe-area-view'

import { useFocusEffect } from '@react-navigation/native'
import Bg from '../components/bg'
import { CardContainer, CardSummary, CardTitle } from '../components/card'
import { SimpleCardContainer, SimpleCardTitle } from '../components/simple-card'
import theme from '../utils/theme'

function SearchScreen({ navigation }) {
  const [bgOpacity] = React.useState(new Animated.Value(1))
  const [heroHeight] = React.useState(new Animated.Value(225))
  const [isSearchFocus, setSearchFocus] = React.useState(false)
  const [isLoading, setLoading] = useState(true)
  const [homeData, setHomeData] = React.useState({})

  const getHomeData = async () => {
    try {
      const response = await fetch('https://invamed.com/data.json')
      const json = await response.json()
      setHomeData(json.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    getHomeData()
  }, [])

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
      title: 'Cardiac',
      summary: 'Cardiac'
    },
    {
      id: '2',
      title: 'Vascular',
      summary: 'Vascular'
    },
    {
      id: '3',
      title: 'Neurology',
      summary: 'Neurology'
    },
    {
      id: '4',
      title: 'Spinal',
      summary: 'Spinal'
    },
    {
      id: '5',
      title: 'Surgery',
      summary: 'Surgery'
    },
    {
      id: '6',
      title: 'Urology',
      summary: 'Urology'
    },
    {
      id: '7',
      title: 'Oncology',
      summary: 'Oncology'
    },
    {
      id: '8',
      title: 'Ophthalmology',
      summary: 'Ophthalmology'
    },
    {
      id: '9',
      title: 'Ear Nose Throat',
      summary: 'Ear Nose Throat'
    },
    {
      id: '10',
      title: 'Gastroeintestinal',
      summary: 'Gastroeintestinal'
    },
    {
      id: '11',
      title: 'Algology',
      summary: 'Ear Nose Throat'
    },
    {
      id: '12',
      title: 'Diagnostic',
      summary: 'Diagnostic'
    },
    {
      id: '13',
      title: 'Plastic Surgery',
      summary: 'Plastic Surgery'
    },
    {
      id: '14',
      title: 'Custom Made Designs',
      summary: 'Custom Made Designs'
    },
    {
      id: '15',
      title: 'Innovative Productions',
      summary: 'Innovative Productions'
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
          <Box mt={-60} as={Animated.View} style={{ opacity: bgOpacity }}>
            <Bg pt={60} pb={26}>
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
          <Box flex={1}>
            <FlatList
              style={{ padding: 16 }}
              data={DATA}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Box py={5}>
                  <SimpleCardContainer>
                    <SimpleCardTitle>{item.title}</SimpleCardTitle>
                  </SimpleCardContainer>
                </Box>
              )}
              ListHeaderComponent={
                <Text color={theme.colors.textLight} mb={10}>
                  Last Searches
                </Text>
              }
            />
          </Box>
        ) : (
          <Box px={16} py={40} flex={1}>
            <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <Box py={5}>
                  <CardContainer
                    onPress={() =>
                      navigation.navigate('Detail', {
                        title: item.title,
                        paramKey: item.title
                      })
                    }
                  >
                    <CardTitle>{item.title} </CardTitle>
                    <CardSummary>{item.summary} </CardSummary>
                  </CardContainer>
                </Box>
              )}
              keyExtractor={(item) => item.id}
            />
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default SearchScreen
