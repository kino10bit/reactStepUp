import { useLocation } from "react-router-dom";
export const Page1DetailB = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h1>ページ１　詳細B</h1>
    </div>
  );
};
