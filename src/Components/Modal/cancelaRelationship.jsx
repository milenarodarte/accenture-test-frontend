import Button from "../Button";
import DivModalUpdate from "../../Styles/modalUpdateCompany";

import { useContext } from "react";
import { settingContext } from "../../Context/SettingContext";
import React from "react";

function CancelRelationship() {
  const { setModalUpdateON } = useContext(settingContext);
  return (
    <DivModalUpdate>
      <div className="container">
        <p>Não se pode editar um relacionamento</p>
        <Button onClick={() => setModalUpdateON(false)}> voltar </Button>
      </div>
    </DivModalUpdate>
  );
}

export default CancelRelationship;
