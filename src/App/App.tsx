import React from 'react';
import styled from 'styled-components';
import '../App.css';
import img from '../Images/wallpaperflare.com_wallpaper.jpg';
import Main from "../Components/Main/Main";
import MuiHeader from "../Components/Header/MuiHeader";

function App() {
    return (
        <AppCase>
            <MuiHeader/>
            <Main/>
        </AppCase>
    );
}

export default App;

export const AppCase = styled.div`
  background: url(${img}) no-repeat center/cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: white;
`