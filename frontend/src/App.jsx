// src/App.jsx
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-4">
        <header className="border-b pb-4 mb-2">
          <h1 className="text-2xl font-semibold">Retail Sales Management</h1>
          <p className="text-sm text-gray-500">
            Search, filter, sort and paginate retail transactions.
          </p>
        </header>
        <Home />
      </div>
    </div>
  );
}
