import { tabInfo } from "../assets/constants/constants"
import BannerContent from "./banner/BannerContent"

const MainContent = ({selectedTab})=>{
    const getSelectedTabComponent = (tab)=>{
        let Component = tabInfo[tab].component
        return <Component />
    }

    const getBannerData = (tab)=>{
        let background_image = tabInfo[tab]["background_image"]
        return {'background_image': background_image}
    }

    return(
        <>
        <BannerContent data={getBannerData(selectedTab)}>
        </BannerContent>
        <div className="selectedTabContent">
            {getSelectedTabComponent(selectedTab)}
        </div>
        </>
    )
}

export default MainContent