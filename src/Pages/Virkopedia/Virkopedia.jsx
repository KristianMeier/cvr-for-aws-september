import { VirkopediaArticle } from './VirkopediaArticle'
import { VirkopediaTab } from './VirkopediaTab'
import { useState } from 'react'
import { Loading } from '../../Components/Loading'
import { useFetch } from '../../Hooks/useFetch'

export const Virkopedia = () => {
  const apiData = useFetch()
  const isNoData = !apiData.searchData
  const [activeButtonIndex, setActiveButtonIndex] = useState(0)

  if (isNoData) return <Loading />

  const allArticles = apiData.virkopediaData

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
