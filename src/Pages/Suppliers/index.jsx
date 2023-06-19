import Header from "../../Components/Header/Header";
import MainSuppliers from "../../Components/Main/MainSuppliers";
import DivPages from "../../Styles/divPages";
import { useContext } from "react";
import { settingContext } from "../../Context/SettingContext";
import DeleteConfirmationSupplier from "../../Components/Modal/DeleteConfirmationSupplier";
import UpdateSupplier from "../../Components/Modal/UpdateSupplier";

function Suppliers() {
  const { modalDeleteON } = useContext(settingContext);
  const { modalUpdateON } = useContext(settingContext);
  return (
    <DivPages>
      {modalDeleteON ? <DeleteConfirmationSupplier /> : null}
      {modalUpdateON ? <UpdateSupplier /> : null}
      <Header />
      <MainSuppliers />
    </DivPages>
  );
}
export default Suppliers;
