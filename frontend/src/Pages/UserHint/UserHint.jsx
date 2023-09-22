import { useNavigate } from 'react-router-dom'
import { SmallContainer } from '../../Components/Other/SmallContainer'
import { LANDING_PAGE_PATH } from '../../Constants/Constants'
import { useFetch } from '../../Hooks/useFetch'
import { Loading } from '../../Components/Loading'

export const UserHint = () => {
  const navigate = useNavigate()
  const apiData = useFetch()
  const isNoData = !apiData.searchData

  if (isNoData) return <Loading />

  const allCompanies = apiData.searchData.companies

  const companyNames = allCompanies.map(({ companyName, index }) => (
    <p key={companyName + index}>{companyName}</p>
  ))

  return (
    <SmallContainer
      title="Beneath are the companies in the database"
      onClick={() => navigate(LANDING_PAGE_PATH)}
      btnText="To Frontpage"
      content={companyNames}
    />
  )
}
