import MainStyled from "../../Styles/main";
import { useForm } from "react-hook-form";

import Button from "../Button";

function SearchSuppliers() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <div className="companySearch">
        <h1 className="companyTitle">Buscar Fornecedores</h1>
        <form className="searchDiv" onSubmit={handleSubmit()}>
          <input
            type={"search"}
            className="inputSearch"
            placeholder="Pesquisa por Nome, CPF ou CNPJ"
          ></input>
          <Button className="searchButton">Pesquisar</Button>
        </form>
        <Button className="buttonFindAll">Buscar todas os Fornecedores</Button>
        <div className="divContainerCards">
          <div className="divCards"></div>
        </div>
      </div>
    </div>
  );
}

export default SearchSuppliers;
