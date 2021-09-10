// Components
import Button from '../Button'
import * as Title from '../Title'

import * as S from './styles'

const Content = ({ content, title }) => {
  return (
    <S.Wrapper>
      <article>
        <section>
          <Title.H1>{title}</Title.H1>
          {content}
        </section>

        <hr />

        <section>
          <Title.H4>Do you want to read more?</Title.H4>
          <S.ButtonContainer>
            <Button kind="primary" cta="Yes" />
            <Button kind="secondary" cta="No" />
          </S.ButtonContainer>
        </section>
      </article>
    </S.Wrapper>
  )
}

export default Content
