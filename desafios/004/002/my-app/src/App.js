import { useState, useEffect } from 'react'
import { get, url, del } from './utils/http'

// Components
import Form from './components/Form'
import Table from './components/Table'
import Message from './components/Message'
import { Success, Error } from './components/Status'

// Styles
import GlobalStyles from './styles/globalStyles'

const App = () => {
  const [cars, setCars] = useState([])
  const [car, setCar] = useState({})
  const [message, setMessage] = useState(null)

  const resetMessage = () => {
    setTimeout(() => {
      setMessage(null)
    }, 6000)
  }

  const getCars = async () => {
    const result = await get(url)

    if (result.error) {
      setMessage(
        <Error message="Erro ao conectar com o servidor, tente novamente mais tarde" />
      )
      setTimeout(() => {
        setMessage(null)
      }, 6000)
      return
    }

    setCars(result)
  }

  useEffect(() => {
    getCars()
  }, [car])

  const deleteCar = async (plate) => {
    const result = await del(url, { plate })

    if (result.error) {
      setMessage(<Error message="Algo deu errado!" />)
      resetMessage()
      return
    }

    setMessage(<Success message="Boa tiozão!" />)

    getCars()
    resetMessage()
  }

  return (
    <>
      <GlobalStyles />
      <main className="cars">
        <Form
          setCar={setCar}
          setMessage={setMessage}
          resetMessage={resetMessage}
        />
        {!!message && <Message message={message} />}
        <Table cars={cars} deleteCar={deleteCar} />
      </main>
    </>
  )
}

export default App
