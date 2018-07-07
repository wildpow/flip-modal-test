import styled from 'styled-components';

export const Blue = '#1565c0';
export const Red = '#eb1c24';
export const Border = '1px solid #eee';
export const RedBorderBottom = '4px solid #eb1c24';
export const TextShadow = '2px 2px 4px rgba(0, 0, 0, 0.2)';
export const BoxShadow = '0 10px 6px -6px rgba(119, 119, 119, .6)';
export const MainFont1 = `'Roboto', sans-serif`;
export const MainFont2 = `'Open Sans', sans-serif`;
export const Animation = `animation-duration: .5s; animation-fill-mode: both;`;



export const CardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 320px;
`;

export const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.5s ease;
`;

export const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #ffc728;
  color: #333;
  text-align: center;
  font-family: 'zilla slab', sans-serif;
  border-radius: 20px;
  font-size: 18px;
`;

export const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: green;
  color: #333;
  transform: rotateY(180deg);
  text-align: center;
  font-family: 'zilla slab', sans-serif;
  border-radius: 20px;
  font-size: 18px;
`;


export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  font-family: ${MainFont1};
  background: ${Blue};
  /* border-top-right-radius: 10px;
  border-top-left-radius: 10px; */
  color: white;
  & h3 {
    padding: 15px 15px 15px 15px;
    font-size: 1.2rem;
    letter-spacing: .2rem;
    margin: 0;
    text-shadow: ${TextShadow};
    @media (min-width: 768px) and (min-height:823px) and (orientation: portrait) {
    font-size: 1.7rem;
    letter-spacing: .3rem;
    padding-left: 25px;
    }
    @media (min-width: 1024px) {
      font-size: 1.7rem;
      letter-spacing: .3rem;
      padding-left: 25px;
    }
  }
  & button {
    position: absolute;
    overflow: hidden;
    border: 0;
    color: white;
    outline: none;
    background-color: ${Blue};
    top: 0.1rem;
    right: 0.3rem;
    padding: 0.3rem;
    font-size: 2.2em;
    height: 1em;
    width: 1.3em;
    text-indent: 10em;
    cursor: pointer;
    transition: all ease 0.3s;
    @media (min-width: 768px) and (min-height:823px) and (orientation: portrait) {
      font-size: 2.8rem;
    }
    @media (min-width: 1024px) {
      font-size: 2.8rem;
    }
    &:hover {
      color: ${Red};
    }
    &::after {
      position: absolute;
      line-height: 0.5;
      top: 0.45em;
      left: 0.5em;
      text-indent: 0;
      content: "\00D7"; 
      @media (min-width: 768px) and (min-height:823px) and (orientation: portrait) {
        top: 0.35em;
        left: 0.45em;
      }
      @media (min-width: 1024px) {
        top: 0.35em;
        left: 0.45em;
      }
    }
    
`;