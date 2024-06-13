import { useParams } from "react-router-dom";

export default function News() {
  const { id } = useParams();
  console.log(id);
  return <div>This is news</div>;
}
