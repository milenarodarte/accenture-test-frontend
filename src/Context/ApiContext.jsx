import React from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useContext } from "react";
import axios from "axios";
import { settingContext } from "./SettingContext";
export const apiContext = createContext({});
export const APIProvider = ({ children }) => {
  const { setModalUpdateON } = useContext(settingContext);
  const [searchResponse, setSearchResponse] = useState([]);

  const [cepOk, setCepOk] = useState(false);

  const verifyCEP = (data) => {
    axios
      .get(`http://cep.la/${data.cep}`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        const city = response.data.cidade;
        if (city.length > 0) {
          setCepOk(true);
        } else {
          toast.error("CEP inválido");
          setCepOk(false);
        }
      })
      .catch((err) => {
        toast.error("CEP inválido");
        toast.error(err);
        console.log(err);
        setCepOk(false);
      });
  };

  const onSubmitFunctionSuppliers = (data) => {
    verifyCEP(data);
    if (cepOk) {
      axios
        .post("http://localhost:2000/suppliers", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          toast.success("Supplier criado com sucesso");
        })
        .catch((err) => {
          toast.error("ERRO ao adicionar fornecedor");
          toast.error(err);
          console.log(err);
        });
    } else {
      toast.error("ERRO ao adicionar fornecedor");
    }
  };

  const onSubmitFunctionCompanies = (data) => {
    verifyCEP(data);
    if (cepOk) {
      axios
        .post("http://localhost:2000/companies", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          toast.success("Empresa criada com sucesso");
        })
        .catch((err) => {
          toast.error("ERRO ao adicionar fornecedor");
          console.log(err);
        });
    } else {
      toast.error("ERRO ao adicionar empresa");
    }
  };

  const onSubmitFunctionRelantionship = (data) => {
    const supplier = data.supplier_id;
    const company = data.company_id;
    axios
      .post(`http://localhost:2000/companies/${company}/supplier/${supplier}`)
      .then((response) => {
        toast.success("Supplier criado com sucesso");
      })
      .catch((err) => {
        toast.error("ERRO ao adicionar fornecedor");
        console.log(err);
      });
  };

  const onSubmitSearchSuppliers = (data) => {
    const dataSubmit = parseInt(data.search);

    if (isNaN(dataSubmit)) {
      axios
        .get(`http://localhost:2000/suppliers/name/${data.search}`)
        .then((response) => {
          if (response.data.length === 0) {
            toast.error("Fornecedor não encontrado");
          }
          setSearchResponse(response.data);
        })
        .catch((err) => {
          toast.error("Fornecedor não encontrado");
          console.log(err);
        });
    } else {
      axios
        .get(`http://localhost:2000/suppliers/cpfcnpj/${data.search}`)
        .then((response) => {
          setSearchResponse(response.data);
          if (response.data.length === 0) {
            toast.error("Fornecedor não encontrado");
          }
        })
        .catch((err) => {
          toast.error("Fornecedor não encontrado");
          console.log(err);
        });
    }
  };
  const onSubmitSearchCompany = (data) => {
    const dataSubmit = parseInt(data.search);

    if (isNaN(dataSubmit)) {
      axios
        .get(`http://localhost:2000/companies/business_name/${data.search}`)
        .then((response) => {
          if (response.data.length === 0) {
            toast.error("Fornecedor não encontrado");
          }
          setSearchResponse(response.data);
        })
        .catch((err) => {
          toast.error("Fornecedor não encontrado");
          console.log(err);
        });
    } else {
      axios
        .get(`http://localhost:2000/companies/cnpj/${data.search}`)
        .then((response) => {
          setSearchResponse(response.data);
          if (response.data.length === 0) {
            toast.error("Fornecedor não encontrado");
          }
        })
        .catch((err) => {
          toast.error("Fornecedor não encontrado");
          console.log(err);
        });
    }
  };
  const onClickFindAllCompanies = () => {
    axios
      .get(`http://localhost:2000/companies`)
      .then((response) => {
        setSearchResponse(response.data);
        if (response.data.length === 0) {
          toast.error("Nenhuma empresa no bando de dados");
        }
      })
      .catch((err) => {
        toast.error("Nenhuma empresa no bando de dados");
        console.log(err);
      });
  };
  const onClickFindAllSuppliers = () => {
    axios
      .get(`http://localhost:2000/suppliers`)
      .then((response) => {
        setSearchResponse(response.data);
        if (response.data.length === 0) {
          toast.error("Nenhum fornecedor no bando de dados");
        }
      })
      .catch((err) => {
        toast.error("Nenhum fornecedor no bando de dados");
        console.log(err);
      });
  };
  const onClickDeleteCompany = ({ id }) => {
    axios
      .delete(`http://localhost:2000/companies/${id}`)
      .then((response) => {
        setSearchResponse(response.data);
        toast.success("Empresa deletada");
      })
      .catch((err) => {
        toast.error("Erro: não deletada");
        console.log(err);
      });
  };
  const onClickDeleteSupplier = ({ id }) => {
    axios
      .delete(`http://localhost:2000/suppliers/${id}`)
      .then((response) => {
        setSearchResponse(response.data);
        toast.success("Fornecedor deletado");
      })
      .catch((err) => {
        toast.error("Erro: não deletado");
        console.log(err);
      });
  };
  const onSubmitUpdateSupplier = (data) => {
    verifyCEP(data);
    if (cepOk) {
      const id = data.id;

      axios
        .put(`http://localhost:2000/suppliers/${id}`, data)
        .then((response) => {
          toast.success("Fornecedor editado");
          setModalUpdateON(false);
        })
        .catch((err) => {
          toast.error("Erro: não editado");
          console.log(err);
        });
    } else {
      toast.error("ERRO ao editar fornecedor");
    }
  };
  const onSubmitUpdateCompany = (data) => {
    verifyCEP(data);
    if (cepOk) {
      const id = data.id;

      axios
        .put(`http://localhost:2000/companies/${id}`, data)
        .then((response) => {
          toast.success("Empresa editada");
          setModalUpdateON(false);
        })
        .catch((err) => {
          toast.error("Erro: não editada");
          console.log(err);
        });
    } else {
      toast.error("ERRO ao editar fornecedor");
    }
  };
  return (
    <apiContext.Provider
      value={{
        onSubmitSearchSuppliers,
        onSubmitFunctionRelantionship,
        onSubmitFunctionSuppliers,
        onSubmitFunctionCompanies,
        onSubmitSearchCompany,
        onClickFindAllCompanies,
        onClickFindAllSuppliers,
        searchResponse,
        onClickDeleteCompany,
        onClickDeleteSupplier,
        onSubmitUpdateSupplier,
        onSubmitUpdateCompany,
        verifyCEP,
      }}
    >
      {children}
    </apiContext.Provider>
  );
};
