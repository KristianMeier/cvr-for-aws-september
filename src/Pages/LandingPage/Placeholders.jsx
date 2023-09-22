import { Placeholder } from '../../Components/Placeholder/Placeholder'
import { PlaceholderWrapper } from '../../Components/Placeholder/PlaceholderWrapper'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Loading } from '../../Components/Loading'
import { API_ENDPOINT } from '../../Constants/Constants'

export const Placeholders = () => {
  const [contentData, setContentData] = useState({})
  const isNoData = !contentData.searchData

  useEffect(() => {
    axios.get(API_ENDPOINT).then((response) => setContentData(response.data))
  }, [contentData])

  if (isNoData) return <Loading />

  const placeholderWrapperData = [
    contentData.placeholderData.rowOne,
    contentData.placeholderData.rowTwo,
    contentData.placeholderData.rowThree,
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
