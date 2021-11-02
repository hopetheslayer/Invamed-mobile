import React, { useEffect, useState } from 'react'

import { StatusBar, Text, ActivityIndicator, FlatList } from 'react-native'
import Box from '../components/box'
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'

function DetailScreen(route) {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content')
    }, [])
  )

  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])



  const getMovies = async () => {
    try {
      const response = await fetch('https://invamed.com/data.json')
      const json = await response.json()
      setData(json.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <Box as={SafeAreaView} p={16} bg="softblue" flex={1}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>
              {item.id}, {item.slug}
            </Text>
          )}
        />
      )}
    </Box>
  )
}

export default DetailScreen
