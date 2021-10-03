import React from 'react';
import {Button, View} from 'react-native';
import {StyleSheet} from 'react-native';
import BoxCenter from '../components/box-center';
import {Invlogo, Logo, Logo1} from '../components/icons';

function SearchScreen({navigation}) {
  return (
    <BoxCenter>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />

      <Logo1 style={styles.boslukver} color="blue" />
    </BoxCenter>
  );
}

const styles = StyleSheet.create({
  boslukver: {
    marginTop: 16,
  },
});

export default SearchScreen;
