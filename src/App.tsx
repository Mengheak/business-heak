import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Main from "./pages/Main";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import AccountDetails from "./pages/AccountDetails";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/main" replace />} />
          <Route path="main" element={<Main />} />
          <Route path="account-details/:id" element={<AccountDetails />} />
        </Route>
      </Routes>
    </Provider>
  );
};

export default App;
