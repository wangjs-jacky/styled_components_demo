import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

export const GlobalComponent = () => {
  return (
    <div>
      <p>8.全局样式GlobalStyle：</p>
      <Wrapper>
        <GlobalStyle />
        <Thing>
          I'm blue, da ba dee da ba daa
        </Thing>
      </Wrapper>
    </div>
  )
}

// 提供全局变量，以及 && 可以提升优先级
const Thing = styled.div`
   & {
     color: blue;
   }
 `

// 相当于代替了 App.css 的功能。
const GlobalStyle = createGlobalStyle`
  body{
   background: #eee;
   padding-left: 20px;
   padding-bottom: 50px;
  }
   
  div${Thing} {
    color: red;
  }
 `


const Wrapper = styled.section`
  padding: 2em;
  background: papayawhip;
`;