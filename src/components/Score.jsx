import { useParams } from 'react-router'
import { useFetch } from '../utils/hooks/FetchData'
import styled from 'styled-components'
import colors from '../utils/style/colors'
import MiniLoadingIcon from '../utils/Loaders/MiniLoadingIcon'

// import Rechart items
import {
  ResponsiveContainer,
    PieChart,
    Pie, 
    Cell 
} from "recharts";

/**
 * CSS for the component using styled.components
 */
 const Wrapper = styled.article`
 position: relative;
  align-items: center;
  justify-content: center;
  background: ${colors.backgroundLight};
  height: 225px;
  width: 100%;
  border-radius: 5px;
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

const ErrorMsg = styled.p `
  color: ${colors.secondary};
  padding: 10px;
`;

const ScoreTitle = styled.h2`
  font-size: clamp(1rem, 1.2vw, 1.125rem);
  color: ${colors.H2HeadingText};
  margin: unset;
  position: absolute;
  top: 0px;
  left: 15px; 
`;

const ScoreSummary = styled.div`
  position: absolute;
`;

const ScorePercentage = styled.p`
color: ${colors.NumberText};
font-size: clamp(1.125rem,2vw, 2rem);
font-weight: 700;
text-align: center;
margin: 0px 0px 0px 0px;
`;

const ScoreText = styled.p`
color: ${colors.SecondaryText};
font-size: clamp(0.75rem, 1vw, 1.125rem);
font-weight: 500;
text-align: center;
line-height: 20px;
margin: 0px 0px 0px 0px;
`;

/**
 * Fetch() the user's data for their Score
 * Displays it on a PieChartWithPaddingAngle
 * @function Score
 * @returns {JSX} 
 */
 const Score = () => {
  // Get ID from URL param
  const { id } = useParams()

    const mockScoreData = `../${id}.json`
      // const score = `http://localhost:3000/user/${id}/`

    // Fetch the data using HOOK useFetch
    // @returns @param {object} data, {boolean} isLoading and {boolean} error
    const { data, isLoading, error } = useFetch(mockScoreData)

    if (error) {
      return (
        <Wrapper>
          <ErrorMsg>Aucune donnée n'a été trouvée</ErrorMsg>
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
      const score = data.data.todayScore
      const scoreData = [ { value: score }, {value: 1 - score } ]

      const COLORS = ['#FF0000', 'transparent']

    // Display Radar chart using RECHARTS
    return (
      <Wrapper>
          <ScoreTitle>Score</ScoreTitle>
          <ScoreSummary>
            <ScorePercentage>{100 * score}%</ScorePercentage>
            <ScoreText>de votre <br />objectif </ScoreText>
          </ScoreSummary>
        <ResponsiveContainer width="100%" height="100%"> 
        <PieChart width={700} height={350}>
            <Pie
              data={scoreData}
              innerRadius={70}
              outerRadius={85}
              dataKey='value'
              stroke='transparent'
              startAngle={90} 
              endAngle={360} >

              {scoreData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} cornerRadius={50} />
              ))}
            </Pie>
          </PieChart>
         </ResponsiveContainer> 
      </Wrapper>   
    )
  }
}

export default Score