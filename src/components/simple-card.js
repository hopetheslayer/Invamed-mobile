import React from 'react'
import Text from './text'
import Box from './box'
import Button from './button'

export function SimpleCardContainer({ children, ...props }) {
  return (
    <Button
      justifyContent="flex-start"
      bg="whitex"
      borderRadius="normal"
      p={16}
      {...props}
    >
      {children}
    </Button>
  )
}

export function SimpleCardTitle({ children }) {
  return (
    <Text fontSize={18} fontWeight="bold">
      {children}
    </Text>
  )
}
