import { useState } from 'react'
import { post, url } from '../../utils/http'

// Components
import Button from '../Button'
import Input from '../Input'

import * as S from './styles'

const initialFormValue = {
  image: '',
  brandModel: '',
  year: '',
  plate: '',
  color: '#fff000'
}

const Form = ({ setCar, setMessage, resetMessage }) => {
  const [formValue, setFormValue] = useState(initialFormValue)

  const createCar = async () => {
    const result = await post(url, formValue)

    if (result.error) {
      setMessage({
        status: 'error',
        message:
          'Erro ao cadastrar o carro. Verifique se os campos campos foram preenchidos corretamente'
      })
      resetMessage()
      return
    }

    setMessage({ status: 'success', message: 'Carro cadastrado com sucesso' })

    setCar(result)
    resetMessage()
  }

  const resetForm = () => setFormValue(initialFormValue)

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    createCar()
    resetForm()
  }

  const { image, brandModel, year, plate, color } = formValue

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <Input
        type="text"
        name="image"
        label="Imagem: "
        onChange={handleChange}
        value={image}
      />
      <Input
        type="text"
        name="brandModel"
        label="Marca/Modelo: "
        onChange={handleChange}
        value={brandModel}
      />
      <Input
        type="number"
        name="year"
        label="Ano: "
        onChange={handleChange}
        value={year}
      />
      <Input
        type="text"
        name="plate"
        label="Placa: "
        onChange={handleChange}
        value={plate}
      />
      <Input
        type="color"
        name="color"
        label="Cor: "
        onChange={handleChange}
        value={color}
      />

      <Button cta="Cadastrar carro" />
    </S.Wrapper>
  )
}

export default Form
