const Sidebar = ({ posts }) => (
  <aside className="sidebar">
    <nav>
      <ul>
        {posts.map(({ title, id }) => (
          <li key={id} className="sidebar-item">
            <a href="/">{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
)

export default Sidebar
