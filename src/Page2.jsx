import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>ページ２</h1>
      <Link to="/page2/100">url Parameter 100</Link>
      <br />
      <Link to="/page2/100?name=hogehoge">クエリパラメータ</Link>
    </div>
  );
};
