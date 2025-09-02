import React, { useEffect, useState } from 'react'
import { Modal, Text } from 'react-native'
import { Button } from './Button'

const ModalApp = () => {
  const [modal, setModal] = useState(false)

  useEffect(() => {
    console.log('modal inicialziada')
  }, [])
  return (
    <Modal visible={modal} animationType='slide'>
      <Text>Modal Content</Text>
      <Button
        text='Fechar'
        onPress={() => setModal(false)}
        style={{ backgroundColor: 'red' }}
      />
    </Modal>
  )
}

export { ModalApp }
