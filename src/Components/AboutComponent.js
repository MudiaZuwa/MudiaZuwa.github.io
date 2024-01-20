import React from 'react';
import Programs from './Programs';
import ComputersCanvas from './3DComponent';

const AboutComponent = () => {
  return (
    <div id="about">
      <h2 className="headings">About</h2>
      <p>
        Hello! I am Osamudiamen E. Osazuwa, a web developer specializing in
        constructing frontend websites and web games. My focus lies in
        developing user-friendly web applications using the latest technologies
        and frameworks. Currently, I am enrolled in the study of geology at
        university, aligning my coding passion with a curiosity for the natural
        world and its phenomena.
        <br />
        <br />
        Beyond web development and geology, I engage in various hobbies that
        contribute to both my personal and professional life. Connecting with
        others broadens my perspective, researching new technologies helps me
        stay current, and playing games fuels my creativity and aids in
        improving user experiences. Embracing these diverse interests, including
        connecting, researching, and gaming, allows me to approach my work with
        a broader outlook and a deeper understanding. I am enthusiastic about
        contributing to projects that leverage technology to address real-world
        issues, enhance people's lives, and bring joy through entertaining
        experiences.
      </p>
      <div className="programsParent">
        <ComputersCanvas />
        <Programs></Programs>
      </div>
    </div>
  );
};

export default AboutComponent;
