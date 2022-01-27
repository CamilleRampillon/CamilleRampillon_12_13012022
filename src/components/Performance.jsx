import { useParams } from "react-router";
import { useFetch } from "../utils/Service/FetchData";
import styled from "styled-components";
import colors from "../utils/style/colors";
import MiniLoadingIcon from "../utils/Loaders/MiniLoadingIcon";
// import a function to have the correct format for the date
import { TranformKind } from "../utils/HelperFunctions/Formatters";

// import Rechart items
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

/**
 * CSS for the component using styled.components
 */
const Wrapper = styled.article`
  align-items: center;
  background: ${colors.quaternary};
  border-radius: 0.313rem;
  box-shadow: 0rem 0.125rem 0.25rem 0rem #00000005;
  display: flex;
  height: 14.063rem;
  justify-content: center;
  width: 100%;
  @media screen and (min-width: 600px) {
    max-width: 16.125rem;
    width: 32%;
  }
  @media screen and (min-width: 1440px) {
    height: 20.313rem;
    max-width: 20.313rem;
  }
`;

const ErrorMsg = styled.p`
  color: ${colors.tertiary};
  padding: 0.625rem;
`;

/**
 * Renders Performance Radar chart- SimpleRadarChart (Recharts)
 * @function Performance
 * @returns {JSX} Performance Radar chart
 */
const Performance = () => {
  // Get ID from URL param
  const { id } = useParams();

  // Fetch the data using (custom hook) useFetch
  // @returns @param {object} data, {boolean} isLoading and {boolean} error
  const { data, isLoading, error } = useFetch(id, "performance");

  if (error) {
    return (
      <Wrapper>
        <ErrorMsg>Aucune donnée n'a été trouvée</ErrorMsg>
      </Wrapper>
    );
  }
  if (isLoading) {
    return (
      <Wrapper>
        <MiniLoadingIcon isWhite={true} />
      </Wrapper>
    );
  } else {
    const performance = data.data.data;

    // reverse the order of the data so it displays correctly in the radar chart
    // current order : 'Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité'
    // wanted order : 'Intensité', 'Vitesse', 'Force', 'Endurance', 'Energie', 'Cardio'
    const reverseActivityOrder = [...performance].sort(
      (a, b) => b.kind - a.kind
    );

    // Display Radar chart (Recharts)
    return (
      <Wrapper>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="60%"
            data={reverseActivityOrder}
          >
            <PolarGrid radialLines={false} />

            <PolarAngleAxis
              dataKey="kind"
              tickFormatter={TranformKind}
              stroke={`${colors.tertiary}`}
              dy={4}
              tickLine={false}
              style={{
                fontSize: "12px",
                fontWeight: "500",
              }}
            />

            <Radar
              name="Mike"
              dataKey="value"
              fill={`${colors.primary}`}
              fillOpacity={0.7}
            />
          </RadarChart>
        </ResponsiveContainer>
      </Wrapper>
    );
  }
};

export default Performance;
