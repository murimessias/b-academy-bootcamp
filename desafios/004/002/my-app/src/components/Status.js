const Success = ({ message }) => (
  <div className="success-message">{message}</div>
)

const Error = ({ message }) => <div className="error-message">{message}</div>

export { Success, Error }
