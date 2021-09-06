import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <div>
      <p>ABC</p>
      <button>DEF</button>
      <p>パラメータは{id}です</p>
      <p>クエリパラメータは{query.get("name")}です。</p>
    </div>
  );
};
