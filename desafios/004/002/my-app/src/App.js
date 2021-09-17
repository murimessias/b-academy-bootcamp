import { useState, useEffect } from 'react'
import { get, url, del } from './utils/http'

// Components
import Form from './components/Form'
import Layout from './components/Layout'
import Message from './components/Message'
import Table from './components/Table'
import Title from './components/Title'

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
      setMessage({
        status: 'error',
        message:
          'Erro ao conectar-se com o servidor. Verifique sua conexão ou aguarde alguns instantes',
      })
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
      setMessage({
        status: 'error',
        message: 'Erro ao remover um carro',
      })
      resetMessage()
      return
    }

    setMessage({ status: 'success', message: 'Carro removido com sucesso!' })

    getCars()
    resetMessage()
  }

  return (
    <>
      <GlobalStyles />

      {!!message && (
        <Message message={message.message} status={message.status} />
      )}

      <Layout>
        <Title title='Cadastro de carros' />
        <Form
          setCar={setCar}
          setMessage={setMessage}
          resetMessage={resetMessage}
        />

        <Table cars={cars} deleteCar={deleteCar} />
      </Layout>
    </>
  )
}

export default App
