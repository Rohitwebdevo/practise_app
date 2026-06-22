import React from 'react'

type InputSearchProps = {
  query: string
  setQuery: (value: string) => void
}

const InputSearch: React.FC<InputSearchProps> = ({ query, setQuery }) => {
  return (
    <div className="search-card">
      <label htmlFor="searchInput">Search posts</label>
      <input
        id="searchInput"
        className="search-input"
        type="text"
        value={query}
        placeholder="Search title or body..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  )
}

export default InputSearch
