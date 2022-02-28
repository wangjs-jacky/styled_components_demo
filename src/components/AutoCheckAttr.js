//  自动 check 哪儿些属性属于原生DOM属性;哪儿些属于自定义属性
import styled from "styled-components"

export const AutoCheckAttr = () => {
    return (
        <div>
            <p>5.自动check属性类型：原生 or 自定义</p>
            <Wrapper>
                <Input defaultValue="@probablyup" type="text" />
                <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
            </Wrapper>
        </div>
    )
}

// 智能传递 props
// input 原生属性： defaultValue 和 type
// 自定义属性： inputColor 
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Wrapper = styled.section`
  padding: 2em;
  background: papayawhip;
`;