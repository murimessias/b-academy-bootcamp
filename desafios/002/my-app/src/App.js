import { useState } from 'react'

// Components
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'
import Sidebar from './components/Sidebar'

// Styles
import './styles.css'

// Data
import posts from './data/posts'

const App = () => {
  const [title, setTitle] = useState(posts[0].title)
  const [content, setContent] = useState(posts[0].content)

  return (
    <div className="grid">
      <Header title="Header" />
      <Menu />

      <div className="main">
        <Sidebar posts={posts} />
        <Content title={title} content={content} />
      </div>

      <Footer />
    </div>
  )
}

export default App
