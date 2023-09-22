import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_ENDPOINT } from '../Constants/Constants'

function useFetch() {
  const [apiData, setApiData] = useState({})

  useEffect(() => {
    axios.get(API_ENDPOINT).then((response) => setApiData(response.data))
  }, [apiData])

  return { apiData }
}

export default useFetch
