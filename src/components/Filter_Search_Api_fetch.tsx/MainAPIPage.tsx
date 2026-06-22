import React, { useEffect, useMemo, useState } from 'react'
import InputSearch from './InputSearch'
import ListAPIPage from './ListAPIPage'

type PostItem = {
  id: number
  title: string
  body: string
}

const MainAPIPage = () => {
  const [data, setData] = useState<PostItem[]>([])
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const jsonData = await response.json()
        setData(jsonData)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        console.log('Fetch attempt completed')
      }            
    }       
    fetchData()
  }, [])

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query)
        }, 500)

        return () => {
            clearTimeout(handler)
        }       
    }, [query])

    const filteredData = useMemo(() => {
        if (!debouncedQuery.trim()) return data

        return data.filter((item) => {
            const searchTerm = debouncedQuery.toLowerCase()
            return (
                item.title.toLowerCase().includes(searchTerm) ||
                item.body.toLowerCase().includes(searchTerm)
            )
        })
    }, [debouncedQuery, data])

  return (
    <div className="api-shell">
      <div className="api-card">
        <div className="hero-block">
          <span className="eyebrow">Live API Search</span>
          <h1>Debounced filter for fetched data</h1>
          <p>
            Type a query to filter post titles and bodies. The search updates after you stop typing.
          </p>
        </div>

        <InputSearch query={query} setQuery={setQuery} />
        <ListAPIPage data={filteredData} />
      </div>
    </div>
  )
}

export default MainAPIPage
