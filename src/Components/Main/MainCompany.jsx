import MainStyled from "../../Styles/main";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../Button";
import { apiContext } from "../../Context/ApiContext";
import SearchCompany from "../Search/SearchCompany";
import { useContext } from "react";
function MainCompany() {
  const { onSubmitFunctionCompanies } = useContext(apiContext);
  const FormSchema = yup.object().shape({
    business_name: yup.string().required("Nome Fantasia obrigatório"),
    cnpj: yup.string().required("CNPJ obrigatório"),
    cep: yup.string().required("CEP obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
  });
  return (
    <MainStyled>
      <div className="left">
        <div className="companyForm">
          <h1 className="companyTitle">Cadastro Empresa</h1>

          <div className="form">
            <form
              className="formCompany"
              onSubmit={handleSubmit(onSubmitFunctionCompanies)}
            >
              <label>Nome Fantasia</label>
              <input
                className="inputForm"
                type="text"
                {...register("business_name")}
                placeholder="Nome fantasia"
              />
              {errors.title?.message}
              <label>CNPJ</label>
              <input
                className="inputForm"
                type="text"
                {...register("cnpj")}
                placeholder="apenas números"
              />
              {errors.title?.message}
              <label>CEP</label>
              <input
                className="inputForm"
                type="text"
                {...register("cep")}
                placeholder="apenas números"
              />
              {errors.title?.message}

              <Button className="buttonSubmit" type="submit">
                Cadastrar Empresa
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="right">
        <SearchCompany />
      </div>
    </MainStyled>
  );
}

export default MainCompany;
