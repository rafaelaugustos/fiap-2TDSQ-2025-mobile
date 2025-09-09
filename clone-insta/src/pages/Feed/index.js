import { View, Text, FlatList } from 'react-native'
import style from './style'
import { Post } from '../../components'
import FeedList from '../../mocks/feed.json'

const Feed = () => {
  // async function getFeed() {
  //   try {
  //     const result = await fetch('../../mocks/feed.json')

  //     console.log(result)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  // getFeed()

  console.log(FeedList)

  return (
    <View style={style.page}>
      {/* {FeedList.map((item) => (
          <Post />
        ))} */}

      <FlatList
        data={FeedList}
        renderItem={({ item }) => <Post />}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => <Text>Lista Vazia</Text>}
      />
    </View>
  )
}

export default Feed
