import styled, { withTheme } from "styled-components"
const color = "blue"
const Button = styled.button`
  color: ${props => {
    return props.color ? props.color : "yellow"
  }};
  background: ${color};
  font-size: ${props => {
    return props.big ? "3rem" : "1rem"
  }};
  padding: 1rem;
  margin: 1rem;
`

export default Button
