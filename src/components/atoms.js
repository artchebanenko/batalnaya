import styled from 'styled-components'

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Row = styled.div`
  display: flex;

  @media screen and (max-width:768px) {
    flex-direction: column;
  }
`

export const Card = styled.div`
  flex: 1;
  padding: ${({ noPadding }) => !noPadding && '30px'};
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => `var(--${backgroundColor || 'white'})`};
  border-radius: 30px;
  overflow: hidden;
  
  .gatsby-image-wrapper-constrained {
    display: block;
    /* border-radius: 30px; */
  }
`

export const Spacer = styled.div`
  width: ${({ w, xw}) => w ? w : xw ? xw * 16 : 16}px;
  height: ${({ h, xh }) => h ? h : xh ? xh * 16 : 16}px;
`