import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import AddUser from "./AddUser";
import DeleteUser from "./DeleteUser";

const Users = (props) => {
  const endpointUrl = "https://{{DOMAIN}}/api/v2/users";
  const [trigger, setTrigger] = useState(true);

  const options = {
    method: "GET",
    headers: props.headerParameters,
  };

  const optionsStr = JSON.stringify(options);
  const { data, responseStatus } = useFetch(endpointUrl, optionsStr, trigger);

  if (responseStatus === 0 && data === "") {
    return (
      <div
        className="d-flex justify-content-center"
        style={{
          paddingTop: "5 rem",
        }}
      >
        <div
          className="spinner-border"
          style={{ width: "5rem", height: "5rem" }}
          role="status"
        >
          <div className="visually-hidden ">Loading...</div>
        </div>
      </div>
    );
  } else if (responseStatus !== 200) {
    return (
      <div
        className="d-flex justify-content-center"
        style={{
          paddingTop: "25%",
        }}
      >
        <p>
          Something went wrong, please update the access token and try again!
        </p>
      </div>
    );
  } else if (data.length === 0) {
    return (
      <div>
      <div>
      <AddUser
          headers={props.headerParameters}
          trigger={trigger}
          setTrigger={setTrigger}
        />
        </div>
      <div
        className="d-flex justify-content-center"
        style={{
          paddingTop: "25%",
        }}
      >
        <p>No User found</p>
      </div>
      </div>
    );
  } else if (data !== "") {
    return (
      <div>
        <AddUser
          headers={props.headerParameters}
          trigger={trigger}
          setTrigger={setTrigger}
        />
        <div
          style={{
            padding: "5rem",
          }}
        >
          <table className="table table-hover" style={{ Margin: "5rem" }}>
            <thead>
              <tr style={{ "backgroundColor": "#F1A661" }}>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">User ID</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody style={{ "backgroundColor": "#FFD8A9" }}>
              {data.map((users, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{users.name}</td>
                  <td>{users.email}</td>
                  <td>{users.user_id}</td>
                  <td>
                    <DeleteUser
                      UserId={users.user_id}
                      headers={props.headerParameters}
                      trigger={trigger}
                      setTrigger={setTrigger}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};
export default Users;
