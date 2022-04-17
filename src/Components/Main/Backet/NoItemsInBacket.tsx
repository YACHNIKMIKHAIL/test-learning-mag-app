import React from 'react';
import styled from "styled-components";

const NoItemsInBacket = () => {
    return (
        <NoItemsInBacketCase>
            No items in backet...
        </NoItemsInBacketCase>
    );
};

export default NoItemsInBacket;

export const NoItemsInBacketCase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Rubik Moonrocks', cursive;
  font-size: 40px;
  margin: 30px 0;
  background-color: rgba(115, 77, 230, 0.51);
  padding: 20px;
  border-radius: 10px;
`