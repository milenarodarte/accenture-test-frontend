import styled from "styled-components";

const DivModalUpdate = styled.div`
  background-color: rgba(18, 18, 20, 0.5);
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  top: 0rem;
  display: flex;
  align-items: center;

  .companyForm {
    height: 50vh;
    width: 22.5rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .companyTitle {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  .inputForm {
    margin-bottom: 1.2rem;
    height: 2.5rem;
    border-radius: 0.3rem;
    border-width: 1px;
    border-color: #e9ecef;
    padding-left: 1rem;
    border: 1.5px solid #e9ecef;
  }
  label {
    align-self: flex-start;
    font-size: 0.8rem;
    font-weight: bold;
  }
  .buttonSubmit {
    background-color: #000000;
    color: #ffffff;
  }
`;
export default DivModalUpdate;
