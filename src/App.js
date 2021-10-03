import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ThemeProvider} from 'styled-components';
import theme from './utils/theme';
import SearchScreen from './views/search';
import FavoriteScreen from './views/favorite';
import HistoryScreen from './views/history';
import DetailScreen from './views/detail';
import TabBar from './components/tab-bar';

import Box from './components/box';
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function SearchStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Searchs"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen name="Detail" component={DetailScreen} />
    </HomeStack.Navigator>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box flex={1} as={SafeAreaView}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Search"
            tabBar={props => <TabBar {...props} />}>
            <Tab.Screen name="History" component={HistoryScreen} />
            <Tab.Screen name="Search" component={SearchStack} />
            <Tab.Screen name="Favorite" component={FavoriteScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </Box>
    </ThemeProvider>
  );
}

export default App;
