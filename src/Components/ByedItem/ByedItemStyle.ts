import styled from "styled-components";

export const ByedItemCase = styled.div`
  min-height: 100px;
  width: 90%;
  display: flex;
  border-radius: 20px;
  background-color: rgba(115, 77, 230, 0.51);
  margin: 20px 0;
  border: 2px hotpink solid;
`
export const ImageCase = styled.div<{ url: string }>`
  width: 20%;
  display: flex;
  border-radius: 20px 0 0 20px;
  //background: url("https://www.hubspot.com/hubfs/FakeIG-FI.jpg") no-repeat center/cover;
  background: url(${props=>props.url}) no-repeat center/cover;
`
export const TextCase = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const TCase = styled.div`
  margin: 5px 20px;
  font-size: large;
  background-color: rgba(115, 77, 230, 0.75);
  padding: 5px;
  border-radius: 5px;
`
export const TxCase = styled.div`
  margin: 5px 20px;
  font-size: small;
  max-width: 90%;
  max-height: 50px;
  overflow: auto;
  background-color: rgba(115, 77, 230, 0.75);
  padding: 5px;
  border-radius: 5px;
`
export const TBCase = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`