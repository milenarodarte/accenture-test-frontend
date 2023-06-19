import Button from "../Button";
import { useContext } from "react";
import { settingContext } from "../../Context/SettingContext";
import React from "react";

function CompanyCard() {
  const { setModalDeleteON, setModalUpdateON } = useContext(settingContext);
  return (
    <div>
      <div className="cardCompany">
        <div className="dataCompany">
          <p className="dataCompanyName">NOME da empresa</p>
          <p className="dataCompanyElse">CNPJ: 36512544000180</p>
          <p className="dataCompanyElse">CEP: 541101010</p>
          <p className="dataCompanyElse">ID: 3</p>
        </div>
        <div className="buttonsCardCompany">
          <Button
            className="deleteButton"
            id="dltBtn"
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

export default CompanyCard;
