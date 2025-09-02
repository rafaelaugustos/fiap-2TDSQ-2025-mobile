import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

type Props = {
  text: string
  onPress?: () => void
  style?: object
}

const Button = ({ text, onPress, style }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    marginTop: 10,
  },
})

export { Button }
