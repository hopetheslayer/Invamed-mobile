import React from 'react'
import Box from './box'

import Input from './input'
import { Search, Close } from './icons'

import theme from '../utils/theme'
import { Text, Keyboard } from 'react-native'
import Button from './button'

function Searchbar({ onChangeFocus }) {
  const [value, setValue] = React.useState('')
  const [isFocus, setFocus] = React.useState(false)

  React.useEffect(() => {
    onChangeFocus(isFocus)
  }, [isFocus, onChangeFocus])

  const onCancel = () => {
    setFocus(false)
    Keyboard.dismiss()
  }
  const onClear = () => {
    setValue('')
  }

  return (
    <Box flexDirection="row" alignItems="center">
      <Box position="relative" flex={1}>
        <Input
          bg="whitex"
          height={52}
          color="textDark"
          borderWidth={1}
          borderColor={isFocus ? '#D1D1D1' : 'transparent'}
          placeholder="Search Invamed Products"
          placeholderTextColor="textMedium"
          JustifyContent="center"
          pl={52}
          borderRadius="normal"
          value={value}
          onFocus={() => setFocus(true)}
          onChangeText={(text) => setValue(text)}
        />
        {value.length > 0 && (
          <Button onPress={onClear} position="absolute" right={16} top={14}>
            <Close color={theme.colors.textDark} />
          </Button>
        )}
        <Button position="absolute" left={16} top={14}>
          <Search color={theme.colors.textMedium} />
        </Button>
      </Box>
      {isFocus && (
        <Button onPress={onCancel} px={15} height={52}>
          <Text>Vazgeç</Text>
        </Button>
      )}
    </Box>
  )
}

export default Searchbar
