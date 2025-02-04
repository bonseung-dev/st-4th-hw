import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Detail() {
  const { id } = useParams();

  useEffect(() => {
    console.log("Detail ID:", id);
  }, [id]);

  return (
    <div>
      <h1>Detail Page</h1>
      <p>Detail ID: {id}</p>
    </div>
  );
}

export default Detail;
