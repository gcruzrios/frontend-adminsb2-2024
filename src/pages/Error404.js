import React from "react";
import NotFound from "../components/NotFound";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import Footer from "../components/Footer";

const Error404 = () => {
  return (
    <div>
      {" "}
      <div>
        {/* <!-- Page Wrapper --> */}
        <div id="wrapper">
          <Sidebar />

          <div id="content-wrapper" className="d-flex flex-column">
            {/* <!-- Main Content --> */}
            <div id="content">
              <Header />

              {/* <MainContent /> */}
              <NotFound />
            </div>

            <Footer />
          </div>
        </div>
        {/* <!-- End of Page Wrapper --> */}
      </div>
    </div>
  );
};

export default Error404;
