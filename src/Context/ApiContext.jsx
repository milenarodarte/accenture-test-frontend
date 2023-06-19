import React from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useContext } from "react";
import axios from "axios";

export const apiContext = createContext({});
export const APIProvider = ({ children }) => {
  const [searchResponse, setSearchResponse] = useState(null);
  const [allCompanies, setAllCompanies] = useState(null);
  const [allSuppliers, setAllSuppliers] = useState(null);
  const onSubmitFunctionSuppliers = (data) => {
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
  };

  const onSubmitFunctionCompanies = (data) => {
    axios
      .post("http://localhost:2000/companies", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        toast.success("Supplier criado com sucesso");
      })
      .catch((err) => {
        toast.error("ERRO ao adicionar fornecedor");
        console.log(err);
      });
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
        .get(`http://localhost:2000/suppliers/name/${dataSubmit}`)
        .then((response) => {
          console.log(response);
          if (response.data.length === 0) {
            toast.error("Fornecedor não encontrado");
          }
          setSearchResponse(response);
        })
        .catch((err) => {
          toast.error("Fornecedor não encontrado");
          console.log(err);
        });
    } else {
      axios
        .get(`http://localhost:2000/suppliers/cpfcnpj/${dataSubmit}`)
        .then((response) => {
          setSearchResponse(response);
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
        .get(`http://localhost:2000/companies/business_name/${dataSubmit}`)
        .then((response) => {
          if (response.data.length === 0) {
            toast.error("Fornecedor não encontrado");
          }
          setSearchResponse(response);
        })
        .catch((err) => {
          toast.error("Fornecedor não encontrado");
          console.log(err);
        });
    } else {
      axios
        .get(`http://localhost:2000/companies/cnpj/${dataSubmit}`)
        .then((response) => {
          setSearchResponse(response);
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
        setAllCompanies(response.data);
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
        setAllSuppliers(response.data);
        if (response.data.length === 0) {
          toast.error("Nenhum fornecedor no bando de dados");
        }
        setSearchResponse(response);
      })
      .catch((err) => {
        toast.error("Nenhum fornecedor no bando de dados");
        console.log(err);
      });
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
      }}
    >
      {children}
    </apiContext.Provider>
  );
};
