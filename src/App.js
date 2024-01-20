import React from 'react';
import Topbar from './Components/Topbar';
import ThreeScene from './Components/3DComponent';
import Title from './Components/Title';
import AboutComponent from './Components/AboutComponent';
import Projects from './Components/Projects';
import ContactComponent from './Components/ContactComponent';

function App() {
  return (
    <div className="body">
      <Topbar></Topbar>
      <div className="container">
        <div className="titleBody">
          <img src="./IMG_20211218_100019.jpg" />
          <Title></Title>
        </div>
        <AboutComponent></AboutComponent>
        <Projects></Projects>
      </div>
      <ContactComponent></ContactComponent>
    </div>
  );
}
export default App;
