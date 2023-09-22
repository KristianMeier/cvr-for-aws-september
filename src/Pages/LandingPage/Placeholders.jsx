import { Placeholder } from '../../Components/Placeholder/Placeholder'
import { PlaceholderWrapper } from '../../Components/Placeholder/PlaceholderWrapper'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Loading } from '../../Components/Loading'
import { API_ENDPOINT } from '../../Constants/Constants'

export const Placeholders = () => {
  const [apiData, setApiData] = useState({})
  const isNoData = !apiData.searchData

  useEffect(() => {
    axios.get(API_ENDPOINT).then((response) => setApiData(response.data))
  }, [apiData])

  if (isNoData) return <Loading />

  const placeholderWrapperData = [
    apiData.placeholderData.rowOne,
    apiData.placeholderData.rowTwo,
    apiData.placeholderData.rowThree,
  ]

  return (
    <>
      {placeholderWrapperData.map((placeholders) => (
        <PlaceholderWrapper key={placeholders}>
          {placeholders.map(({ className, title }) => (
            <Placeholder
              key={title}
              className={className}
              title={title}
            />
          ))}
        </PlaceholderWrapper>
      ))}
    </>
  )
}
