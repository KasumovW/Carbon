import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/auth/Auth";
import { HomePage } from "./components/HomePage/HomePage";
import Layout from "./components/Layout/Layout";

type Props = {};

const App: React.FC = (props: Props) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
