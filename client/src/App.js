import './App.css';
import NavbarComponent from './components/navbar/NavbarComponent';
import SocialComponent from './components/social/SocialComponent';
import Content from './components/content/Content.js';
import Footer from './components/footer/FooterComponent.js';

function App() {
  return (
    <>
      <SocialComponent></SocialComponent>
      <NavbarComponent></NavbarComponent>
      <Content></Content>
      <Footer></Footer>
    </>
  );
}

export default App;
