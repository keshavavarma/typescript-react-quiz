import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
        font-family:"Catamaran",sans-serif;
    }
    html{
        height:100vh;
    }
    body{
        background-color:lightgoldenrodyellow;
        margin:0;
        padding: 0 20px;
        display:flex;
        justify-content:center;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 20rem;

  h1 {
    font-family: Fascinate Inline, Haettenschweiler, "Arial Narrow Bold",
      sans-serif;
  }
  .score {
    margin: 0;
    font-size: 2rem;
  }
  .next,
  .start {
    color: white;
    padding: 1em;
    border: none;
    border-radius: 1rem;
    background-color: tomato;
    width: 100%;
    cursor: pointer;
  }
  .next {
    margin-top: 1rem;
  }
`;
