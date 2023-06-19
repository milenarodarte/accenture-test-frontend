import Header from "../../Components/Header/Header";
import MainCompanySupplier from "../../Components/Main/MainCompanySuppliers";
import DivPages from "../../Styles/divPages";
import { useContext } from "react";
import { settingContext } from "../../Context/SettingContext";
import DeleteConfirmationRelationship from "../../Components/Modal/DeleteConfirmationRelationship";
import CancelRelationship from "../../Components/Modal/cancelaRelationship";
import React from "react";
function CompanySuppliers() {
  const { modalDeleteON, modalUpdateON } = useContext(settingContext);

  return (
    <DivPages>
      {modalDeleteON ? <DeleteConfirmationRelationship /> : null}
      {modalUpdateON ? <CancelRelationship /> : null}
      <Header />
      <MainCompanySupplier />
      <div></div>
    </DivPages>
  );
}
export default CompanySuppliers;
