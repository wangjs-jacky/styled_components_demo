//  基础使用
import styled from "styled-components"

export const Basic = () => {
  return (
    <div>
      <p>1.基础使用</p>
      <Wrapper>
        <Title>
          Hello World!
        </Title>
      </Wrapper>
    </div>
  )
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 2em;
  background: papayawhip;
`;

