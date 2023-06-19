import Button from "../Button";
function CompanyCard() {
  return (
    <div>
      <div className="cardCompany">
        <div className="dataCompany">
          <p className="dataCompanyName">NOME da empresa</p>
          <p className="dataCompanyElse">CNPJ: 36512544000180</p>
          <p className="dataCompanyElse">CEP: 541101010</p>
          <p className="dataCompanyElse">ID: 3</p>
        </div>
        <div className="buttonsCardCompany">
          <Button className="deleteButton" id="dltBtn">
            Excluir
          </Button>
          <Button className="updateButton">Editar</Button>
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;
