//  组件接受 props + 继承Components
import styled from "styled-components"

export const ModifyExtends = () => {
  return (
    <div>
      <p>3.as的使用方法：</p>
      <Wrapper>
        <Button2 href="#!">Button 继承自 a 标签</Button2>
        <Button as="a" href="#!">将继承的标签从button改为a</Button>
        <TomatoButton as="a" href="#!">将继承的标签从Button改为a</TomatoButton>
        <Button as={ReversedButton}>将继承的标签从button改为自定义的组件</Button>
      </Wrapper>
    </div>
  )
}

// Button 继承自 <a> 标签
const Button2 = styled.a`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

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

// 自己写的组件
const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />

const Wrapper = styled.section`
  padding: 2em;
  background: papayawhip;
`;