import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../utility/api";

const PageLayout = () => {
  const { page } = useParams();
  const [currentPage, setCurrentPage] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let result;
        if(currentPage) {
          result = await getRequest("pages", { url: currentPage});
        } else {
          result = await getRequest("pages", { url: "home"});
        }
        setData(result);
        console.log("🚀 ~ fetchData ~ url:", currentPage);
        console.log("🚀 ~ fetchData ~ result:", result);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  if (data[0]?.url === "about") {
    return (
      <>
        <p>
          <img src={data[0]?.banner} />
        </p>
        <h2>{data[0]?.title}</h2>
        <p>{data[0]?.content}</p>
      </>
    );
  }

  return (
    <>
      <h2>{data[0]?.title}</h2>
      <p>{data[0]?.content}</p>
      <p>
        <img src={data[0]?.banner} />
      </p>
    </>
  );
};

export default PageLayout;
