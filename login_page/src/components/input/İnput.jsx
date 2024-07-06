import React from 'react'
import './İnput.css'

function İnput({ type, placeHolder, onChange }) {

    return (
        <input className="input" type={type} placeholder={placeHolder} onChange={onChange} />
    )

}

export default İnput