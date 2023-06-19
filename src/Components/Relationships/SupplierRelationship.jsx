import CompanyCard from "../Cards/CompanyCard";
import SupplierCard from "../Cards/SupplierCard";
function SupplierRelationShip() {
  return (
    <div className="relationshipDiv">
      <p className="relationTitle">Encontre Relacionamentos</p>
      <div className="relationCompanyCard">
        <p className="titleP">Fornecedor</p>
        <SupplierCard />
      </div>

      <p className="titleP">Empresas</p>
      <div className="relatedRelationship">
        <CompanyCard />
      </div>
    </div>
  );
}

export default SupplierRelationShip;
