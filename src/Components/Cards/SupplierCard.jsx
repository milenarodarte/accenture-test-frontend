import Button from "../Button";
import { useContext } from "react";
import { settingContext } from "../../Context/SettingContext";
import React from "react";
import { apiContext } from "../../Context/ApiContext";
function SupplierCard({ obj }) {
  const id = obj.id;
  const { setModalUpdateON } = useContext(settingContext);
  const { onClickDeleteSupplier } = useContext(apiContext);
  if (obj.birthdate !== null) {
    return (
      <div>
        <div className="cardSuppliers">
          <div className="dataSuppliers">
            <p className="dataSupplierName"> {obj.name}</p>
            <p className="dataSupplierElse">CNPJ:{obj.cpfCnpj}</p>
            <p className="dataSupplierElse">EMAIL: {obj.email}</p>
            <div className="dataCepId">
              <p className="dataSupplierElse">CEP: {obj.cep}</p>
              <p className="dataSupplierElse">ID: {obj.id}</p>
            </div>
            <p className="dataSupplierElse">ANIVERÁRIO: {obj.birthdate}</p>
            <p className="dataSupplierElse">RG: {obj.rg}</p>
          </div>

          <div className="buttonsCardCompany">
            <Button
              className="deleteButton"
              onClick={() => onClickDeleteSupplier({ id })}
            >
              Excluir
            </Button>
            <Button
              className="updateButton"
              onClick={() => setModalUpdateON(true)}
            >
              Editar
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="cardSuppliers">
          <div className="dataSuppliers">
            <p className="dataSupplierName"> {obj.name}</p>
            <p className="dataSupplierElse">CNPJ:{obj.cpfCnpj}</p>
            <p className="dataSupplierElse">EMAIL: {obj.email}</p>
            <div className="dataCepId">
              <p className="dataSupplierElse">CEP: {obj.cep}</p>
              <p className="dataSupplierElse">ID: {obj.id}</p>
            </div>
          </div>

          <div className="buttonsCardCompany">
            <Button
              className="deleteButton"
              onClick={() => onClickDeleteSupplier({ id })}
            >
              Excluir
            </Button>
            <Button
              className="updateButton"
              onClick={() => setModalUpdateON(true)}
            >
              Editar
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default SupplierCard;
