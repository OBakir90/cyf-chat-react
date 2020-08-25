import React, { useState, useEffect } from 'react'

const Search = ({ message, allMessages }) => {
    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        const found = allMessages.filter(message => message.text.toLowerCase() && (message.text).includes(search.toLowerCase()))
        message(found)
    }, [search, message, allMessages])

    return (
        <div style={{ 'width': '60%', 'margin': '30px' }}>
            <input className="form-control" type="text" onChange={handleChange} placeholder="Search" aria-label="Search" />
        </div>
    )
}

export default Search
