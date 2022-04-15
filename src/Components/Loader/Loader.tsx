import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import React from 'react';
import styled from "styled-components";

const Loader = () => {
    return <LoaderCase>
        <CircularProgress color="inherit" size={250} thickness={5} style={{color:'aqua'}}/>
    </LoaderCase>
};

export default Loader;

export const LoaderCase = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`