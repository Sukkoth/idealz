import PropTypes from "prop-types";
import SetActiveTab from "../components/Tickets/SetActiveTab";
import { useState } from "react";
import MessagesTab from "../components/Tickets/MessagesTab";
import TicketsTab from "../components/Tickets/TicketsTab";

function Tickets() {
  const [activeTab, setActiveTab] = useState("tickets");
  return (
    <div className='h-[90dvh]'>
      <h1 className='text-4xl text-rowdies'>Inbox</h1>
      <div className='mt-4'>
        <SetActiveTab activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      {activeTab === "tickets" ? <TicketsTab /> : <MessagesTab />}
    </div>
  );
}

Tickets.propTypes = {
  ticketCount: PropTypes.number,
};

export default Tickets;
