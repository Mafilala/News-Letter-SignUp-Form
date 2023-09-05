import "./list.styles.css";

const List = ({ text }) => {
  return (
    <div>
      <img className="icon" src="src/assets/icon-list.svg" />
      <p className="list">{text}</p>
    </div>
  );
};

export default List;
