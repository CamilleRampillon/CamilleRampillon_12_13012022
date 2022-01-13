import { useParams } from 'react-router'
import { useFetch } from '../utils/hooks'
import styled from 'styled-components'
import colors from '../utils/style/colors'
import LoadingIcon from '../components/LoadingIcon'

// import Rechart items
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
  } from "recharts";

/**
 * CSS for component using styled.components
 */
 const ActivityChartWrapper = styled.div`
    background: ${colors.backgroundLight};
    margin-left: 150px;
    height: 335px;
    width: 45%;
    padding: 5px;
`;

const ActivityHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #74798C;
  font-size: 14px;
  font-weight: 500;
  
  h1 {
    color: black;
    font-size: 15px;
    font-weight: 500;
    margin-right:20px;
  }
`;

const ActivityLegend= styled.div`
  display: flex;
  align-items: center;
`;

const BulletOne = styled.span`
    font-size: 40px;
    font-weight: 500;
    color: ${colors.primary};
    margin-bottom: 8px;
    margin-left: 15px;
    margin-right: 5px;
`;

const BulletTwo = styled.span`
    font-size: 40px;
    font-weight: 500;
    color: ${colors.secondary};
    margin-bottom: 8px;
    margin-left: 15px;
    margin-right: 5px;
`;

const ToolTipLabel = styled.div`
    color: ${colors.tertiary};
    background: ${colors.primary}; 
    font-size: 7px;
    font-weight: 500;
    padding: 5px;
`;

/**
 * Format date on X axis from yyyy-mm-dd to dd/mm
 * @function TranformDate
 * @param {string} tickItem 
 * @returns {string} formattedDate
 */
 function TranformDate(tickItem) {
  let formattedDate = ''

  if (tickItem) {
    let parts = tickItem.split('-')
    formattedDate = `${parts[1]}/${parts[2]}`
  }
  return formattedDate
}

/**
 * Displays the tooltip (kg/kCal) information when user hovers on barchart
 * @function CustomTooltip
 * @param {boolean} active: inital value false / becomes true when hover on barchart
 * @param {array} payload: contains data to be displayed on hover
 * @returns {JSX}
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <ToolTipLabel>
        <p>{`${payload[0].value} kCal` }</p>
        <p>{`${payload[1].value} Kg`}</p>
      </ToolTipLabel>
    )
  }
  return null;
}

/**
 * Fetch() the user's data for their Activities
 * Display it in a BarChart with Weight & Calories burned
 * @function Activity
 * @returns {JSX} Activity Bar chart
 */
export default function Activity() {
  // Get ID from URL param
    const  userId  = useParams().id

    const mockActivityData = `../${userId}/activity.json`

    // const activity =`http://localhost:3000/user/${userId}/activity`

    // Fetch the data using HOOK useFetch
    // @returns @param {object} data, {boolean} isLoading and {boolean} error
    const { data, isLoading, error } = useFetch(mockActivityData)
    if (error) {
      return <span>Il y a un problème</span>
    }

    if (isLoading) {
        return (
          <LoadingIcon />
        )
    }
    else {
      const sessions = data.data.sessions
    // Display Activity chart using RECHARTS
    return (
      <ActivityChartWrapper>
        <ActivityHeading>
          <h1>Activité quotidienne</h1>
            <ActivityLegend> 
              <BulletTwo>•</BulletTwo>	Poids (Kg) 
              <BulletOne>•</BulletOne> Calories brûlées (kCal)
            </ActivityLegend>
        </ActivityHeading>

        <ResponsiveContainer width="100%" height={300}>
            <BarChart      
              data={sessions}
              margin={{
                top: 20,
                right: 0,
                left: 0,
                bottom: 30,
              }}
              barGap={5}>

              <XAxis 
                dataKey='day'
                tickFormatter={TranformDate}
                stroke= {`${colors.barChartText}`}
                tickLine={false} />

              <YAxis
                yAxisId='poids'
                stroke={`${colors.barChartText}`}
                orientation='right'
                axisLine={false}
                tickLine={false}
                domain={['dataMin -3', 'dataMax + 3']}  />

              <YAxis
                yAxisId='calories'
                tick={false}
                orientation='left'
                axisLine={false}
                tickLine={false}
                domain={['dataMin -10', 'dataMax + 10']} />

              <Tooltip
                content={<CustomTooltip />}
                cursor={{fill: `${colors.barChartToolTip}`}} />

              <CartesianGrid 
                stroke={`${colors.barChartGridStroke}`}
                vertical={false} />

              <Bar
                yAxisId='calories'
                name='kCal'
                dataKey='calories'
                fill={`${colors.secondary}`}
                barSize={8}
                radius={[50, 50, 0, 0]} />

              <Bar
                yAxisId='poids'
                name='kg'
                dataKey='kilogram'
                fill={`${colors.primary}`}
                barSize={8}
                radius={[50, 50, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
      </ActivityChartWrapper>  
      )
    }
  }