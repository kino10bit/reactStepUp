import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <p>ページは存在しません。</p>
      <Link to="/">TOPへ</Link>
    </div>
  );
};
