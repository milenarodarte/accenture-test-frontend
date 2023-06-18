import { Routes, Route } from "react-router-dom";

import Error from "../Pages/Error";
import Company from "../Pages/Company";
import Suppliers from "../Pages/Suppliers";
import CompanySuppliers from "../Pages/CompanySuppliers";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Company />} />
      <Route path="/suppliers" element={<Suppliers />} />
      <Route path="/companies_suppliers" element={<CompanySuppliers />} />
    </Routes>
  );
};
