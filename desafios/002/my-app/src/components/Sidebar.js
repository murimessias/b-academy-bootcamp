import * as Title from './Title'

const Sidebar = ({ posts, handleChangePost }) => (
  <aside className="sidebar">
    <Title.H3>Posts</Title.H3>
    <nav>
      <ul>
        {posts.map(({ title, id }) => (
          <li key={id} className="sidebar-item">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault()
                handleChangePost(id)
              }}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
)

export default Sidebar
