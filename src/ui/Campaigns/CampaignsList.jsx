import PropTypes from "prop-types";
import CampaignItem from "./CampaignItem";

function CampaignsList({ title = "Explore Campaigns" }) {
  return (
    <div>
      <h1 className='font-extrabold text-lg text-gray-900 mt-4 mb-5'>
        {title}
      </h1>
      <div className='space-y-6'>
        <CampaignItem closingTimer />
        <CampaignItem />
        <CampaignItem topTag />
        <CampaignItem closingTimer topTag />
        <CampaignItem />
      </div>
    </div>
  );
}

CampaignsList.propTypes = {
  title: PropTypes.string,
};

export default CampaignsList;
