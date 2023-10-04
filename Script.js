//declarando a função
async function fechtAPI(){

  try {
  const requisicao = await fetch('https://restcountries.com/v3.1/all')
  const requisicaoConvertida = await requisicao.json()
  
  console.log(requisicaoConvertida)

  const arrayPaises = requisicaoConvertida
  return arrayPaises

  }catch(erro){
    console.log(erro)
    }
  }

  async function FiltraPaisesPorNome(NomePais){
    const ArrayPaisesCompletos = await fechtAPI()

    const ArrayPaisesFIltrados = ArrayPaisesCompletos.filter(
      (iten) => iten.name.common.toLowerCase().includes(NomePais.toLowerCase())
    )
      return ArrayPaisesFIltrados
    }

async function renderizaPaises(){
    const arrayPaises = await FiltraPaisesPorNome(inputFiltro.value)
    const cardPais = arrayPaises.map(iten => {
      return`
      <div class = "card-container ${iten.region}">
        <img src = "${iten.flags.png}" alt"bandeira de ${iten.name.common}">
        
        <div class = "card-texto">
        
          <h2>${iten.name.common}</h2>

          <div>
            <h4>Populaçao:</h4>
            <p>${iten.population} de pessoas</p>
          </div>

          <div>
            <h2>Capital:</h2>
            <p>${iten.capital}</p>
          </div

          <div>
            <h2>Continente:<h2>
            <p>${iten.continents}</p>
          </div>
        </div>
      </div>
      `})
    const container = document.getElementById('container')
    container.innerHTML = cardPais.join('')
}


renderizaPaises()
FiltraPaisesPorNome()
inputFiltro.addEventListener('keyup', renderizaPaises)