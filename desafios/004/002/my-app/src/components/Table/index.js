import * as S from './styles'

const Table = ({ cars, deleteCar }) => {
  return (
    <S.Wrapper>
      <thead>
        <tr>
          <th>Imagem</th>
          <th>Marca/Modelo</th>
          <th>Ano</th>
          <th>Placa</th>
          <th>Cor</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {cars.length === 0 && (
          <tr>
            <td>Nenhum carro encontrado!</td>
          </tr>
        )}

        {cars.map(({ image, brandModel, year, plate, color }) => (
          <tr key={plate}>
            <td>
              <img src={image} alt={brandModel} />
            </td>
            <td>{brandModel}</td>
            <td>{year}</td>
            <td>{plate}</td>
            <td>{color}</td>
            <td>
              <S.Button onClick={() => deleteCar(plate)}>Oi</S.Button>
            </td>
          </tr>
        ))}
      </tbody>
    </S.Wrapper>
  )
}

export default Table
