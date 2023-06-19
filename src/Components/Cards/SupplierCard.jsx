import Button from "../Button";
function SupplierCard() {
  return (
    <div>
      <div className="cardSuppliers">
        <div className="dataSuppliers">
          <p className="dataSupplierName"> NOME COMPLETO</p>
          <p className="dataSupplierElse">CNPJ: 36512544000180</p>
          <p className="dataSupplierElse">EMAIL: milenarodarte@hotmail.com</p>
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
  );
}

export default SupplierCard;
