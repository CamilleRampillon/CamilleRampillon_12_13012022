import { useParams } from "react-router";
import PropTypes from "prop-types";
import { useFetch } from "../utils/Service/FetchData";
import styled from "styled-components";
import colors from "../utils/style/colors";
import MiniLoadingIcon from "../utils/Loaders/MiniLoadingIcon";

// import a function to have the correct format for the date
import { TranformDay } from "../utils/HelperFunctions/Formatters";

// import Rechart items
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/**
 * CSS for the component using styled.components
 */
const Wrapper = styled.article`
  align-items: center;
  background: ${colors.primary};
  border-radius: 0.313rem;
  box-shadow: 0rem 0.125rem 0.25rem 0rem #00000005;
  display: flex;
  height: 14.063rem;
  justify-content: center;
  position: relative;
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

const AverageHeading = styled.h2`
  color: ${colors.tertiary};
  font-size: clamp(1rem, 1.2vw, 1.125rem);
  font-weight: 500;
  left: 0.938rem;
  opacity: 0.5;
  position: absolute;
  top: 0rem;
  width: 10.625rem;
`;

const ToolTipLabel = styled.div`
  background: ${colors.tertiary};
  color: ${colors.secondary};
  font-size: 0.438rem;
  font-weight: 500;
  height: 1.25rem;
  line-height: 0.25rem;
  padding: 0.125rem;
  width: 1.563rem;
`;

/**
 * * Renders the tooltip (minutes) information when user hovers on the line chart
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
    );
  }
  return null;
};

/**
 * Renders Average Sessions Line Chart
 * @function Average
 * @returns {JSX}
 */
const Average = () => {
  // Get ID from URL param
  const { id } = useParams();

  // Fetch the data using (custom hook) useFetch
  // @returns @param {object} data, {boolean} isLoading and {boolean} error
  const { data, isLoading, error } = useFetch(id, "average");
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
    const sessions = data.data.sessions;
    // Display Line chart (Recharts)
    return (
      <Wrapper>
        <AverageHeading>Durée moyenne des sessions</AverageHeading>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={sessions}
            margin={{
              top: 0,
              right: 8,
              left: -53,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="0"
              horizontal={false}
              vertical={false}
            />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickFormatter={TranformDay}
              stroke={`${colors.tertiary}`}
              style={{ fontSize: "12px", fontWeight: "500", opacity: "0.5" }}
            />
            <YAxis
              dataKey="sessionLength"
              axisLine={false}
              tickLine={false}
              // tick={false}
              domain={["dataMin -2", "dataMax + 20"]}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: `${colors.secondary}`,
                strokeOpacity: 0.1,
                strokeWidth: "45",
              }}
            />

            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke={`${colors.tertiary}`}
              strokeWidth={2}
              strokeOpacity={0.5}
              dot={false}
              activeDot={{ r: 3, strokeWidth: 9, strokeOpacity: 0.3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Wrapper>
    );
  }
};
export default Average;
//  Proptypes
CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
