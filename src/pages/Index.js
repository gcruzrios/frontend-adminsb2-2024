import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import Footer from "../components/Footer";
import DataTableEmpresas from "../components/DataTableEmpresas";

const Index = () => {
  return (
    <div>
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            <Header />

            {/* <MainContent /> */}
            <DataTableEmpresas/>
          </div>

          <Footer />
        </div>
      </div>
      {/* <!-- End of Page Wrapper --> */}
    </div>
  );
};

export default Index;
