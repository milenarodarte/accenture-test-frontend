import styled from "styled-components";

const Button = styled.button`
  border: none;
  min-width: 8.125rem;
  height: 2.6rem;
  padding: 0rem 1.25rem 0rem 1.25rem;
  border-radius: 0.3rem;
  background-color: #fdfdfd;
  color: #212529;
  font-size: 1rem;

  cursor: pointer;
  :hover {
    background-color: #c8c8c8;
  }
  :focus {
    background-color: #b2b2b2;
  }
`;

export default Button;
