//  组件接受 props + 继承Components
import styled from "styled-components"

export const UseProps = () => {
  return (
    <div>
      <p>2.Button组件可以自定义attr：</p>
      <Wrapper>
        <Button primary>Primary</Button>
        <Button >Normal</Button>
        <TomatoButton>TomatoButton</TomatoButton>
      </Wrapper>
    </div>
  )
}

// 接受 “interpolation”
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// 继承特性
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const Wrapper = styled.section`
  padding: 2em;
  background: papayawhip;
`;


