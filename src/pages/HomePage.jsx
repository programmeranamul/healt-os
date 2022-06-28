import HomePageHeader from "./../components/Home/HomePageHeader";
import HomePageCards from "./../components/Home/HomePageCards";
import HomeFilter from "./../components/Home/HomeFilter";
import { useState, useEffect } from "react";
import axios from "axios";
import { API } from "./../data/BackEndData";
import { toast } from "react-toastify";

function HomePage() {
  const [showFilter, setShowFilter] = useState(false);
  const [products, setProducts] = useState([]);
  const [copyProducts, setCopyProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("token"));

  const getProduct = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API + "/v1/get-product", {
        headers: { Authorization: `bearer ${token}` },
      });
      setProducts(res?.data);
      setCopyProducts(res?.data);
      setLoading(false);
    } catch (e) {
      toast.error(e.response.data.error || "Reload This Page!");
      setLoading(false);
    }
  };

  console.log("products", products);
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <HomePageHeader
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        products={products}
        setProducts={setProducts}
      />
      <HomePageCards products={products} loading={loading} />
      <div className="container">
        <HomeFilter
          showFilter={showFilter}
          setShowFilter={setShowFilter}
          copyProducts={copyProducts}
          products={products}
          setProducts={setProducts}
        />
      </div>
    </>
  );
}

export default HomePage;
