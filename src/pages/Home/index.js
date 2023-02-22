import React from 'react'
import { DESKTOP, MOBILE, TABLET } from '../../constants/device'
import withViewport from '../../HOCs/withViewImport'

const Home = ({ device })=> {

  return (
    <div>
          {device === MOBILE && <div style={{backgroundColor:'red'}}>MOBILE</div>}
          {device === TABLET && <div style={{ backgroundColor: 'yellow' }}>TABLET</div>}

          {device === DESKTOP && <div style={{ backgroundColor: 'green' }}>DESKTOP</div>}

    </div>
  )
}
export default withViewport(Home)