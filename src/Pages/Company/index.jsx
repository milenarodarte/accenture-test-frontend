import Header from "../../Components/Header/Header";
import DivPages from "../../Styles/divPages";
import MainCompany from "../../Components/Main/MainCompany";
import { useContext } from "react";
import { settingContext } from "../../Context/SettingContext";
import DeleteConfirmationCompany from "../../Components/Modal/DeleteConfirmationCompany";
import UpdateCompany from "../../Components/Modal/UpdateCompany";

function Company() {
  const { modalDeleteON } = useContext(settingContext);
  const { modalUpdateON } = useContext(settingContext);
  return (
    <DivPages>
      {modalDeleteON ? <DeleteConfirmationCompany /> : null}
      {modalUpdateON ? <UpdateCompany /> : null}
      <Header />
      <MainCompany />
    </DivPages>
  );
}
export default Company;
