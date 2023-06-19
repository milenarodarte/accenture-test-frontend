import styled from "styled-components";

const MainStyled = styled.main`
  height: 91vh;
  width: 100vw;
  display: flex;

  .left {
    width: 50vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0rem 1rem 0rem 0rem;
    margin: 0;
  }
  .right {
    width: 50vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0rem 0rem 0rem 1rem;
    margin-left: auto;
  }
  .companyForm {
    height: 50vh;
    width: 22.5rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    padding: 2rem 1rem 2rem 1rem;
  }
  .supplierForm {
    height: 85vh;
    width: 22.5rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    padding: 3rem 1rem 3rem 1rem;
  }
  .companySearch {
    height: 85vh;
    width: 22.5rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
    margin: 0;
    padding: 2rem 1rem 2rem 1rem;
  }
  .companyTitle {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  .formCompany {
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
  .searchDiv {
    display: flex;
    gap: 0.4rem;
    width: 100%;
    justify-content: space-between;
  }

  .inputSearch {
    margin-bottom: 1.2rem;
    height: 2.5rem;
    border-radius: 0.3rem;
    border-width: 1px;
    border-color: #e9ecef;
    padding-left: 0.5rem;
    border: 1.5px solid #e9ecef;
    width: 74%;
  }

  .searchButton {
    min-width: 2.5rem;
    width: 3.75rem;
    font-size: 0.7rem;
    background-color: #000000;
    color: #ffffff;
    height: 2.5rem;
  }
  .buttonFindAll {
    background-color: #000;
    width: 100%;
    color: #fff;
  }
  .divContainerCards {
    border: 1.5px solid #e9ecef;
    height: 70%;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-top: 2rem;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .notFound {
      width: 18.75rem;
      height: 9.375rem;
      background-color: #000;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .notFoundText {
      font-size: 1rem;
      color: #fff;
    }

    .cardCompany {
      border: 1px solid black;
      height: 12.5rem;
      width: 18.75rem;
      border-radius: 0.5rem;
      padding: 1rem;
    }
    .dataCompany {
      line-height: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }

    .dataCompanyName {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #000000;
      overflow-x: hidden;
      display: flex;
    }
    .dataCompanyElse {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      overflow-x: hidden;
    }
    .buttonsCardCompany {
      margin-top: 1rem;
      display: flex;
      justify-content: space-between;
    }
    .deleteButton {
      background-color: #a65252;
      color: #fff;
      min-width: 1rem;
      width: 8.125rem;
    }
    .updateButton {
      background-color: #72a652;
      color: #fff;
      min-width: 1rem;
      width: 8.125rem;
    }
    .cardSuppliers {
      border: 1px solid black;
      height: 15.5rem;
      width: 18.75rem;
      border-radius: 0.5rem;
      padding: 1rem;
    }
    .dataSuppliers {
      line-height: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }
    .dataSupplierName {
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.25rem;
      color: #000000;
      overflow-x: hidden;
      display: flex;
    }
    .dataSupplierElse {
      font-style: normal;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 1.125rem;
      overflow-x: hidden;
    }
    .dataCepId {
      display: flex;
      gap: 1rem;
    }
  }
`;

export default MainStyled;
