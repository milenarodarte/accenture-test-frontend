import CompanyCard from "../Cards/CompanyCard";
import SupplierCard from "../Cards/SupplierCard";
import { apiContext } from "../../Context/ApiContext";
import { useContext } from "react";
import NotFoundCard from "../Cards/NotFoundCard";
function SupplierRelationShip() {
  const { searchResponse } = useContext(apiContext);
  return (
    <div className="relationshipDiv">
      <p className="relationTitle">Encontre Relacionamentos</p>
      <div className="relationCompanyCard">
        <p className="titleP">Fornecedor</p>
        {/*      {searchResponse.length > 0 ? (
          searchResponse.map((obj) => <SupplierCard obj={obj} />)
        ) : (
          <NotFoundCard />
        )}
        <SupplierCard /> */}
      </div>

      <p className="titleP">Empresas</p>
      <div className="relatedRelationship">{/* <CompanyCard /> */}</div>
    </div>
  );
}

export default SupplierRelationShip;
