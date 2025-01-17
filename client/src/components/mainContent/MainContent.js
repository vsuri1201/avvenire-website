import { tabInfo } from "../assets/constants/constants"

const MainContent = ({selectedTab})=>{

    return(
        <>
        <div className="selectedTabContent">
            {getSelectedTabComponent(selectedTab)}
        </div>
        </>
    )
}

export default MainContent