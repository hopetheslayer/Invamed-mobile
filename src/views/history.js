import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import Box from '../components/box'
import SafeAreaView from 'react-native-safe-area-view'
import { useIsFocused } from '@react-navigation/native'

import { useFocusEffect } from '@react-navigation/native'

function HistoryScreen() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content')
    }, [])
  )

  return (
    <Box as={SafeAreaView} flex={1}>
      <Text>History Screen!</Text>
    </Box>
  )
}

export default HistoryScreen
