import React from 'react'

const Flag = ({ countries, region }) => {

    return (
        <>
        <div className='div-flag'>
        {countries.filter(el => region === 'Show region...' ? el : el.region.includes(region)).map(el => 
        <>
        <div key={el.alpha3Code} className='name'>
        <img width='300px' alt={el.name} src={el.flag} />
        <p>Name: {el.name}</p>
        <p>Population: {el.population}</p>
        </div>
        </>
        )}
        </div>
        </>
    )
}

export default Flag