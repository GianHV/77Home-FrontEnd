import { Route, Routes } from "react-router-dom";
import CreateNewHouse from "./components/owner/house/CreateNewHouse";
import ManageHouse from "./components/owner/house/ManageHouse";
import App from "./App";
import { Suspense } from "react";
import ListHouse from "./components/owner/house/ListHouse";
import DetailHouse from "./components/owner/house/DetailHouse";
import UpdateHouse from "./components/owner/house/UpdateHouse";
import Login from "./components/user/Login";
import Register from "./components/user/Register";

const url = '77Home-FrontEnd'
const Layout = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/house" element={<ManageHouse />}>
            <Route index element={<ListHouse />} />
            <Route path="create" element={<CreateNewHouse />} />
            <Route path="update" element={<UpdateHouse />} />
            <Route path=":id" element={<DetailHouse />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Layout;
