import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import Box from './box'
import Button from './button'
import { Search, Bookmark, Star } from './icons'
import { borderRadius } from 'styled-system'

import theme from '../utils/theme'

function TabBar({ state, descriptors, navigation }) {
  return (
    <Box
      pb={7}
      bg="white"
      flexDirection="row"
      style={{
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 24
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true })
          }
        }

        return label === 'Search' ? (
          <Box key={label} p={15} mt={-25} bg="white" borderRadius="full">
            <Button
              size={60}
              borderRadius={55}
              bg="blue"
              flex={1}
              onPress={onPress}
            >
              <Search stroke="white" />
            </Button>
          </Box>
        ) : (
          <Button
            pt={8}
            key={label}
            flexDirection="column"
            height={60}
            flex={1}
            onPress={onPress}
          >
            {label === 'History' && (
              <Bookmark
                color={isFocused ? theme.colors.blue : theme.colors.light}
              />
            )}
            {label === 'Favorite' && (
              <Star
                color={isFocused ? theme.colors.blue : theme.colors.light}
              />
            )}
            <Box
              borderRadius="full"
              size={4}
              bg={isFocused ? 'blue' : 'white'}
              mt={6}
            />
          </Button>
        )
      })}
    </Box>
  )
}

export default TabBar
