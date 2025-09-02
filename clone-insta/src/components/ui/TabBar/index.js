import { View, Text, TouchableOpacity } from 'react-native'
import style from './style'

const TabBar = () => {
  return (
    <View style={style.tabbar}>
      <View style={[style.tabIcon]}>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={[style.tabIcon]}>
        <TouchableOpacity>
          <Text>Chat</Text>
        </TouchableOpacity>
      </View>
      <View style={[style.tabIcon]}>
        <TouchableOpacity>
          <Text>Video</Text>
        </TouchableOpacity>
      </View>
      <View style={[style.tabIcon]}>
        <TouchableOpacity>
          <Text>Loja</Text>
        </TouchableOpacity>
      </View>
      <View style={[style.tabIcon]}>
        <TouchableOpacity>
          <Text>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export { TabBar }
