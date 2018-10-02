import React, { Component } from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import { Button } from 'antd';
import { Carousel } from 'antd';
import { List, Card } from 'antd';


const { Header, Content, Footer } = Layout;

class App extends Component {
  
  
  render() {


    return (
    <div>
      <Layout> 
      <Header className="App-header">
        <Button className="App-buttonRegist" ghost>Register</Button>
        <Button className="App-buttonLogin" ghost>Sign In</Button>
      </Header>
      <Menu  theme="dark" mode="horizontal" style={{ lineHeight: '48px' }} align="right">
        <Menu.Item className="App-menu" key="1" ghost>About Us</Menu.Item>
        <Menu.Item className="App-menu" key="2" ghost>Contact</Menu.Item>
      </Menu> 
        <Carousel autoplay>
          <div>
            <h1>
              <List className="App-title">
                Title 1
              </List>
              <List className="App-detail">
              <p>(n.) sentences that decribe the title for making everyone knows what it's saying about.</p>
                if you want to know more about this news. click see more.
              </List>
            <Button className="App-button" ghost>See More</Button>
            </h1>
          </div>

          <div>
            <h2>
            <List className="App-title">
                Title 2
              </List>
              <List className="App-detail">
                <p>(n.) sentences that decribe the title for making everyone knows what it's saying about.</p>
                if you want to know more about this news. click see more.
              </List>
            <Button className="App-button" ghost>See More</Button>
            </h2>
          </div>

          <div>
            <h3>
            <List className="App-title">
                Title 3
              </List>
              <List className="App-detail">
                <p>(n.) sentences that decribe the title for making everyone knows what it's saying about.</p>
                if you want to know more about this news. click see more.
              </List>
            <Button className="App-button" ghost>See More</Button>
            </h3>
          </div>

          <div>
            <h4>
            <List className="App-title">
                Title 4
              </List>
              <List className="App-detail">
                <p>(n.) sentences that decribe the title for making everyone knows what it's saying about.</p>
                if you want to know more about this news. click see more.
              </List>
            <Button className="App-button" ghost>See More</Button>
            </h4>
          </div>
        </Carousel>,
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      
 
      </Layout>

    </div>
    );
  }
}

export default App;
