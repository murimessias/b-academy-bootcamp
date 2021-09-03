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

const App = () => (
  <div className="grid">
    <Header title="Header" />
    <Menu />

    <div className="main">
      <Sidebar posts={posts} />
      <Content />
    </div>

    <Footer />
  </div>
)

export default App
