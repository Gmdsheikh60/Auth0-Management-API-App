import React, { useState } from "react";

const AddUser = (props) => {
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [userConnection, setuserConnection] = useState("");
  const endpointUrl = `https:/{{DOMAIN}}/api/v2/users`;
  let options = {
    method: "POST",
    headers: props.headers,
    body: "",
  };
  let randomId = (Math.random() + 1).toString(36).substring(7);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const bodyParameters = JSON.stringify({
      email: `${userEmail}`,
      email_verified: false,
      name: `${userName}`,
      user_id: randomId,
      connection: `${userConnection}`,
      password: `${userPassword}`,
      username: `${userName}`,
    });
    options.body = bodyParameters;
    try {
      const response = await fetch(endpointUrl, options);
      e.target.reset();
      console.log(response)
      if (response.ok) {
        props.setTrigger(!props.trigger);
     }
     else if(!response.ok){
      const errorMsg = await response.json();
      if (errorMsg.message) {
        window.alert(`Error: ${errorMsg.message}`);
      } else {
        window.alert(`Error: Unable to add user`);
      }
     }
    } catch (e) {
      window.alert(`Error: Unable to add user`);
      console.error(e);    
    }
  };
  return (
    <div className="d-flex flex-row-reverse">
      <div
        className="p-2"
        style={{
          "padding-top": "5rem",
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
          + Add User
        </button>
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
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
                  User Details
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
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={userName}
                        onChange={(e) => setuserName(e.target.value)}
                        id="userName"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example3c">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="userEmail"
                        value={userEmail}
                        onChange={(e) => setuserEmail(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example4c">
                        Password
                      </label>
                      <input
                        type="password"
                        value={userPassword}
                        onChange={(e) => setuserPassword(e.target.value)}
                        id="userPassword"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example1c">
                        Connection
                      </label>
                      <input
                        type="text"
                        value={userConnection}
                        onChange={(e) => setuserConnection(e.target.value)}
                        id="userConnection"
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

export default AddUser;
