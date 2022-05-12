import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #ffffff;
    --black: #333333;
    --gray: #999999;
    --light-gray: #eeeeee;
    --red: #ff9585;
    --pink: #febeb5;
    --blue: #a9d6ff;
    --lavender: #e3e3fa;
    --orange: #ffc895;
    --yellow: #fff283;
    --link: #aaaaee;
  }

  html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }

  body {
    background-color: #f7f7f7;
  }

  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
  }

  .content {
    flex: 1 0 auto;
  }

  footer {
    flex-shrink: 0;
  }

  a {
    color: var(--black);
    text-decoration: none;
    &.text {
      color: var(--link);
    }
  }
`

export default GlobalStyle