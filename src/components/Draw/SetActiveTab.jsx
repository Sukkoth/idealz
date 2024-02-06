import PropTypes from "prop-types";
import { Container, TopMenuButton } from "../../ui/TopMenuBar";

function SetActiveTab({ activeTab, setActiveTab }) {
  function handleTabChange(tabName) {
    setActiveTab(tabName);
  }
  return (
    <Container>
      <TopMenuButton
        name='winners'
        active={activeTab === "winners"}
        handleClick={handleTabChange}
      >
        Winners
      </TopMenuButton>
      <TopMenuButton
        name='upcoming'
        active={activeTab === "upcoming"}
        handleClick={handleTabChange}
      >
        Upcoming Draws
      </TopMenuButton>
    </Container>
  );
}

SetActiveTab.propTypes = {
  activeTab: PropTypes.oneOf(["winners", "tickets"]).isRequired,
  setActiveTab: PropTypes.func,
};

export default SetActiveTab;
