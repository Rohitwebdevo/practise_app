import React, { useEffect } from 'react'

const debounce = ({query, delay}) => {
    const [debounceValue, setDebounceValue] = React.useState(query);

    useEffect(() => {

        const handler = setTimeout(() => {
            setDebounceValue(query)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    },[query, delay])

    return debounceValue
}

export default debounce
