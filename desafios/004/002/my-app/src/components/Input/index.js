import * as S from './styles'

const Input = ({ label, name, type, onChange, value }) => (
  <S.Wrapper>
    <S.Label htmlFor={name}>{label}</S.Label>
    <S.Input
      type={type}
      id={name}
      name={name}
      onChange={onChange}
      value={value}
    />
  </S.Wrapper>
)

export default Input
