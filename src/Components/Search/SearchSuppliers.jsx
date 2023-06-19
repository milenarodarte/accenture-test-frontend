import { useForm } from "react-hook-form";
import { useContext } from "react";
import { apiContext } from "../../Context/ApiContext";
import Button from "../Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
function SearchSuppliers() {
  const { onSubmitSearchSuppliers, onClickFindAllSuppliers } =
    useContext(apiContext);

  const FormSchema = yup.object().shape({
    search: yup.string().required("necessário enviar algum valor"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
  });
  return (
    <div>
      <div className="companySearch">
        <h1 className="companyTitle">Buscar Fornecedores</h1>
        <form
          className="searchDiv"
          onSubmit={handleSubmit(onSubmitSearchSuppliers)}
        >
          <input
            type={"search"}
            className="inputSearch"
            {...register("search")}
            placeholder="Pesquisa por Nome, CPF ou CNPJ"
          ></input>
          {errors.title?.message}
          <Button className="searchButton" type="submit">
            Pesquisar
          </Button>
        </form>
        <Button
          className="buttonFindAll"
          onClick={() => onClickFindAllSuppliers()}
        >
          Buscar todas os Fornecedores
        </Button>
        <div className="divContainerCards">
          <div className="divCards"></div>
        </div>
      </div>
    </div>
  );
}

export default SearchSuppliers;
