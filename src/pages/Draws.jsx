import { useState } from "react";
import WinnersCampaign from "../ui/Campaigns/Draws/WinnersCampaign";
import LiveDraws from "../ui/Campaigns/Draws/LiveDraws";
import SetActiveTab from "../components/Draw/SetActiveTab";

import {winners, upcoming} from '../../db.json'

function Draws() {
  const [activeTab, setActiveTab] = useState("winners"); // winners | upcoming
  return (
    <div className='min-h-[100vh] space-y-5 overflow-y-scroll scrollbar-hide'>
      <h1 className='text-4xl text-rowdies'>Live Draws</h1>
      <LiveDraws />

      <SetActiveTab activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "winners" && (
        <>
          {winners.map(winner => (
            <WinnersCampaign type="winners" winner={winner} key={winner.ticketNumber}/>
          ))}
        </>
      )}
      {activeTab === "upcoming" && (
        <>
          {
            upcoming?.map((upcoming) => (
              <WinnersCampaign type='upcoming' winner={upcoming} key={upcoming.ticketNumber}/>
            ))
          }
        </>
      )}
    </div>
  );
}

export default Draws;
