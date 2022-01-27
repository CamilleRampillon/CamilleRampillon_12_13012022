import { useParams } from "react-router";
import PropTypes from "prop-types";
import { useFetch } from "../utils/Service/FetchData";
import styled from "styled-components";
import colors from "../utils/style/colors";
import MiniLoadingIcon from "../utils/Loaders/MiniLoadingIcon";
// import a function to have the correct format for the date
import { TranformDate } from "../utils/HelperFunctions/Formatters";

// import Rechart items
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/**
 * CSS for component using styled.components
 */
const ActivityChartWrapper = styled.article`
  background: ${colors.backgroundLight};
  border-radius: 0.313rem;
  box-shadow: 0rem 0.125rem 0.25rem 0rem #00000005;
  height: 18.125rem;
`;

const Wrapper = styled(ActivityChartWrapper)`
  align-items: center;
  color: ${colors.secondary};
  display: flex;
  justify-content: center;
`;

const ActivityHeading = styled.div`
  align-items: center;
  display: flex;
  font-size: clamp(0.625rem, 0.972vw, 1rem);
  font-weight: 500;
  justify-content: space-between;
  h2 {
    color: ${colors.H2HeadingText};
    font-size: clamp(1rem, 1.2vw, 1.125rem);
    font-weight: 500;
    margin-left: 0.313rem;
    @media screen and (min-width: 375px) {
      margin-left: 2.188rem;
      margin-right: 2.188rem;
    }
  }
`;

const ActivityLegend = styled.div`
  align-items: center;
  color: ${colors.SecondaryText};
  display: flex;
  margin-right: 0.313rem;
  @media screen and (min-width: 375px) {
    margin-right: 2.188rem;
  }
`;

const BulletOne = styled.span`
  color: ${colors.primary};
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  margin-left: 0.938rem;
  margin-right: 0.313rem;
`;

const BulletTwo = styled.span`
  color: ${colors.NumberText};
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  margin-left: 0.938rem;
  margin-right: 0.313rem;
`;

const ToolTipLabel = styled.div`
  background: ${colors.primary};
  color: ${colors.tertiary};
  font-size: 0.438rem;
  font-weight: 500;
  margin: 0.313rem;
  padding: 0.313rem;
`;

/**
 * Renders the tooltip (kg/kCal) information when user hovers on barchart
 * @function CustomTooltip
 * @param {boolean} active: inital value false / becomes true when hover on barchart
 * @param {array} payload: contains data to be displayed on hover
 * @returns {JSX}
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <ToolTipLabel>
        <p>{`${payload[0].value} kCal`}</p>
        <p>{`${payload[1].value} Kg`}</p>
      </ToolTipLabel>
    );
  }
  return null;
};

/**
 * Renders Activities BarChart with Weight & Calories burned
 * @function Activity
 * @returns {JSX}
 */
const Activity = () => {
  // Get ID from URL param
  const { id } = useParams();

  // Fetch the data using (custom hook) useFetch
  // @returns @param {object} data, {boolean} isLoading and {boolean} error
  const { data, isLoading, error } = useFetch(id, "activity");

  if (error) {
    return <Wrapper>Aucune donnée n'a été trouvée</Wrapper>;
  }
  if (isLoading) {
    return (
      <Wrapper>
        <MiniLoadingIcon />
      </Wrapper>
    );
  } else {
    const sessions = data.data.sessions;
    // Display Activity chart using RECHARTS

    return (
      <ActivityChartWrapper>
        <ActivityHeading>
          <h2>Activité quotidienne</h2>
          <ActivityLegend>
            <BulletTwo>•</BulletTwo> Poids (Kg)
            <BulletOne>•</BulletOne> Calories brûlées (kCal)
          </ActivityLegend>
        </ActivityHeading>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 30,
            }}
            barGap={5}
            data={sessions}
          >
            <XAxis
              dataKey="day"
              tickFormatter={TranformDate}
              stroke={`${colors.barChartText}`}
              tickLine={false}
              style={{ fontSize: "14px" }}
            />

            <YAxis
              yAxisId="poids"
              stroke={`${colors.barChartText}`}
              orientation="right"
              axisLine={false}
              tickLine={false}
              tickCount="3"
              type="number"
              domain={["dataMin -3", "auto"]}
              style={{ fontSize: "14px" }}
            />

            <YAxis
              yAxisId="calories"
              tick={false}
              orientation="left"
              axisLine={false}
              tickLine={false}
              domain={["dataMin -10", "dataMax + 10"]}
            />

            <Tooltip
              dy={4}
              content={<CustomTooltip />}
              cursor={{ fill: `${colors.barChartToolTip}` }}
            />

            <CartesianGrid
              stroke={`${colors.barChartGridStroke}`}
              vertical={false}
            />

            <Bar
              yAxisId="calories"
              name="kCal"
              dataKey="calories"
              fill={`${colors.secondary}`}
              barSize={8}
              radius={[50, 50, 0, 0]}
            />

            <Bar
              yAxisId="poids"
              name="kg"
              dataKey="kilogram"
              fill={`${colors.primary}`}
              barSize={8}
              radius={[50, 50, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </ActivityChartWrapper>
    );
  }
};

export default Activity;

// Proptypes
CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
