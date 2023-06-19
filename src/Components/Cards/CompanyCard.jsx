import MainStyled from "../../Styles/main";
import Button from "../Button";
function CompanyCard() {
  return (
    <MainStyled>
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
    </MainStyled>
  );
}

export default CompanyCard;
