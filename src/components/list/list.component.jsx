import "./list.styles.css";

const List = ({ text }) => {
  return (
    <div>
      <img className="icon" src="/icon-list.svg" alt="icon" />
      <p className="list">{text}</p>
    </div>
  );
};

export default List;
