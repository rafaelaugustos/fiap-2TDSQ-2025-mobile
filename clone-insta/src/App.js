import Feed from './pages/Feed'
import Chat from './pages/Chat'
import Video from './pages/Video'
import Loja from './pages/Loja'
import Perfil from './pages/Perfil'
import { Header, TabBar } from './components/ui'
import { useState } from 'react'

const { parse, stringify } = JSON

const App = () => {
  const [pages, setPages] = useState([
    {
      name: 'Feed',
      hidden: true,
    },
    {
      name: 'Chat',
      hidden: false,
    },
    {
      name: 'Video',
      hidden: true,
    },
    {
      name: 'Loja',
      hidden: true,
    },
    {
      name: 'Perfil',
      hidden: true,
    },
  ])

  function handlePage(name) {
    const pagesCopy = parse(stringify(pages))
    const index = pages.findIndex(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    )

    for (let i = 0; i < pagesCopy; i++) {
      console.log(i, 'i')
      pagesCopy[i].hidden = true
      console.log(pagesCopy[i].hidden)
    }

    pagesCopy[index].hidden = false

    setPages(pagesCopy)
    console.log(pages)
  }

  return (
    <>
      <Header />
      {!pages[0].hidden && <Feed />}
      {!pages[1].hidden && <Chat />}
      {!pages[2].hidden && <Video />}
      {!pages[3].hidden && <Loja />}
      {!pages[4].hidden && <Perfil />}
      <TabBar setPage={handlePage} />
    </>
  )
}

export default App
