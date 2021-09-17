import * as Title from '../Title'

import * as S from './styles'

const Sidebar = ({ posts, handleChangePost }) => {
  const handleClick = (e, id) => {
    e.preventDefault()
    handleChangePost(id)
  }

  return (
    <S.Wrapper>
      <Title.H3>Posts</Title.H3>
      <nav>
        <ul>
          {posts.map(({ title, id }) => (
            <S.Item key={id}>
              <a href='/' onClick={(e) => handleClick(e, id)}>
                {title}
              </a>
            </S.Item>
          ))}
        </ul>
      </nav>
    </S.Wrapper>
  )
}

export default Sidebar
