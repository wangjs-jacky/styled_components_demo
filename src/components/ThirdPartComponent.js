//  模拟继承第三方组件
import styled from "styled-components"

export const ThirdPartComponent = () => {
    return (
        <div>
            <p>4.模拟继承第三方组件：</p>
            <Wrapper>
                <Link>Unstyled, boring Link</Link>
                <br />
                <StyledLink>Styled, exciting Link</StyledLink>
            </Wrapper>
        </div>
    )
}

// Link 是导入的第三方组件
const Link = ({ className, children }) => (
    <a className={className} href="#!">
        {children}
    </a>
);

// 使用 () 继承 第三方组件
const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
`

const Wrapper = styled.section`
  padding: 2em;
  background: papayawhip;
`;
