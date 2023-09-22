import { useEffect, useState } from 'react'
import axios from 'axios'
import { API_ENDPOINT } from '../../Constants/Constants'
import { SearchCompany } from './SearchCompany'
import { SearchNoResults } from './SearchNoResults'
import { convertSearchData } from '../../Utils/convertSearchData'
import { filterCompanies } from '../../Utils/filterCompanies'
import { useSearchContext } from '../../Context/SearchContext'
import { SearchStatistic } from './SearchStatistic'

export const Search = () => {
  const {
    searchField,
    companies,
    setCompanies,
    isCompaniesFound,
    isSearchFieldEmpty,
  } = useSearchContext()
  const [apiData, setApiData] = useState({})
  const isNoData = !apiData.searchData

  useEffect(() => {
    axios.get(API_ENDPOINT).then((response) => setApiData(response.data))
  }, [apiData])

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
