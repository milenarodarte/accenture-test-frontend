import Button from "../Button";
import { useContext } from "react";
import { settingContext } from "../../Context/SettingContext";
import React from "react";
import { apiContext } from "../../Context/ApiContext";
function CompanyCard({ obj }) {
  const { setModalUpdateON } = useContext(settingContext);
  const { onClickDeleteCompany } = useContext(apiContext);
  const id = obj.id;
  return (
    <div>
      <div className="cardCompany">
        <div className="dataCompany">
          <p className="dataCompanyName">{obj.business_name}</p>
          <p className="dataCompanyElse">CNPJ: {obj.cnpj}</p>
          <p className="dataCompanyElse">CEP: {obj.cep}</p>
          <p className="dataCompanyElse">ID: {obj.id}</p>
        </div>
        <div className="buttonsCardCompany">
          <Button
            className="deleteButton"
            id="dltBtn"
            onClick={() => onClickDeleteCompany({ id })}
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
