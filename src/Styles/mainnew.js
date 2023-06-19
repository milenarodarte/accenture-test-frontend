import styled from "styled-components";

const MainNew = styled.main`
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
  .supplierForm {
    height: 65vh;
    width: 22.5rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    padding: 1rem 1rem 1rem 1rem;
  }
  .containerForm {
    border: 1.5px solid #e9ecef;
    height: 60vh;
    border-radius: 0.5rem;
  }
  .h1Pagina {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .formRelationship {
    display: flex;
    flex-direction: column;
  }
  .labelForm {
    font-size: 0.8rem;
    font-weight: bold;
  }
  .formPage {
    display: flex;
    flex-direction: column;
  }
  .inputFormulario {
    width: 5rem;
    height: 2rem;
    border: 2px solid #e9ecef;
    border-radius: 0.3rem;
    padding: 0.5rem;
  }
  .formRow {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .formColumn {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
  }
  .buttonsForm {
    height: 12rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }
  .deleteButton {
    background-color: #a65252;
    min-width: 2rem;
    width: 7rem;
    color: #fff;
  }
  .addButton {
    background-color: #72a652;
    min-width: 2rem;
    width: 7rem;
    color: #fff;
  }
  .findButton {
    background: #000;
    color: #fff;
    width: 90%;
  }
  .collorButtons {
    display: flex;
    height: 3rem;
    width: 15rem;
    justify-content: space-between;
    margin-bottom: 0rem;
  }
  .relationshipDiv {
    height: 90vh;
    width: 22.5rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
    margin: 0;
    padding: 2rem 1rem 2rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .relationTitle {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
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

  .cardCompany {
    border: 1px solid black;
    height: 12.5rem;
    width: 18.75rem;
    border-radius: 0.5rem;
    padding: 1rem;
  }
  .buttonsCardCompany {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }
  .updateButton {
    background-color: #72a652;
    color: #fff;
    min-width: 1rem;
    width: 8.125rem;
  }
  .dltBtn {
    background-color: #a65252;
    color: #fff;
    min-width: 1rem;
    width: 8.125rem;
  }
  .titleP {
    margin-bottom: 0.7rem;
    font-size: 1.2rem;
  }
  .relationCompanyCard {
    margin-bottom: 1rem;
  }
  .relatedRelationship {
    height: 40vh;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
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
`;

export default MainNew;
