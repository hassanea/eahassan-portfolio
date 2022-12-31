import React from 'react';


const notFound = (props) => {
    
    
  return (
    <div>
          <div className="page-wrap d-flex flex-row align-items-center">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-12 text-center">
                <span className="display-1 d-block">404</span>
                <div className="mb-4 lead"> <span className="mr-2"> <i className="fas fa-exclamation-triangle fa-2x"></i> </span> The page you are looking for was <span className="underline">not found</span>.</div>
                <a href="/" className="btn btn-link" data-toggle="tooltip" data-placement="bottom" title="Back to Homepage" rel="noopener noreferrer"> <span className="mr-2"> <i className="fas fa-home fa-2x"></i> </span> Back to Home</a>
            </div>
        </div>
    </div>
</div>
    </div>
  )
};
export default notFound;