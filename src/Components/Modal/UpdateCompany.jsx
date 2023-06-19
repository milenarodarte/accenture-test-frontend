import Button from "../Button";
import DivModalUpdate from "../../Styles/modalUpdateCompany";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
function UpdateCompany() {
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
      <div className="companyForm">
        <h1 className="companyTitle">Editar Empresa</h1>

        <div className="form">
          <form onSubmit={handleSubmit()}>
            <label>Nome Fantasia</label>
            <input
              className="inputForm"
              type="text"
              {...register("businessName")}
              placeholder="Nome fantasia"
            />
            {errors.title?.message}
            <label>CNPJ</label>
            <input
              className="inputForm"
              type="text"
              {...register("CNPJ")}
              placeholder="apenas números"
            />
            {errors.title?.message}
            <label>CEP</label>
            <input
              className="inputForm"
              type="text"
              {...register("CEP")}
              placeholder="apenas números"
            />
            {errors.title?.message}

            <Button className="buttonSubmit" type="submit">
              Alterar Empresa
            </Button>
          </form>
          <Button className="buttonCloseModal">Cancelar</Button>
        </div>
      </div>
    </DivModalUpdate>
  );
}

export default UpdateCompany;
