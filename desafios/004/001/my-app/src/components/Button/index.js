const Button = ({ kind, cta }) => (
  <button className={`btn btn-${kind}`}>{cta}</button>
)

export default Button
