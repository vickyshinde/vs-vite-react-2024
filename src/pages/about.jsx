import { useEffect, useState } from 'react';
import { getRequest } from '../utility/api';

// eslint-disable-next-line react/prop-types
const About = ({ page }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await getRequest('pages', { url: page });
        setData(result);
        console.log("🚀 ~ fetchData ~ result:", result)
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  return <><h2>{data[0]?.title}</h2>
  <p>{data[0]?.content}</p>
  <p><img src={data[0]?.banner} width="100%" /></p>
  </>
}

export default About;
