import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutContainer from "../layout/LayoutContainer";
import HomeContainer from "../pages/Home/HomeContainer";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LayoutContainer />}>
          <Route path="" element={<HomeContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
