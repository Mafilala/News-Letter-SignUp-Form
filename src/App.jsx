import { useState } from "react";
import "./App.css";
import Thank from "./components/thank/thank.component";
import Subscribe from "./components/subscribe/subscribe.component";

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
