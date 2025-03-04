import './App.css';
import NavbarComponent from './components/navbar/NavbarComponent';
import SocialComponent from './components/social/SocialComponent';
import MainContent from './components/mainContent/MainContent.js';
import Footer from './components/footer/FooterComponent.js';
import { useState } from 'react';
import { default_tab } from './components/assets/constants/constants.js';

function App() {

  const [selectedTab, setSelectedTab] = useState(default_tab)
  
  const handleNavClick = (option) => {
    setSelectedTab(option);
  };

  return (
    <>
      <SocialComponent></SocialComponent>
      <NavbarComponent onTabSelect={handleNavClick}></NavbarComponent>
      <MainContent selectedTab = {selectedTab} setActiveContent = {setSelectedTab}></MainContent>
      <Footer></Footer>
    </>
  );
}

export default App;
