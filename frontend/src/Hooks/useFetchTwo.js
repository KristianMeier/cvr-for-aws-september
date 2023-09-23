import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_ENDPOINT } from '../Constants/Constants'

export const useFetch = () => {
  const [apiData, setApiData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_ENDPOINT)
        setApiData(response.data)
        setError(null)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, []) // Removed `apiData` from dependencies because you probably don't want to re-fetch every time `apiData` changes

  return { data: apiData, loading, error }
}
//Now, when you use this hook, you can check the loading and error states to provide feedback to the user:

const { data, loading, error } = useFetch()

if (loading) return <div>Loading...</div>
if (error) return <div>Error: {error.message}</div>
// Render your component using `data`
// This approach ensures that any consumer of this hook is informed of the loading state and any potential errors. This allows for more robust and user-friendly UI implementations.
