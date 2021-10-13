import React from 'react'
import Text from './text'
import Box from './box'
import Button from './button';

export function CardContainer({ children, ...props }) {
  return (
    <Button bg="white" borderRadius="normal" px={12} p={16} {...props}>
      <Box flex={1} borderLeftWidth={3} pl={12} borderLeftColor="light">
        {children}
      </Box>
    </Button>
  )
}

export function CardTitle({ children }) {
  return (
    <Text fontSize={18} fontWeight="bold">
      {children}
    </Text>
  )
}

export function CardSummary({ children }) {
  return <Text fontSize={14}>{children}</Text>
}
