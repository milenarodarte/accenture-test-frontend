import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../Button";
import { useContext } from "react";
import { apiContext } from "../../Context/ApiContext";
import CompanyCard from "../Cards/CompanyCard";
import NotFoundCard from "../Cards/NotFoundCard";

function SearchCompany() {
  const { onSubmitSearchCompany, onClickFindAllCompanies, searchResponse } =
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
          onSubmit={handleSubmit(onSubmitSearchCompany)}
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
          <div className="divCards">
            {searchResponse.length > 0 ? (
              searchResponse.map((obj) => <CompanyCard obj={obj} />)
            ) : (
              <NotFoundCard />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchCompany;
