// src/hooks/useSales.js
import { useEffect, useState } from "react";
import api from "../services/api";

export default function useSales(params) {
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    api
      .get("/sales", { params })
      .then((res) => {
        setData(res.data.data);
        setMeta({
          total: res.data.total,
          page: res.data.page,
          totalPages: res.data.totalPages,
          hasNextPage: res.data.hasNextPage,
          hasPrevPage: res.data.hasPrevPage,
        });
      })
      .finally(() => setLoading(false));
  }, [JSON.stringify(params)]);

  return { data, meta, loading };
}

