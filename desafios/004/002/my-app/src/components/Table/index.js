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
            <td colSpan='6'>Nenhum carro encontrado!</td>
          </tr>
        )}

        {cars.map(({ image, brandModel, year, plate, color }) => (
          <tr key={plate}>
            <td>
              <S.ImgDiv
                background={image}
                aria-label='image'
                alt={brandModel}
              />
            </td>
            <td>{brandModel}</td>
            <td>{year}</td>
            <td>{plate}</td>
            <td>
              <S.ColorDiv bgColor={color} />
            </td>
            <td>
              <S.Button onClick={() => deleteCar(plate)}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                  />
                </svg>
              </S.Button>
            </td>
          </tr>
        ))}
      </tbody>
    </S.Wrapper>
  )
}

export default Table
