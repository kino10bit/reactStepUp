import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(10).keys()];

  const history = useHistory();

  const onClickdetailA = () => history.push("/page1/detailA");

  return (
    <div>
      <h1>ページ１</h1>
      <Link to="/page1/detailA">詳細A</Link>
      <br />
      <Link to="/page1/detailB">詳細B</Link>
      <br />
      <Link to={{ pathname: "/page1/detailB", state: arr }}>stateを渡す</Link>
      <br />
      <button onClick={onClickdetailA}>詳細Aへ</button>
    </div>
  );
};
