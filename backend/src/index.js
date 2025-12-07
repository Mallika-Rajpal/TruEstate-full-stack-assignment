const express = require("express");
const cors = require("cors");
const { loadCSV } = require("./utils/loadData");
const salesRoutes = require("./routes/sales.routes");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "TruEstate Retail Sales API" });
});

app.use("/api/sales", salesRoutes);

loadCSV()
  .then(() => {
    console.log("✅ Sales data loaded");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ Failed to load data:", err);
    process.exit(1);
  });

