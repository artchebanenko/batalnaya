import styled from 'styled-components'

export const H1 = styled.h1`
  color: ${({ color }) => color ? `var(--${color})` : undefined};
  text-align: ${({ center }) => center && 'center'};
`

export const H2 = styled.h2`
  color: ${({ color }) => color ? `var(--${color})` : undefined};
  text-align: ${({ center }) => center && 'center'};
`

export const H3 = styled.h3`
  color: ${({ color }) => color ? `var(--${color})` : undefined};
`

export const H4 = styled.h4`
  color: ${({ color }) => color ? `var(--${color})` : undefined};
`