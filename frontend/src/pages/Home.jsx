// src/pages/Home.jsx
import { useState } from "react";
import useSales from "../hooks/useSales";

import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import SortDropdown from "../components/SortDropdown";
import SalesTable from "../components/SalesTable";
import Pagination from "../components/Pagination";

export default function Home() {
  const [params, setParams] = useState({
    search: "",
    page: 1,
    sort: "",
    gender: "",
    region: "",
    category: "",
    payment: "",
    tags: "",
    ageMin: "",
    ageMax: "",
    startDate: "",
    endDate: "",
  });

  const update = (key, value) => {
    setParams((prev) => ({
      ...prev,
      [key]: value,
      page: key === "page" ? value : 1,
    }));
  };

  const { data, meta, loading } = useSales(params);

  return (
    <div className="space-y-6">
      {/* Search */}
      <section>
        <h2 className="text-sm font-semibold text-gray-600 mb-2">Search</h2>
        <SearchBar
          value={params.search}
          onChange={(v) => update("search", v)}
        />
      </section>

      {/* Filters */}
      <section>
        <h2 className="text-sm font-semibold text-gray-600 mb-2">Filters</h2>
        <Filters params={params} update={update} />
      </section>

      {/* Sorting */}
      <section className="flex justify-end">
        <SortDropdown
          value={params.sort}
          onChange={(v) => update("sort", v)}
        />
      </section>

      {/* Table */}
      <section>
        {loading ? (
          <div className="text-center py-10 text-gray-500">Loading...</div>
        ) : (
          <SalesTable data={data} />
        )}
      </section>

      {/* Pagination */}
      <section>
        <Pagination meta={meta} onPageChange={(p) => update("page", p)} />
      </section>
    </div>
  );
}

