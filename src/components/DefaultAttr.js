// 封装具有默认属性的组件
import styled from "styled-components"

export const DefaultAttr = () => {
    return (
        <div>
            <p>7.定义的props可以和外部的props合并再传下去：</p>
            <Wrapper>
                <Input2 placeholder="A small text input" />
                <br />
                <Input2 placeholder="A bigger text input" size="2em" />
            </Wrapper>
        </div>
    )
}

//  可以设置默认属性，attr接受默认属性，此处定义的props可以和外部的props合并再传下去
const Input2 = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "1em",
}))`
    color: palevioletred;
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  
    /* here we use the dynamically computed prop */
    margin: ${props => props.size};
    padding: ${props => props.size};
  `;


const Wrapper = styled.section`
  padding: 2em;
  background: papayawhip;
`;
