import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I'm Zachary Alexander, a software developer.</p>
      <p>Check out my <Link to="/about">about page</Link> to learn more about me, or see my <Link to="/projects">projects</Link>.</p>
    </div>
  );
};

export default Home;

