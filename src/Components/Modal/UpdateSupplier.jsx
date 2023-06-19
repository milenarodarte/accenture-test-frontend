import Button from "../Button";
import DivModalUpdate from "../../Styles/modalUpdateCompany";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
function UpdateSupplier() {
  const FormSchema = yup.object().shape({
    businessName: yup.string().required("Nome Fantasia obrigatório"),
    CNPJ: yup.string().required("CNPJ obrigatório"),
    CEP: yup.string().required("CEP obrigatório"),
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
          <form className="formCompany" onSubmit={handleSubmit()}>
            <label>Nome</label>
            <input
              className="inputForm"
              type="text"
              {...register("Name")}
              placeholder="Nome"
            />
            {errors.title?.message}
            <label>E-mail</label>

            <input
              className="inputForm"
              type="text"
              {...register("Email")}
              placeholder="Seu e-mail"
            />
            {errors.title?.message}

            <label>CPF ou CNPJ</label>
            <input
              className="inputForm"
              type="text"
              {...register("CPF_CNPJ")}
              placeholder="CPF OU CNPJ apenas números"
            />
            {errors.title?.message}

            <label>CEP</label>
            <input
              className="inputForm"
              type="text"
              {...register("CEP")}
              placeholder="CEP - apenas números"
            />
            {errors.title?.message}

            <label>Data de Nascimento apenas pessoa física</label>
            <input
              className="inputForm"
              type="text"
              {...register("Birthdate")}
              placeholder="formato: AAAA-MM-DD"
            />
            {errors.title?.message}

            <label>RG apenas pessoa física</label>
            <input
              className="inputForm"
              type="text"
              {...register("Rg")}
              placeholder="RG apenas números"
            />
            {errors.title?.message}

            <Button className="buttonSubmit" type="submit">
              Editar Fornecedor
            </Button>
          </form>
          <Button className="buttonCloseModal">Cancelar</Button>
        </div>
      </div>
    </DivModalUpdate>
  );
}

export default UpdateSupplier;
