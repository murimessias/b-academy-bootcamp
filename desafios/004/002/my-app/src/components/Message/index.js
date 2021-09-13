import * as S from './styles'

const Message = ({ message, status }) => (
  <S.Wrapper status={status}>{message}</S.Wrapper>
)

export default Message
