import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Loading } from '../../Components/Loading'
import { convertCompanyData } from '../../Utils/convertCompanyData'
import { CompanyInfo } from './CompanyInfo'
import { CompanyTable } from './CompanyTable'
import { API_ENDPOINT } from '../../Constants/Constants'

export const Company = () => {
  const { routeParams } = useParams()
  const [contentData, setContentData] = useState({})
  const isNoData = !contentData.searchData

  useEffect(() => {
    axios.get(API_ENDPOINT).then((response) => setContentData(response.data))
  }, [contentData])

  if (isNoData) return <Loading />

  const companyInfoData = contentData?.searchData?.companyinfoTitles
  const lorem = contentData?.lorem

  const company = convertCompanyData(
    contentData.searchData.companies[routeParams]
  )
  const companyName = contentData.searchData.companies[routeParams].companyName

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
