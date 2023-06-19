import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../Button";
import { useContext } from "react";
import { apiContext } from "../../Context/ApiContext";

function SearchCompany() {
  const { onSubmitSearchSuppliers, onClickFindAllCompanies } =
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
        <h1 className="companyTitle">Buscar Empresas</h1>
        <form
          className="searchDiv"
          onSubmit={handleSubmit(onSubmitSearchSuppliers)}
        >
          <input
            type={"search"}
            className="inputSearch"
            {...register("search")}
            placeholder="Pesquisa por Nome ou CNPJ"
          ></input>
          {errors.title?.message}
          <Button className="searchButton" type="submit">
            Pesquisar
          </Button>
        </form>
        <Button
          className="buttonFindAll"
          onClick={() => onClickFindAllCompanies()}
        >
          Buscar todas as empresas
        </Button>
        <div className="divContainerCards">
          <div className="divCards"></div>
        </div>
      </div>
    </div>
  );
}

export default SearchCompany;
