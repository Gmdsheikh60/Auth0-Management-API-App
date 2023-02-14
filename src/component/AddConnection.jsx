import React, { useState } from "react";

const AddConnection = (props) => {
  const [connectionName, setconnectionName] = useState("");
  const endpointUrl = `https://{{DOMAIN}}/api/v2/connections`;
  let options = {
    method: "POST",
    headers: props.headers,
    body: "",
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const bodyParameters = JSON.stringify({
      name: `${connectionName}`,
      strategy: "auth0",
    });
    options.body = bodyParameters;
    try {
      const response = await fetch(endpointUrl, options);
      console.log(response);
      e.target.reset();
      if (response.ok) {
        props.setTrigger(!props.trigger);
     }
     else if(!response.ok){
      const errorMsg = await response.json();
      if (errorMsg.message) {
        window.alert(`Error: ${errorMsg.message}`);
      } else {
        window.alert(`Error: Unable to add connection`);
      }
     }
    } catch (e) {
      window.alert(`Error: Unable to add connection`);
      console.error(e);    
    }
  };

  return (
    <div className="d-flex flex-row-reverse">
      <div
        className="p-2"
        style={{
          "paddingTop": "5rem",
          "paddingLeft": "5rem",
        }}
      >
        <button
          type="button"
          className="btn btn-info"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          style={{ "backgroundColor": "#F1A661" }}
        >
          + Add Connection
        </button>
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div
                className="modal-header"
                style={{ "backgroundColor": "#F1A661" }}
              >
                <h5 className="modal-title" id="staticBackdropLabel">
                Connection Details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body" style={{ "backgroundColor": "#FDEEDC" }}>
                <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example1c">
Connection Name                      </label>
                      <input
                        type="text"
                        value={connectionName}
                        onChange={(e) => setconnectionName(e.target.value)}
                        id="userName"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn btn-secondary mr-2"
                      data-bs-dismiss="modal"
                      style={{ "backgroundColor": "#F1A661" }}
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                      style={{ "backgroundColor": "#F1A661" }}
                    >
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddConnection;
