import "./listBox.styles.css";
import List from "../list/list.component";

const ListBox = ({ texts }) => {
  let lists = [];
  for (let text of texts) {
    lists.push(<List text={text} />);
  }
  return <div className="list-box">{lists}</div>;
};

export default ListBox;
