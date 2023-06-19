import Button from "../Button";
import DivModalUpdate from "../../Styles/modalUpdateCompany";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { settingContext } from "../../Context/SettingContext";
import React from "react";
import { apiContext } from "../../Context/ApiContext";
function UpdateCompany() {
  const { onSubmitUpdateCompany } = useContext(apiContext);
  const { setModalUpdateON } = useContext(settingContext);
  const FormSchema = yup.object().shape({
    business_name: yup.string().required("Nome Fantasia obrigatório"),
    cnpj: yup.string().required("CNPJ obrigatório"),
    cep: yup.string().required("CEP obrigatório"),
    id: yup.string(),
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
      <div className="companyForm">
        <h1 className="companyTitle">Editar Empresa</h1>

        <div className="form">
          <form onSubmit={handleSubmit(onSubmitUpdateCompany)}>
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
            <label>ID empresa</label>
            <input
              className="inputForm"
              type="text"
              {...register("id")}
              placeholder="id da empresa"
            />
            {errors.title?.message}

            <Button className="buttonSubmit" type="submit">
              Alterar Empresa
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

export default UpdateCompany;
