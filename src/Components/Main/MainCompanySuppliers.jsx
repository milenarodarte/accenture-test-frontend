import MainStyled from "../../Styles/main";
import { useForm } from "react-hook-form";

import Button from "../Button";

import SearchSuppliers from "../Search/SearchSuppliers";

function MainCompanySupplier() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <MainStyled>
      <div className="left">
        <div className="supplierForm">
          <h2 className="companySupplierTitle">
            Relacionamento Empresa com Fornecedor
          </h2>

          <div className="form">
            <form className="formCompany" onSubmit={handleSubmit}>
              <label>ID fornecedor</label>
              <input
                className="inputFormID"
                type="text"
                {...register("Name")}
                placeholder="Nome"
              />
              {errors.title?.message}
              <label>ID empresa</label>

              <input
                className="inputForm"
                type="text"
                {...register("Email")}
                placeholder="Seu e-mail"
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

export default MainCompanySupplier;
