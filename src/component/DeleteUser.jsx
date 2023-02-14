const DeleteUser = (props) => {
  const userId = props.UserId;
  const endpointUrl = `https:/{{DOMAIN}}/api/v2/users/${userId}`;
  const options = {
    method: "DELETE",
    headers: props.headers,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(endpointUrl, options);
      if (response.ok) {
        props.setTrigger(!props.trigger);
     }
     else if(!response.ok){
      console.log(response)
      const errorMsg = await response.json();
      if (errorMsg.message) {
        window.alert(`Error: ${errorMsg.message}`);
      } else {
        window.alert(`Error: Unable to Delete user`);
      }
     }
    } catch (e) {
      window.alert(`Error: Unable to Delete user`);
      console.error(e);    
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button
          className="btn btn-info"
          type="submit"
          style={{ "backgroundColor": "#F1A661" }}
        >
          Delete
        </button>
      </form>
    </div>
  );
};

export default DeleteUser;
