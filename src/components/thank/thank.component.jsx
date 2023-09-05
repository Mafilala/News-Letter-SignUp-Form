import "./thank.styles.css";

const Thank = ({ email, SetSubscribed }) => {
  return (
    <div className="thank-you-box">
      <img className="thank-you-icon" src="/icon-success.svg" alt="" />
      <div className="message-container">
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription(s).
        </p>
      </div>

      <button onClick={() => SetSubscribed(false)} className="dimiss-button">
        {" "}
        Dismiss message
      </button>
    </div>
  );
};

export default Thank;
