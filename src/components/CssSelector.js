//  
import styled from "styled-components"

export const CssSelector = () => {
  return (
    <div>
      <p>6.CSS 选择器在styled-components的应用</p>
      <Wrapper>
        <Thing>Hello world!</Thing>
        <Thing>How ya doing?</Thing>
        <Thing className="something">The sun is shining...</Thing>
        <div>Pretty nice day today.</div>
        <Thing>Don't you think?</Thing>
        <div className="something-else">
          <Thing>Splendid(此Thing在div中)</Thing>
        </div>
      </Wrapper>

    </div>
  )
}


const Thing = styled.div`
  &{
    color: blue;
  }    

  &:hover {
    color: red; 
  }
  
  // Thing 元素后所有的 Thing 元素
  & ~ & {
    background: #888;
  }

  // Thing 元素后的第1个 Thing 元素
  // (element1 + element2 ：选择紧跟 element1 后的第1个 element2)
  // (element1 + element1 ：除最后一个element1)
  & + & {
    background: green; 
  }

  // 不知道啊为啥选中最后1个？
  &:nth-child(1){
    // background: blue;
  }

  // 类名和Thing 同一级时：
  &.something {
    background: orange; 
  }

  // 类名和Thing 不同级时
  .something-else & {
    border: 2px solid #000; 
  }
`

const Wrapper = styled.section`
  padding: 2em;
  background: papayawhip;
`;