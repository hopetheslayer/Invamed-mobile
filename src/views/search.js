import React from 'react';
import {Button, View} from 'react-native';

import Box from '../components/box';
import BoxCenter from '../components/box-center';

function SearchScreen({navigation}) {
  return (
    <BoxCenter>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </BoxCenter>
  );
}

export default SearchScreen;
