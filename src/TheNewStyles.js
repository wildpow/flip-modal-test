import styled, {css} from 'styled-components';

export const Card = styled.article`
  /* position: relative; */
  /* width: 100%;
  height: 100%; */
  /* min-height: 360px; */
  cursor: pointer;
  perspective: 1000px;
  transition: all .25s ease-in-out;
  &:focus,
  &:hover {
    box-shadow: 0 0 40 rgba(0,0,0,.15);
  }
  &.flipped {
    & > div:first-of-type { // frontside of the card
      transform: perspective(1000px) rotateY(-180deg);
    }

    & > div:last-of-type { // backside of the card
      transform: perspective(1000px) rotateY(0deg);
    }
  }
`;

const CardSide = css`
  position: fixed;
  top: 0;
  left: 0;
  /* width: 100%;
  height: 100%; */
  margin: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* width: 100%;
  height: 100%; */
  backface-visibility: hidden;
  transition: all .35s ease-in-out;
`

export const CardFront = styled.div`
  ${CardSide};
  background-color: blue;
  font-weight: bold;
  text-align: center;
`
export const CardBack = styled.div`
  ${CardSide};
  text-align: center;
  background-color: red;
  transform: rotateY(-180deg);
  
`

export const Container = styled.div`
margin-left: auto;
margin-right: auto;
padding-left: 5px;
padding-right: 5px;
@media (min-width: 768px) { width: 750px; padding-left: 10px; padding-right: 10px; }
@media (min-width: 992px) { width: 970px; padding-left: 5px; padding-right: 5px; }
@media (min-width: 1200px) { width: 1170px; }
@media (min-width: 1300px) { width: 1270px; }
@media (min-width: 1400px) { width: 1370px; }
`;