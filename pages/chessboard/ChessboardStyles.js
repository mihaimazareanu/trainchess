import styled from "styled-components";

export const ChessboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 350px;
  height: 350px;
  margin:0 auto;

  & > div {
    box-sizing: border-box;
    border: none;
  }
`;

export const Square = styled.div`
    width: ${props => props.squareSize}px;
    height: ${props => props.squareSize}px;
    background-color: ${props => props.isWhiteSquare ? '#00ccff' : '#0099ff'};
    color: ${props => props.isStartSquare ? 'yellow' : props.isKnightMove ? 'white' : 'black'};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
`;