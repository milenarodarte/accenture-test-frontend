import CompanyCard from "../Cards/CompanyCard";
import SupplierCard from "../Cards/SupplierCard";
function CompanyRelationShip() {
  return (
    <div className="relationshipDiv">
      <p className="relationTitle">Encontre Relacionamentos</p>
      <div className="relationCompanyCard">
        <p className="titleP">Empresa</p>
        <CompanyCard />
      </div>

      <p className="titleP">Fornecedores</p>
      <div className="relatedRelationship">
        <SupplierCard />
        <SupplierCard />
      </div>
    </div>
  );
}

export default CompanyRelationShip;
