import { useForm } from "react-hook-form";
import Button from "../Button";
import MainNew from "../../Styles/mainnew";
import SearchSuppliers from "../Search/SearchSuppliers";
import SupplierRelationShip from "../Relationships/SupplierRelationship";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CompanyRelationShip from "../Relationships/CompanyRelationShip";
import { useContext } from "react";
import { settingContext } from "../../Context/SettingContext";
import { apiContext } from "../../Context/ApiContext";
import React from "react";
function MainCompanySupplier() {
  const { setModalDeleteON } = useContext(settingContext);
  const { onSubmitFunctionRelantionship } = useContext(apiContext);
  const FormSchema = yup.object().shape({
    company_id: yup.number(),
    supplier_id: yup.number(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
  });
  return (
    <MainNew>
      <div className="left">
        <div className="supplierForm">
          <div className="containerForm">
            <p className="h1Pagina">Relacionamento Empresa com Fornecedor</p>

            <div className="formRelationship">
              <form
                className="formPage"
                onSubmit={handleSubmit(onSubmitFunctionRelantionship)}
              >
                <div className="formRow">
                  <div className="formColumn">
                    <label htmlFor="company_id" className="labelForm">
                      ID Empresa
                    </label>
                    <input
                      id="company_id"
                      className="inputFormulario"
                      type="text"
                      {...register("company_id")}
                      placeholder="ID"
                    />
                    {errors.company_id?.message}
                  </div>
                  <div className="formColumn">
                    <label htmlFor="supplier_id" className="labelForm">
                      ID fornecedor
                    </label>
                    <input
                      id="supplier_id"
                      className="inputFormulario"
                      type="text"
                      {...register("supplier_id")}
                      placeholder="ID"
                    />
                    {errors.supplier_id?.message}
                  </div>
                </div>
                <div className="buttonsForm">
                  <div className="collorButtons">
                    <Button
                      className="deleteButton"
                      onClick={() => setModalDeleteON(true)}
                    >
                      Excluir
                    </Button>
                    <Button className="addButton">Adiconar</Button>
                  </div>

                  <Button className="findButton">Buscar Relacionamento</Button>
                  <Button className="findButton">
                    Buscar por ID da empresa
                  </Button>
                  <Button className="findButton">
                    Buscar por ID do fornecedor
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <SupplierRelationShip />
      </div>
    </MainNew>
  );
}

export default MainCompanySupplier;
