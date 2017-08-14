import '../style/react-spinner.css'

import React from 'react'
import Spinner from 'react-spinner'

class S extends React.Component {
    render() {
        return <Spinner {...this.props}/>
    }
}

export default S