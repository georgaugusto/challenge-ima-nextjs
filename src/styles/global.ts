import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --whitesmoke: #F5F8FA;
    --grey: #657786;
    --greydark: #14171A;
    --red: #D64B45;
    --green: #79C300;
    --blue: #0047BB;
    --orange: #F06400;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--white);
    color: var(--grey);
    font-family: 'Nunito Sans', sans-serif;
    transition: all 0.50s ease-in-out;
  }

  body, input, button, textarea {
    font: 400 1rem "Nunito Sans", sans-serif;
  }

  button {
    cursor: pointer;
    display: inline-block;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *::-webkit-scrollbar, *::-webkit-scrollbar-thumb {
    width: 26px;
    border-radius: 13px;
    background-clip: padding-box transparent;
    border: 10px solid transparent;
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0 10px;
    background: transparent;
  }
`
