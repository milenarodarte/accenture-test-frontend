import DivModalUpdate from "../../Styles/modalUpdateCompany";
import Button from "../Button";
import { useContext } from "react";
import { settingContext } from "../../Context/SettingContext";
import React from "react";
function DeleteConfirmationCompany() {
  const { setModalDeleteON } = useContext(settingContext);
  return (
    <DivModalUpdate>
      <div className="deleteDiv">
        <p className="askP">Deseja excluir?</p>
        <p className="askP">Essa ação não pode ser desfeita</p>
        <Button className="buttonDeleteConfirmation">Excluir</Button>
        <Button
          className="buttonCancelDeleteConfirmaiton"
          onClick={() => setModalDeleteON(false)}
        >
          Cancelar
        </Button>
      </div>
    </DivModalUpdate>
  );
}

export default DeleteConfirmationCompany;
