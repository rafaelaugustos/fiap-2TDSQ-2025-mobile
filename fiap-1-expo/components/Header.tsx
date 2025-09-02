import React from 'react'
import { Platform, View } from 'react-native'

const Header = () => {
  return (
    <View
      style={{
        width: '100%',
        height: Platform.OS === 'ios' ? 120 : 60,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    ></View>
  )
}

export { Header }
