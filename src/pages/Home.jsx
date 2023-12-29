import BigBanner from "../ui/Banners/BigBanner";
import WideBanner from "../ui/Banners/WideBanner";
import CampaignsList from "../ui/Campaigns/CampaignsList";
import SmallCampaignsContainer from "../ui/Campaigns/SmallCampaignsContainer";

function Home() {
  return (
    <>
      <BigBanner />
      <SmallCampaignsContainer title={"Popular Campaigns"} />
      <WideBanner />
      <CampaignsList />
    </>
  );
}

export default Home;
