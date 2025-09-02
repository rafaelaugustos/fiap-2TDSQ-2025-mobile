import { Article, Button, ModalApp } from '@/components'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ScrollView, Text } from 'react-native'

const HomeScreen = () => {
  const [count, setCount] = useState(0)
  const [modal, setModal] = useState(false)
  const [cep, setCep] = useState({})

  useEffect(() => {
    handleViaCep()
  }, [])

  async function handleViaCep(cep = '01001000') {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

      setCep(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  setTimeout(() => {
    handleViaCep('08773490')
  }, 5000)

  return (
    <>
      <Text style={{ color: 'white' }}>CEP: {cep.cep}</Text>
      <Text style={{ color: 'white' }}>logradouro: {cep.logradouro}</Text>
      <Text style={{ color: 'white' }}>complemento: {cep.complemento}</Text>
      <Button
        text='Abrir'
        onPress={() => setModal(true)}
        style={{ backgroundColor: 'red' }}
      />
      <Button
        text='Adicionar'
        style={{ backgroundColor: 'red' }}
        onPress={() => setCount(count + 1)}
      />
      <Button text='Remover' onPress={() => setCount(count - 1)} />
      <ScrollView>
        {[...Array(20).keys()].map((i) => (
          <Article key={`key_${i}`} />
        ))}
      </ScrollView>

      <ModalApp />
    </>
  )
}

export default HomeScreen
