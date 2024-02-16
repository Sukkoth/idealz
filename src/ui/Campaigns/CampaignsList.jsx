import PropTypes from "prop-types";
import CampaignItem from "./CampaignItem";
import { products} from '../../../db.json'
import { isJustLaunched } from "../../utils/isJustLaunched";
import { isClosingTime } from "../../utils/isClosingTime";

function CampaignsList({ title = "Explore Campaigns" }) {
  return (
    <div>
      <h1 className='font-extrabold text-lg text-gray-900 mt-4 mb-5'>
        {title}
      </h1>
      <div className='space-y-6'>
        {/* <CampaignItem closingTimer />
        <CampaignItem />
        <CampaignItem topTag />
        <CampaignItem closingTimer topTag />
        <CampaignItem /> */}

        {
          products?.map((product) => (
              <CampaignItem key={product.id} 
              product={product} 
              closingTimer={isClosingTime(product.closingTime)} 
              topTag={isJustLaunched(product?.createdAt)}/>
          ))
        }
      </div>
    </div>
  );
}

CampaignsList.propTypes = {
  title: PropTypes.string,
};

export default CampaignsList;
