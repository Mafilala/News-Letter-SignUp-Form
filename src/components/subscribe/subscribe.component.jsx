import "./subscribe.styles.css";
import ListBox from "../listBox/listBox.component";
import Form from "../form/form.component";
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
        <img src="/illustration-sign-up-desktop.svg" alt="" />
      </div>
    </main>
  );
  ß;
};

export default Subscribe;
