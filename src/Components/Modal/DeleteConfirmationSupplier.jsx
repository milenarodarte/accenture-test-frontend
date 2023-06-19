import DivModalUpdate from "../../Styles/modalUpdateCompany";
import Button from "../Button";
function DeleteConfirmationSupplier() {
  return (
    <DivModalUpdate>
      <div className="deleteDiv">
        <p className="askP">Deseja excluir?</p>
        <p className="askP">Essa ação não pode ser desfeita</p>
        <Button className="buttonDeleteConfirmation">Excluir</Button>
        <Button className="buttonCancelDeleteConfirmaiton">Cancelar</Button>
      </div>
    </DivModalUpdate>
  );
}

export default DeleteConfirmationSupplier;
