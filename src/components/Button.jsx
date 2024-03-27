import React from 'react'
import '../styles/button.scss'

function Button({ items }) {
    console.log(items)
    return (
        <>
            {items.map((item, index) => (
                <button className='button' key={index}>{item}</button>
            ))}
        </>
    )
}

export default Button