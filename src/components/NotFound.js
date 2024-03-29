import React from "react";

const NotFound = () => {
  return (
    <div>
      {/* <!-- Begin Page Content --> */}
      <div className="container-fluid">
        {/* 
                    <!-- 404 Error Text --> */}
        <div className="text-center">
          <div className="error mx-auto" data-text="404">
            404
          </div>
          <p className="lead text-gray-800 mb-5">Page Not Found</p>
          <p className="text-gray-500 mb-0">
            It looks like you found a glitch in the matrix...
          </p>
          <a href="/index">&larr; Back to Dashboard</a>
        </div>
      </div>
      {/* <!-- /.container-fluid --> */}
    </div>
  );
};

export default NotFound;
