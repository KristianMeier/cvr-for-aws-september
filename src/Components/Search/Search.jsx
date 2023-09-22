import { useEffect } from 'react'
import { SearchCompany } from './SearchCompany'
import { SearchNoResults } from './SearchNoResults'
import { convertSearchData } from '../../Utils/convertSearchData'
import { filterCompanies } from '../../Utils/filterCompanies'
import { useSearchContext } from '../../Context/SearchContext'
import { SearchStatistic } from './SearchStatistic'
import { useFetch } from '../../Hooks/useFetch'

export const Search = () => {
  const {
    searchField,
    companies,
    setCompanies,
    isCompaniesFound,
    isSearchFieldEmpty,
  } = useSearchContext()
  const apiData = useFetch()
  const isNoData = !apiData.searchData

  useEffect(() => {
    if (isNoData) return
    const allCompanies = apiData.searchData.companies
    setCompanies(filterCompanies(searchField, allCompanies))
  }, [searchField])

  if (!isCompaniesFound && !isSearchFieldEmpty) return <SearchNoResults />

  if (isCompaniesFound)
    return (
      <div>
        <SearchStatistic />
        {companies.map((company, index) => {
          const convertedData = convertSearchData({ ...company })
          return (
            <SearchCompany
              key={index}
              index={index}
              convertedData={convertedData}
            />
          )
        })}
      </div>
    )

  return
}
