import { useState } from 'react'

// Components
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import Layout from './components/Layout'
import Main from './components/Main'
import Menu from './components/Menu'
import Sidebar from './components/Sidebar'

// Styles
import GlobalStyles from './styles/globalStyles'

// Data
import posts from './data/posts'

const App = () => {
  const [title, setTitle] = useState(posts[0].title)
  const [content, setContent] = useState(posts[0].content)

  const handleChangePost = (id) => {
    const targetPost = posts.find((post) => post.id === id)
    const { title, content } = targetPost

    setTitle(title)
    setContent(content)
  }

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Header title="Header" />
        <Menu />
        <Main>
          <Sidebar posts={posts} handleChangePost={handleChangePost} />
          <Content title={title} content={content} />
        </Main>
        <Footer />
      </Layout>
    </>
  )
}

export default App
