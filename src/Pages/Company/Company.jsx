import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Loading } from '../../Components/Loading'
import { API_ENDPOINT } from '../../Constants/Constants'
import { convertCompanyData } from '../../Utils/convertCompanyData'
import { CompanyInfo } from './CompanyInfo'
import { CompanyTable } from './CompanyTable'

export const Company = () => {
  const { routeParams } = useParams()
  const [apiData, setApiData] = useState({})
  const isNoData = !apiData.searchData

  useEffect(() => {
    axios.get(API_ENDPOINT).then((response) => setApiData(response.data))
  }, [apiData])

  if (isNoData) return <Loading />

  const companyInfoData = apiData?.searchData?.companyinfoTitles
  const lorem = apiData?.lorem

  const company = convertCompanyData(apiData.searchData.companies[routeParams])
  const companyName = apiData.searchData.companies[routeParams].companyName

  if (!company) return <h2>No companies found...</h2>

  return (
    <section className="company-page">
      <Link
        className="back-to-search"
        to="/">
        Back to search
      </Link>
      <h2> {companyName} </h2>
      <CompanyTable company={company} />
      <div className="all-companies-info">
        {companyInfoData.map((companyInfo, index) => (
          <CompanyInfo
            key={index}
            {...companyInfo}
            lorem={lorem}
          />
        ))}
      </div>
    </section>
  )
}
