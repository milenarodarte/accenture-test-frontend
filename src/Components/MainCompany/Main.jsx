import MainStyled from "../../Styles/main";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../Button";
import UpdateCompany from "../Modal/UpdateCompany";
import DeleteConfirmationCompany from "../Modal/DeleteConfirmationCompany";
function Main() {
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
    <MainStyled>
      <DeleteConfirmationCompany />
      <div className="left">
        <div className="companyForm">
          <h1 className="companyTitle">Cadastro Empresa</h1>

          <div className="form">
            <form className="formCompany" onSubmit={handleSubmit()}>
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
                Cadastrar Empresa
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="companySearch">
          <h1 className="companyTitle">Buscar Empresas</h1>
          <form className="searchDiv" onSubmit={handleSubmit()}>
            <input
              type={"search"}
              className="inputSearch"
              placeholder="Pesquisa por Nome, CPF ou CNPJ"
            ></input>
            <Button className="searchButton">Pesquisar</Button>
          </form>
          <Button className="buttonFindAll">Buscar todas as empresas</Button>
          <div className="divContainerCards">
            <div className="divCards">
              <div className="notFound">
                <p className="notFoundText">NENHUM REGISTRO ENCONTRADO</p>
              </div>
            </div>

            <div className="cardCompany">
              <div className="dataCompany">
                <p className="dataCompanyName">NOME da empresa</p>
                <p className="dataCompanyElse">CNPJ: 36512544000180</p>
                <p className="dataCompanyElse">CEP: 541101010</p>
                <p className="dataCompanyElse">ID: 3</p>
              </div>
              <div className="buttonsCardCompany">
                <Button className="deleteButton">Excluir</Button>
                <Button className="updateButton">Editar</Button>
              </div>
            </div>

            <div className="cardSuppliers">
              <div className="dataSuppliers">
                <p className="dataSupplierName"> NOME COMPLETO</p>
                <p className="dataSupplierElse">CNPJ: 36512544000180</p>
                <p className="dataSupplierElse">
                  EMAIL: milenarodarte@hotmail.com
                </p>
                <div className="dataCepId">
                  <p className="dataSupplierElse">CEP: 54410010</p>
                  <p className="dataSupplierElse">ID: 9</p>
                </div>
                <p className="dataSupplierElse">ANIVERÁRIO: yyyy-mm-dd</p>
                <p className="dataSupplierElse">RG: 0789798734</p>
              </div>

              <div className="buttonsCardCompany">
                <Button className="deleteButton">Excluir</Button>
                <Button className="updateButton">Editar</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainStyled>
  );
}

export default Main;
