
import { useParams } from 'react-router'
import styled from 'styled-components'
import colors from '../utils/style/colors'
import { useFetch } from '../utils/hooks'
import LoadingIcon from '../components/LoadingIcon'
import Activity from '../components/Activity'
import KeyData from '../components/KeyData'
import Average from '../components/Average'


/**
 * CSS for component using styled.components
 */

const ErrorWrapper = styled.span`
  color: ${colors.secondary};
  margin-left: 125px;
`;

const Welcome = styled.div`
  color: ${colors.secondary};
  margin-left: 117px;
  h1 {
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    margin: unset;
  }
  p {
    font-size: 18px;
    font-weight: 400;
  }
  span {
    color: ${colors.primary};
  }
`;

const UserStats = styled.div`
  display: flex;
  margin-left: 125px;
`;

const Analysis = styled.div`
  display: flex;
  justify-content: space-between;
`;

/**
 * 
 * @function User
 * @returns {JSX}
 */

export default function User() {

  const { id } = useParams()
  
  const mockData = `../${id}.json`
  // const apiData = `http://localhost:3000/user/${id}/`
  // const activity =`http://localhost:3000/user/${id}/activity`
  // const sessions = `http://localhost:3000/user/${id}/average-sessions`
  // const performance = `http://localhost:3000/user/${id}/performance`
  const { data, isLoading, error } = useFetch(mockData)
  if (error) {
    return <ErrorWrapper>Il y a un problème</ErrorWrapper>
  }

  if (isLoading) {
      return (
        <LoadingIcon />
      )
  }
  else {
    const details = data.data
    return (
      <div>
          <Welcome>
              <h1>Bonjour <span>{details.userInfos.firstName}</span></h1>   
              <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </Welcome>
          <UserStats> 
          <div>
              <Activity />
              <Analysis>
                 <Average />
              </Analysis>
            </div>
            <KeyData healthData={details.keyData} />
          </UserStats> 
      </div>
    )
  }
}