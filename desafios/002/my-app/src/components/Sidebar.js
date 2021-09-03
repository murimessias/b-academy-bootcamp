import * as Title from './Title'

const Sidebar = ({ posts, handleChangePost }) => {
  const handleClick = (e, id) => {
    e.preventDefault()
    handleChangePost(id)
  }

  return (
    <aside className="sidebar">
      <Title.H3>Posts</Title.H3>
      <nav>
        <ul>
          {posts.map(({ title, id }) => (
            <li key={id} className="sidebar-item">
              <a href="/" onClick={(e) => handleClick(e, id)}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
