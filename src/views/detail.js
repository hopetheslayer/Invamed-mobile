import React from 'react'
import { StatusBar, Text } from 'react-native'
import Box from '../components/box'
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'

function DetailScreen() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content')
    }, [])
  )

  return (
    <Box
      as={SafeAreaView}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>Detail Screen!</Text>
    </Box>
  )
}

export default DetailScreen
