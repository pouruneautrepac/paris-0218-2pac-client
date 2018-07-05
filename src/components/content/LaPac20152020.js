import React from 'react'
import './Content.css'
import Container from '../Container'

const LaPac20152020 = ({children}) => {
  return (
    <div>
      <Container>
        <div className="fix-content-article">
          <h1>La PAC 2015-2020</h1>
          <br/>
          <p>Contenu à venir...</p>
          <br/>
          <p>En attendant, vous pouvez vous reporter sur les sites suivants :</p>
          <p><a href="https://www.supagro.fr/capeye/reforme-de-la-pac/"> https://www.supagro.fr/capeye/reforme-de-la-pac/</a> et <a href="https://www.supagro.fr/capeye/pac-application/"> https://www.supagro.fr/capeye/pac-application/ </a></p>
          <p><a href="http://agriculture.gouv.fr/cap-sur-la-pac-2015-2020-0"> http://agriculture.gouv.fr/cap-sur-la-pac-2015-2020-0 </a></p>
        </div>
      </Container>
    </div>
  )
}

export default LaPac20152020
