import React, { useState } from "react"

function SearchBarTest() {
    const [items, setItems] = useState([])
    const [query, setQuery] = useState('')
    const users = [joe, jeff, pat, tim, sam,]

    const filteredItems = users.filter(user => {
        user.toLowerCase().include(query.toLowerCase())
    })

    return (
        <>
            Search: <input value={query} onChange={e => setQuery(e.target.value)} type="search" />
            <h3>Users</h3>
            {filteredItems.map(user => { <div>{user}</div> })}
        </>
    )

}

export default SearchBarTest