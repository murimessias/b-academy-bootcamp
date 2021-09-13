const Input = ({ label, name, type, onChange, value }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      onChange={onChange}
      value={value}
    />
  </div>
)

export default Input
