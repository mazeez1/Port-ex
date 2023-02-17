import React from "react";

const TermsAndConditions = ({ darkTheme }) => {
  return (
    <div
      id="terms-policy"
      className="modal fade"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div
          className={
            "modal-content " + (darkTheme ? "bg-dark-2 text-light" : "")
          }
        >
          <div className="modal-header">
            <h5 className={"modal-title " + (darkTheme ? "text-white" : "")}>
              Terms &amp; Policy
            </h5>
            <button
              type="button"
              className={"btn-close " + (darkTheme ? "btn-close-white" : "")}
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-4">
            <p>
              I am available for a full list of services via email along with past projects and jobs.  Please infer to learn me
            </p>
            <h3 className={"mb-3 mt-4 mt-4 " + (darkTheme ? "text-white" : "")}>
            
            </h3>
            <p> 
            </p>
            <ol className="lh-lg">
              <li>
                 
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
