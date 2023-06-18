import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 100vw;
  height: 9vh;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem 0rem 2rem;

  img {
    margin-left: 2rem;
  }

  @media (max-width: 500px) {
    height: 20vh;
    flex-direction: column;
    padding: 1.8rem 1rem;
    justify-content: center;
    gap: 1.25rem;
  }
`;

export default HeaderStyled;
