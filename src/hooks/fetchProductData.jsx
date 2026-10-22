import { useState, useEffect } from "react";
import { nativeFetch, productDataExtraction } from "../utils";

const API_URL = "https://dummyjson.com/products";

export default function useProductData() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await nativeFetch(API_URL);
        setData(productDataExtraction(productsData.products));
        setError(null);
      } catch (error) {
        setError(error.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { data, setData, error, loading };
}
