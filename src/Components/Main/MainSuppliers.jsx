import MainStyled from "../../Styles/main";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../Button";
import React from "react";
import SearchSuppliers from "../Search/SearchSuppliers";
import { useContext } from "react";
import { apiContext } from "../../Context/ApiContext";

function MainSuppliers() {
  const { onSubmitFunctionSuppliers } = useContext(apiContext);
  const FormSchema = yup.object().shape({
    name: yup.string().required("Nome Fantasia obrigatório"),
    email: yup.string().required("E-mail obrigatório"),
    cpfCnpj: yup.string().required("CNPJ obrigatório"),
    cep: yup.string().required("CEP obrigatório"),
    birthdate: yup.string(),
    rg: yup.string(),
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
        <div className="supplierForm">
          <h1 className="companyTitle">Cadastro Fornecedor</h1>

          <div className="form">
            <form
              className="formCompany"
              onSubmit={handleSubmit(onSubmitFunctionSuppliers)}
            >
              <label>Nome</label>
              <input
                className="inputForm"
                type="text"
                {...register("name")}
                placeholder="Nome"
              />
              {errors.title?.message}
              <label>E-mail</label>

              <input
                className="inputForm"
                type="text"
                {...register("email")}
                placeholder="Seu e-mail"
              />
              {errors.title?.message}

              <label>CPF ou CNPJ</label>
              <input
                className="inputForm"
                type="text"
                {...register("cpfCnpj")}
                placeholder="CPF OU CNPJ apenas números"
              />
              {errors.title?.message}

              <label>CEP</label>
              <input
                className="inputForm"
                type="text"
                {...register("cep")}
                placeholder="CEP - apenas números"
              />
              {errors.title?.message}

              <label>Data de Nascimento apenas pessoa física</label>
              <input
                className="inputForm"
                type="text"
                {...register("birthdate")}
                placeholder="formato: AAAA-MM-DD"
              />
              {errors.title?.message}

              <label>RG apenas pessoa física</label>
              <input
                className="inputForm"
                type="text"
                {...register("rg")}
                placeholder="RG apenas números"
              />
              {errors.title?.message}

              <Button className="buttonSubmit" type="submit">
                Cadastrar Fornecedor
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="right">
        <SearchSuppliers />
      </div>
    </MainStyled>
  );
}

export default MainSuppliers;
