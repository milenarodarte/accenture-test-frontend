import HeaderStyled from "../../Styles/header";
import DivHeaderButton from "../../Styles/divHeaderButton";
import Button from "../Button";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <HeaderStyled>
      <img src={logo} alt="logo" />
      <DivHeaderButton className="buttonsHeader">
        <Button onClick={() => navigate("/suppliers")}>Fornecedores</Button>
        <Button onClick={() => navigate("/")}>Empresas</Button>
        <Button onClick={() => navigate("/companies_suppliers")}>
          Fornecedores e Empresas
        </Button>
      </DivHeaderButton>
    </HeaderStyled>
  );
}

export default Header;
