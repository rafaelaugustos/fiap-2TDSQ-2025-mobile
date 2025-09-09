import { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native'
import { TextInput } from 'react-native'

const Chat = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  function addItem() {
    setMessages([...messages, input])
    setInput('')
  }

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      {/* <ScrollView>
        {messages.map((item) => (
          <Text>{item}</Text>
        ))}
      </ScrollView> */}
      <FlatList
        data={messages}
        renderItem={({ item }) => <Text style={{ height: 150 }}>{item}</Text>}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          onChangeText={(text) => {
            setInput(text)
          }}
          value={input}
          placeholder='Digite algo...'
          style={{
            width: '85%',
            height: 40,
            borderWidth: 1,
            borderColor: '#ccc',
            paddingLeft: 10,
          }}
        />
        <TouchableOpacity onPress={addItem}>
          <Text>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Chat
