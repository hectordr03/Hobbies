import React from 'react'

function Hobby({ name, desc, img }) {

    return (
        <div className='Hobby'>
            <p> {name} </p>
            <img src= {img} alt='' />
            <p> {desc} </p>
        </div>
    )
}

export default Hobby
