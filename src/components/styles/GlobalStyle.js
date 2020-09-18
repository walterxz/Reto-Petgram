import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  button: {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    height: 100vh;
    margin: 0 auto;
    max-width: 500px;
    overscroll-behavior: none;
    width: 100%;
background: rgba(183,222,237,1);
background: -moz-linear-gradient(top, rgba(183,222,237,1) 0%, rgba(113,206,239,1) 25%, rgba(33,180,226,1) 50%, rgba(183,222,237,1) 100%);
background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(183,222,237,1)), color-stop(25%, rgba(113,206,239,1)), color-stop(50%, rgba(33,180,226,1)), color-stop(100%, rgba(183,222,237,1)));
background: -webkit-linear-gradient(top, rgba(183,222,237,1) 0%, rgba(113,206,239,1) 25%, rgba(33,180,226,1) 50%, rgba(183,222,237,1) 100%);
background: -o-linear-gradient(top, rgba(183,222,237,1) 0%, rgba(113,206,239,1) 25%, rgba(33,180,226,1) 50%, rgba(183,222,237,1) 100%);
background: -ms-linear-gradient(top, rgba(183,222,237,1) 0%, rgba(113,206,239,1) 25%, rgba(33,180,226,1) 50%, rgba(183,222,237,1) 100%);
background: linear-gradient(to bottom, rgba(183,222,237,1) 0%, rgba(113,206,239,1) 25%, rgba(33,180,226,1) 50%, rgba(183,222,237,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b7deed', endColorstr='#b7deed', GradientType=0 )
}
  
  #app {
    background: #fefefe;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px 8px 8px 8px;
  }
`;
