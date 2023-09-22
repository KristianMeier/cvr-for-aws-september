import { Placeholder } from '../../Components/Placeholder/Placeholder'
import { PlaceholderWrapper } from '../../Components/Placeholder/PlaceholderWrapper'
import { Loading } from '../../Components/Loading'
import { useFetch } from '../../Hooks/useFetch'

export const Placeholders = () => {
  const apiData = useFetch()
  const isNoData = !apiData.searchData

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
