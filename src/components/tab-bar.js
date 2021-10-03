import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import Box from './box';
import Button from './button';
import {Search, Bookmark, Star} from './icons';
import {borderRadius} from 'styled-system';

import theme from '../utils/theme';

function TabBar({state, descriptors, navigation}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        return label === 'Search' ? (
          <Box key={label} p={15} mt={-25} bg="white" borderRadius="full">
            <Button
              size={60}
              borderRadius={55}
              bg="blue"
              flex={1}
              onPress={onPress}>
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
            onPress={onPress}>
            {label === 'History' && <Bookmark stroke={theme.colors.gray} />}
            {label === 'Favorite' && <Star stroke={theme.colors.gray} />}
            <Box size={3} bg={isFocused ? 'blue' : 'white'} mt={6} />
          </Button>
        );
      })}
    </View>
  );
}

export default TabBar;
