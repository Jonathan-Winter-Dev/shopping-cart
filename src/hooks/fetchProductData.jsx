import { useState, useEffect } from "react";
import { enrichProductData } from "../utils";

const API_URL = "https://fakestoreapi.com/products";

export default function useProductData() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        const productsData = await response.json();
        const enrichedProductsData = productsData.map((item) =>
          enrichProductData(item),
        );
        setData(enrichedProductsData);
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
  return { data, error, loading };
}
