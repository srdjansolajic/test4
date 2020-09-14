import React from 'react'

const Select = ({ countries, setRegion }) => {

    const selectRegion = (e) => {
        setRegion(e.target.value)
    }

    return (
        <>
        <select onChange={selectRegion}>
            <option>Show region...</option>
            {countries.map(el => <option key={el.name}>{el.region}</option>)}
        </select>
        </>
    )
}

export default Select