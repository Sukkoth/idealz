import { useState } from "react";
import WinnersCampaign from "../ui/Campaigns/Draws/WinnersCampaign";
import LiveDraws from "../ui/Campaigns/Draws/LiveDraws";
import SetActiveTab from "../components/Draw/SetActiveTab";
function Draws() {
  const [activeTab, setActiveTab] = useState("winners"); // winners | upcoming
  return (
    <div className='min-h-[100vh] space-y-5 overflow-y-scroll scrollbar-hide'>
      <h1 className='text-4xl text-rowdies'>Live Draws</h1>
      <LiveDraws />

      <SetActiveTab activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "winners" && (
        <>
          <WinnersCampaign type='winners' topSticker />
          <WinnersCampaign type='winners' />
        </>
      )}
      {activeTab === "upcoming" && (
        <>
          <WinnersCampaign type='upcoming' />
          <WinnersCampaign type='upcoming' />
        </>
      )}
    </div>
  );
}

export default Draws;
