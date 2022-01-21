import { useParams } from 'react-router'
import PropTypes from 'prop-types'
import { useFetch } from '../utils/hooks/FetchData'
import styled from 'styled-components'
import colors from '../utils/style/colors'
import MiniLoadingIcon from '../utils/Loaders/MiniLoadingIcon'

// import Rechart items
import { 
  Radar, 
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer 
} from 'recharts';

/**
 * CSS for the component using styled.components
 */
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.backgroundLight};
  color: ${colors.secondary};
  height: 225px;
  width: 32%;
  max-width: 258px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px 0px #00000005;
  p {
    padding: 10px;
  }
    @media screen and (min-width: 1025px) {
      height: 263px;
      }  
    @media screen and (min-width: 1440px) {
      height: 325px;
      max-width: 325px;
      } 
`;

const PerformanceWrapper = styled.article`
  height: 225px;
  width: 100%;
  border-radius: 5px;
  background: ${colors.quaternary};
  box-shadow: 0px 2px 4px 0px #00000005;
    @media screen and (min-width: 600px) {
      width: 32%;
      max-width: 258px;
      } 
    // @media screen and (min-width: 1025px) {
    //   height: 263px;
    //   }    
    @media screen and (min-width: 1440px) {
      height: 325px;
      max-width: 325px;
      } 
`;

/**
 * Format the labels on the radar axis from number to words
 * @function TranformKind
 * @param {number} tickItem
 * @returns {string} formatKind
 */
  function TranformKind(tickItem) {
    let formatKind = ''
    const Kind = [ 'Intensité', 'Vitesse', 'Force', 'Endurance', 'Energie', 'Cardio']

    if (tickItem) {
      formatKind = Kind[tickItem-1]
    }
    return formatKind
  }

/**
 * Fetch() the user's data for their Performance
 * Displays it on a Radar chart
 * @function Performance
 * @returns {JSX} Performance Radar chart
 */
export default function Performance() {
  // Get ID from URL param
  const { id } = useParams()

    const mockPerformanceData = `../${id}/performance.json`
      // const performance = `http://localhost:3000/user/${id}/performance`

    // Fetch the data using HOOK useFetch
    // @returns @param {object} data, {boolean} isLoading and {boolean} error
    const { data, isLoading, error } = useFetch(mockPerformanceData)

    if (error) {
      return (
        <Wrapper>
          <p>Aucune donnée n'a été trouvée</p>
        </Wrapper>
        )
    }
    if (isLoading) {
      return (
        <Wrapper>
          <MiniLoadingIcon />
        </Wrapper>
      )
    }
    else {
      const performance = data.data
    // Display Radar chart using RECHARTS
    return (
      <PerformanceWrapper>
        <ResponsiveContainer width="100%" height="100%"> 

            <RadarChart 
              cx="50%" cy="50%" 
              outerRadius="60%" 
              data={performance.data}>

            <PolarGrid radialLines={false}/>

            <PolarAngleAxis 
            dataKey="kind" 
            tickFormatter={TranformKind} 
            stroke= {`${colors.tertiary}`}
            dy={4}
            tickLine={false}
              style={{ 
              fontSize: '12px', 
              fontWeight: '500',}} />

            <Radar 
              name="Mike" 
              dataKey="value" 
              fill={`${colors.primary}`} 
              fillOpacity={0.7} />
            </RadarChart>

         </ResponsiveContainer> 
      </PerformanceWrapper>   
    )
  }
}

//  Prototypes

TranformKind.propTypes = {
  tickItem: PropTypes.number.isRequired,
}