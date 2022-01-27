import { useParams } from "react-router";
import styled from "styled-components";
import { useFetch } from "../utils/Service/FetchData";
// import components
import Error from "./Error";
import MiniLoadingIcon from "../utils/Loaders/MiniLoadingIcon";
import SideNav from "../components/SideNav";
import Title from "../components/Title";
import Activity from "../components/Activity";
import KeyData from "../components/KeyData";
import Average from "../components/Average";
import Performance from "../components/Performance";
import Score from "../components/Score";

/**
 * CSS for component using styled.components
 */
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const DashBoardWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: clamp(3.5rem, 8vw, 7.5rem) 1fr;
  }
`;

const InfoWrapper = styled.main`
  padding: clamp(0.625rem, 1.5vw, 4.5rem);
  min-height: 100vh;
`;

const UserStats = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

const Stats = styled.div`
  @media screen and (min-width: 1024px) {
    width: 75%;
  }
`;

const KeyDataWrapper = styled.aside`
  margin-bottom: 20px;
  @media screen and (min-width: 1024px) {
    width: 25%;
    margin-bottom: 0px;
  }
`;

const Analysis = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0px;
  gap: 15px;
  @media screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 70px;
  }
`;

/**
 * Renders the Dashboard of a user with all their stats
 * @function DashBoard
 * @returns {JSX}
 */
const DashBoard = () => {
  // Get ID from URL param
  const { id } = useParams();

  // Fetch the data using (custom hook) useFetch
  // @returns @param {object} data, {boolean} isLoading and {boolean} error
  const { data, isLoading, error } = useFetch(id, "usersGeneralInfo");

  if (error) {
    return <Error />;
  }
  if (isLoading) {
    return (
      <LoaderWrapper>
        <MiniLoadingIcon />
      </LoaderWrapper>
    );
  } else {
    const details = data.data;
    return (
      <DashBoardWrapper>
        <SideNav />

        <InfoWrapper>
          <Title
            intro={"Bonjour"}
            highlightedText={details.userInfos.firstName}
            text={"Félicitations ! Vous avez explosé vos objectifs hier 👏"}
          />

          <UserStats>
            <Stats>
              <Activity />
              <Analysis>
                <Average />
                <Performance />
                <Score scoreData={details.todayScore || details.score} />
              </Analysis>
            </Stats>

            <KeyDataWrapper>
              <KeyData healthData={details.keyData} />
            </KeyDataWrapper>
          </UserStats>
        </InfoWrapper>
      </DashBoardWrapper>
    );
  }
};

export default DashBoard;
