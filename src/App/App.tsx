import React from 'react';
import styled from 'styled-components';
import '../App.css';
import img from '../Images/wallpaperflare.com_wallpaper.jpg';
import Header from "../Components/Header/Header";
import Main from "../Components/Main/Main";


export type ItemType = {
  "id": string
  "photo": string
  "name": string
  "description": string
  "price": number
}

function App() {

  return (
      <AppCase>
        <Header/>
        <Main/>
      </AppCase>
  );
}

export default App;

const AppCase = styled.div`
  background: url(${img}) no-repeat center/cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: white;
`