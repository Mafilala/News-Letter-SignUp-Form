import { useState } from "react";
import "./form.styles.css";

const Form = ({ email, setEmail, SetSubscribed }) => {
  const [valid, setValid] = useState(true);
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  const handleSubmit = (e) => {
    if (isValidEmail(email)) {
      SetSubscribed(true);
    } else {
      setValid(false);
    }
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="label-and-message-container">
        <label htmlFor="email">Email Address</label>
        <p className="warning">{valid ? "" : "Valid email required"}</p>
      </div>

      <input
        onChange={(e) => setEmail(e.target.value)}
        className={valid ? "valid" : "invalid"}
        id="email"
        type="text"
        placeholder="lorem@exampleCompany.com"
      />
      <button type="sumbit"> Subscribe to monthly newsletter</button>
    </form>
  );
};

export default Form;
