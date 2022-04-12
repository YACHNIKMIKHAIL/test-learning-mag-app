import styled from "styled-components";

export const ItemCase = styled.div`
  height: 65%;
  width: 350px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: rgba(115, 77, 230, 0.51);
  margin: 10px;
  border: 2px aqua solid;
`
export const ImageCase = styled.div<{ url: string }>`
  height: 50%;
  width: 100%;
  display: flex;
  border-radius: 20px 20px 0 0;
  background: url(${props => props.url}) no-repeat center/cover;
`
export const TextCase = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 0 0 20px 20px;
  margin: 20px;
`
export const TCase = styled.div`
  margin: 0 20px;
  font-size: xx-large;
`
export const TxCase = styled.div`
  margin: 0 20px;
  font-size: small;

`
export const TBCase = styled.div`
  margin: 0 20px;
  display: flex;
  justify-content: space-between;
`