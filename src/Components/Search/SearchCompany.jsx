import { useForm } from "react-hook-form";

import Button from "../Button";

function SearchCompany() {
  const { handleSubmit } = useForm();
  return (
    <div>
      <div className="companySearch">
        <h1 className="companyTitle">Buscar Empresas</h1>
        <form className="searchDiv" onSubmit={handleSubmit()}>
          <input
            type={"search"}
            className="inputSearch"
            placeholder="Pesquisa por Nome ou CNPJ"
          ></input>
          <Button className="searchButton">Pesquisar</Button>
        </form>
        <Button className="buttonFindAll">Buscar todas as empresas</Button>
        <div className="divContainerCards">
          <div className="divCards"></div>
        </div>
      </div>
    </div>
  );
}

export default SearchCompany;
