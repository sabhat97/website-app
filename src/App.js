import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';

function App() {
  return (
  <div style={{height: '300px', position: 'relative'}}>
    <Layout style={{background: 'url(https://codersera.com/blog/wp-content/uploads/2019/07/BLOG-23-L-3.jpg) center / cover', height: '100vh', width: '100vw'}}>
        <Header transparent title="Sandesh Bhat" style={{color: 'white'}}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Sandesh Bhat" style={{color: 'white', background: '#37665E'}}>
            <Navigation>
                <Link style= {{color: 'white'}} to="/resume">Resume</Link>
                <Link style= {{color: 'white'}} to="/projects">Projects</Link>
                <Link style= {{color: 'white'}} to="/aboutme">About Me</Link>
                <Link style= {{color: 'white'}} to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
          <Main />
        </Content>
    </Layout>
  </div>
  );
}
export default App;
