import { useState } from "react";
import ListBox from "./components/listBox/listBox.component";
import Form from "./components/form/form.component";
import "./App.css";
import Thank from "./thank/thank.component";

const lists = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

const Subscribe = ({ email, setEmail, SetSubscribed }) => {
  return (
    <main className="app">
      <article className="left">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ListBox texts={lists} />
        <Form email={email} setEmail={setEmail} SetSubscribed={SetSubscribed} />
      </article>
      <div className="image-container right">
        <img src="src/assets/images/illustration-sign-up-desktop.svg" alt="" />
      </div>
    </main>
  );
};

function App() {
  const [subscribed, SetSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  let jsx = (
    <Subscribe
      email={email}
      setEmail={setEmail}
      SetSubscribed={SetSubscribed}
    />
  );
  if (subscribed) jsx = <Thank email={email} />;
  return <>{jsx}</>;
}

export default App;
