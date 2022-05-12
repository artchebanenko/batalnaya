

## ESLint

### Manual

$ touch .eslintrc.js

.eslintrs.js
```
module.exports = {
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'rules': {
    'semi': ['error', 'never'],
    'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['error', 2],
  },
}
```

.vscode/settings.json
```
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```


## Raphael

pages/building.js
```
import React, { useRef, useState, useEffect } from 'react'
import { navigate } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Paper, Path } from 'react-raphael'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { H1 } from '../components/typography'
// import fasad from '../images/batalnaya-fasad.jpg'

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`

// const StyledImg = styled.img`
//   width: 600px;
//   max-width: 100%;
// `

const FloorPath = ({ d, floor }) => {
  const [hovered, setHovered] = useState(false)
  const handleClick = () => {
    if(hovered) {
      navigate(
        `/floor/${floor}/`,
        {
          state: {
            floor,
          },
        },
      )
    } else {
      setHovered(true)
    }
  }

  return (
    <Path
      d={d}
      attr={{
        'fill': '#ffc895',
        'fill-opacity': hovered ? 0.5 : 0,
        'stroke': '#ffc895',
        'stroke-opacity': hovered ? 1 : 0,
        'cursor': 'pointer',
      }}
      mouseover={() => setHovered(true)}
      mouseout={() => setHovered(false)}
      mousedown={handleClick}
    />
  )
}

const BuildingPage = () => {
  const ref = useRef(null)
  const [paperWidth, setPaperWidth] = useState(600)
  const [paperHeight, setPaperHeight] = useState(571)
  const [x, setX] = useState(1)
  
  useEffect(() => {
    if(ref.current.offsetWidth !== 0 && ref.current.offsetWidth < 600) {
      setPaperWidth(ref.current.offsetWidth)
      setPaperHeight(ref.current.offsetHeight)
      setX(ref.current.offsetWidth / 600)
    }
  }, [ref])

  const d8 = `M${56*x} ${113*x} L${555.5*x} ${113*x} L${555.5*x} ${168*x} L${56*x} ${168*x} Z`
  const d7 = `M${56*x} ${168*x} L${555.5*x} ${168*x} L${555.5*x} ${223*x} L${56*x} ${223*x} Z`
  const d6 = `M${56*x} ${223*x} L${555.5*x} ${223*x} L${555.5*x} ${278*x} L${56*x} ${278*x} Z`
  const d5 = `M${56*x} ${278*x} L${555.5*x} ${278*x} L${555.5*x} ${333*x} L${56*x} ${333*x} Z`
  const d4 = `M${56*x} ${333*x} L${555.5*x} ${333*x} L${555.5*x} ${388*x} L${56*x} ${388*x} Z`
  const d3 = `M${56*x} ${388*x} L${555.5*x} ${388*x} L${555.5*x} ${443*x} L${56*x} ${443*x} Z`
  const d2 = `M${56*x} ${443*x} L${555.5*x} ${443*x} L${555.5*x} ${498*x} L${56*x} ${498*x} Z`
  const d1 = `M${56*x} ${498*x} L${555.5*x} ${498*x} L${555.5*x} ${553*x} L${56*x} ${553*x} z`

  return (
    <Layout>
      <SEO title="Building" />
      <H1>Квартиры</H1>
      <Wrapper ref={ref}>
        <StaticImage
          src="../images/batalnaya-fasad.jpg"
          alt=""
          width={600}
          quality={95}
          objectFit="contain"
          objectPosition="top left"
          style={{ maxWidth: '100%' }}
        />
        {/* <StyledImg ref={ref} src={fasad} alt="" /> */}
        <Paper 
          width={paperWidth}
          height={paperHeight}
          container={{ 
            style: {
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          }
        >
          <FloorPath d={d8} floor={8} />
          <FloorPath d={d7} floor={7} />
          <FloorPath d={d6} floor={6} />
          <FloorPath d={d5} floor={5} />
          <FloorPath d={d4} floor={4} />
          <FloorPath d={d3} floor={3} />
          <FloorPath d={d2} floor={2} />
          <FloorPath d={d1} floor={1} />
        </Paper>
      </Wrapper>
    </Layout>
  )
}

export default BuildingPage
```



