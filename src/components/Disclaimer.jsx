import React from "react";

const Disclaimer = ({ darkTheme }) => {
  return (
    <div
      id="disclaimer"
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
              Copyright &amp; Disclaimer
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
            </p>
            <ul className="lh-lg">
              <li> 
              </li>
              <li> 
              </li>
              <li> 
              </li>
              <li> 
              </li>
              <li> 
              </li>
              <li> 
              </li>
              <li>
                Site created using bootstrap and node.  By me, Muhammad Azeez. 
                All assets are not to be reproduced without prior authorization
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
