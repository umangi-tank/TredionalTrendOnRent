import AHeader from "./AHeader";
import AHero_section from "./AHeroSection";
import AFooter from "./AFooter";
import RecentlyAdded from "./RecentlyAdded";
import OfferList from "./OfferList";


function AfterDashboardPage()
{
    return(
        <>
        <AHeader />
        <AHero_section />
        <RecentlyAdded />
        <OfferList />
        <AFooter />
        </>
    )
}
//call and export the function

export default AfterDashboardPage;