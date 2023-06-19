import Button from "../Button";
import DivModalUpdate from "../../Styles/modalUpdateCompany";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { settingContext } from "../../Context/SettingContext";
import { apiContext } from "../../Context/ApiContext";
import React from "react";

function UpdateSupplier() {
  const { setModalUpdateON } = useContext(settingContext);
  const { onSubmitUpdateSupplier } = useContext(apiContext);
  const FormSchema = yup.object().shape({
    name: yup.string().required("Nome Fantasia obrigatório"),
    email: yup.string().required("Email obrigatório"),
    cpfCnpj: yup.string().required("CPF ou CNPJ obrigatório"),
    id: yup.string().required("ID obrigatório"),
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
    <DivModalUpdate>
      <div className="supplierForm">
        <h1 className="companyTitle">Editar Fornecedor</h1>

        <div className="form">
          <form
            className="formCompany"
            onSubmit={handleSubmit(onSubmitUpdateSupplier)}
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
            <label>ID fornecedor</label>
            <input
              className="inputForm"
              type="text"
              {...register("id")}
              placeholder="Id fornecedor"
            />
            {errors.title?.message}

            <Button className="buttonSubmit" type={"submit"}>
              Editar Fornecedor
            </Button>
          </form>
          <Button
            className="buttonCloseModal"
            onClick={() => setModalUpdateON(false)}
          >
            Cancelar
          </Button>
        </div>
      </div>
    </DivModalUpdate>
  );
}

export default UpdateSupplier;
