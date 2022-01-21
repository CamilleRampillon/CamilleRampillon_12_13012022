import { useParams } from 'react-router'
import PropTypes from 'prop-types'
import { useFetch } from '../utils/hooks/FetchData'
import styled from 'styled-components'
import colors from '../utils/style/colors'
import MiniLoadingIcon from '../utils/Loaders/MiniLoadingIcon'

// import Rechart items
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid,
  Tooltip, 
  ResponsiveContainer 
}  from 'recharts'

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

const AverageWrapper = styled.article`
  height: 225px;
  width: 100%;
  border-radius: 5px;
  background: ${colors.primary};
  box-shadow: 0px 2px 4px 0px #00000005;

  @media screen and (min-width: 600px) {
    width: 32%;
    max-width: 258px;
    }   

  @media screen and (min-width: 1440px) {
    height: 325px;
    max-width: 325px;
    }   
`;

const AverageHeading = styled.h2`
  color: ${colors.tertiary};
  opacity: 0.5;
  font-size: clamp(0.625rem, 1vw, 0.938rem);
  font-weight: 500;
  width: 150px;
  margin: 25px;
  position: absolute;
`;

const ToolTipLabel = styled.div`
  color: ${colors.secondary};
  background: ${colors.tertiary};
  font-size: 7px;
  font-weight: 500;
  line-height: 4px;
  padding: 2px;
  height: 20px;
  width: 25px;
`;

/**
 * Format day on Xaxis from number to letter
 * @function TranformDay
 * @param {number} tickItem
 * @returns {string} formattedDay
 */
  function TranformDay(tickItem) {
    let formattedDay = ''
    const Day = [ 'L', 'M', 'M', 'J', 'V', 'S', 'D']
    if (tickItem) {
      formattedDay = Day[tickItem-1]
    }
    return formattedDay
  }
/**
 * Displays the tooltip (minutes) information when user hovers on the line chart
 * @function CustomTooltip
 * @param {boolean} active: inital value false / becomes true when hover on linechart
 * @param {array} payload: contains data to be displayed on hover
 * @returns {JSX}
 */
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <ToolTipLabel>
          <p>{`${payload[0].value} mins`}</p>
        </ToolTipLabel>
      )
    }
    return null;
  }
  
/**
 * Fetch() the user's data for their Average Sessions
 * Display it on a Line Chart
 * @function Average
 * @returns {JSX} Average Sessions Line Chart
 */
export default function Average() {
  // Get ID from URL param
  const { id } = useParams()
    
    const mockAverageData = `../${id}/average-sessions.json`
    // const sessions = `http://localhost:3000/user/${id}/average-sessions`
  
    // Fetch the data using HOOK useFetch
    // @returns @param {object} data, {boolean} isLoading and {boolean} error
    const { data, isLoading, error } = useFetch(mockAverageData)
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
      const sessions = data.data.sessions
    // Display Line chart using RECHARTS
    return (
      <AverageWrapper>
        <AverageHeading>Durée moyenne des sessions</AverageHeading>
        <ResponsiveContainer width="100%" height="100%"> 
          <LineChart
            data={sessions}
            margin={{
              top: 0,
              right: 8,
              left: -53,
              bottom: 0,
            }} >
            <CartesianGrid
              strokeDasharray="0" 
              horizontal={false} 
              vertical={false} />
            <XAxis 
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickFormatter={TranformDay}
              stroke={`${colors.tertiary}`}
              style={{ fontSize: '12px', fontWeight: '500', opacity: '0.5',}} />
            <YAxis 
              dataKey="sessionLength"
              axisLine={false}
              tickLine={false}
              tick={false}  
              domain={['dataMin -2', 'dataMax + 20']}/>
            <Tooltip 
                content={<CustomTooltip />}
                cursor={{ 
                stroke: `${colors.secondary}`,
                strokeOpacity: 0.1, 
                strokeWidth: '45',}}/>
            
            <Line type="monotone" 
              dataKey="sessionLength" 
              stroke={`${colors.tertiary}`} 
              strokeWidth={2}
              strokeOpacity={0.5}
              dot={false}
              activeDot={{ r: 3, strokeWidth: 9, strokeOpacity: 0.3, }} />
          </LineChart>
        </ResponsiveContainer>
      </AverageWrapper>   
    )
  }
}
//  Proptypes
TranformDay.propTypes = {
  tickItem: PropTypes.number.isRequired,
}
CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}