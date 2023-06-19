import Button from "../Button";
import { useContext } from "react";
import { settingContext } from "../../Context/SettingContext";
import React from "react";
function SupplierCard() {
  const { setModalDeleteON, setModalUpdateON } = useContext(settingContext);
  return (
    <div>
      <div className="cardSuppliers">
        <div className="dataSuppliers">
          <p className="dataSupplierName"> NOME COMPLETO</p>
          <p className="dataSupplierElse">CNPJ: 36512544000180</p>
          <p className="dataSupplierElse">EMAIL: milenarodarte@hotmail.com</p>
          <div className="dataCepId">
            <p className="dataSupplierElse">CEP: 54410010</p>
            <p className="dataSupplierElse">ID: 9</p>
          </div>
          <p className="dataSupplierElse">ANIVERÁRIO: yyyy-mm-dd</p>
          <p className="dataSupplierElse">RG: 0789798734</p>
        </div>

        <div className="buttonsCardCompany">
          <Button
            className="deleteButton"
            onClick={() => setModalDeleteON(true)}
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

export default SupplierCard;
