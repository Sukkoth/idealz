import PropTypes from "prop-types";
import { Container, TopMenuButton } from "../../ui/TopMenuBar";

function SetActiveTab({ activeTab, setActiveTab }) {
  function handleTabChange(tabName) {
    setActiveTab(tabName);
  }
  return (
    <Container>
      <TopMenuButton
        name='tickets'
        active={activeTab === "tickets"}
        handleClick={handleTabChange}
      >
        Tickets
      </TopMenuButton>
      <TopMenuButton
        name='messages'
        active={activeTab === "messages"}
        handleClick={handleTabChange}
      >
        Messages
      </TopMenuButton>
    </Container>
  );
}

SetActiveTab.propTypes = {
  activeTab: PropTypes.oneOf(["tickets", "messages"]).isRequired,
  setActiveTab: PropTypes.func,
};

export default SetActiveTab;
