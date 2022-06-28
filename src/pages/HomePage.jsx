
import HomePageHeader from "./../components/Home/HomePageHeader";
import HomePageCards from "./../components/Home/HomePageCards";
import HomeFilter from "./../components/Home/HomeFilter";
import { useState , useEffect} from "react";
import axios from "axios";
import { API } from "./../data/BackEndData";
import { toast } from "react-toastify";

function HomePage() {
  const [showFilter, setShowFilter] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("token"));

  const getProduct = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API + "/v1/get-product", {
        headers: { Authorization: `bearer ${token}` },
      });
      setProducts(res?.data);
      setLoading(false);
    } catch (e) {
      toast.error(e.response.data.error || "Reload This Page!");
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <>
      <HomePageHeader showFilter={showFilter} setShowFilter={setShowFilter} />
      <HomePageCards products={products} loading={loading}/>
      <div className="container">
        <HomeFilter showFilter={showFilter} setShowFilter={setShowFilter} />
      </div>
    </>
  );
}

export default HomePage;
