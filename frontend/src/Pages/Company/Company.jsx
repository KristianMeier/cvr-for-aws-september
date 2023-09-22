import { Link, useParams } from 'react-router-dom'
import { Loading } from '../../Components/Loading'
import { convertCompanyData } from '../../Utils/convertCompanyData'
import { CompanyInfo } from './CompanyInfo'
import { CompanyTable } from './CompanyTable'
import { useFetch } from '../../Hooks/useFetch'

export const Company = () => {
  const { routeParams } = useParams()
  const apiData = useFetch()
  const isNoData = !apiData.searchData

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
