import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components'
import theme from './utils/theme'
import SearchScreen from './views/search'
import FavoriteScreen from './views/favorite'
import HistoryScreen from './views/history'
import DetailScreen from './views/detail'
import TabBar from './components/tab-bar'

import Button from './components/button'
import { Geri, More } from './components/icons'
import Left from './components/icons/Left'

const Tab = createBottomTabNavigator()
const HomeStack = createNativeStackNavigator()

function SearchStack() {
  return (
    <HomeStack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <HomeStack.Screen
        name="Searchs"
        component={SearchScreen}
        options={() => {
          return {
            headerShown: false
          }
        }}
      />
      <HomeStack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route, navigation }) => {
          return {
            title: (route.params && route.params.title) || '',
            headerStyle: {
              backgroundColor: theme.colors.softblue,
              shadowColor: 'transparent'
            },
            headerLeft: () => (
              <Button
                px={20}
                height="100%"
                onPress={() => navigation.navigate('Searchs')}
              >
                <Left color={theme.colors.textDark} />
              </Button>
            ),
            headerRight: () => (
              <Button
                px={20}
                height="100%"
                onPress={() => navigation.navigate('Searchs')}
              >
                <More color={theme.colors.textDark} />
              </Button>
            )
          }
        }}
      />
    </HomeStack.Navigator>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Search"
            tabBar={(props) => <TabBar {...props} />}
          >
            <Tab.Screen name="History" component={HistoryScreen} />
            <Tab.Screen
              name="Search"
              options={{ headerShown: false }}
              component={SearchStack}
            />
            <Tab.Screen name="Favorite" component={FavoriteScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App
