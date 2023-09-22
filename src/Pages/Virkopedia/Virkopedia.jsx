import { VirkopediaArticle } from './VirkopediaArticle'
import { VirkopediaTab } from './VirkopediaTab'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Loading } from '../../Components/Loading'
import { API_ENDPOINT } from '../../Constants/Constants'

export const Virkopedia = () => {
  const [contentData, setContentData] = useState({})
  const isNoData = !contentData.searchData
  const [activeButtonIndex, setActiveButtonIndex] = useState(0)

  useEffect(() => {
    axios.get(API_ENDPOINT).then((response) => setContentData(response.data))
  }, [contentData])

  if (isNoData) return <Loading />

  const allArticles = contentData.virkopediaData

  const { paragraphs, heading } = allArticles[activeButtonIndex]

  return (
    <div className="virkopedia">
      <h2>Virkopedia</h2>
      <div className="virkopedia-container">
        <div className="btn-container">
          {allArticles.map(({ heading }, index) => (
            <VirkopediaTab
              key={heading + index}
              setActiveButtonIndex={setActiveButtonIndex}
              heading={heading}
              index={index}
              activeButtonIndex={activeButtonIndex}
            />
          ))}
        </div>
        <VirkopediaArticle
          heading={heading}
          paragraphs={paragraphs}
        />
      </div>
    </div>
  )
}
