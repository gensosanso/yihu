import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import FlightsPage from "./components/flights/FlightsPage";
import HotelsPage from "./components/hotels/HotelsPage";
import DealsPage from "./components/deals/DealsPage";
import TransfersPage from "./components/transfers/TransfersPage";
import CarRentalPage from "./components/cars/CarRentalPage";
import PackagesPage from "./components/packages/PackagesPage";
import Layout from "./components/layout/Layout";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights" element={<FlightsPage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/deals" element={<DealsPage />} />
          <Route path="/transfers" element={<TransfersPage />} />
          <Route path="/cars" element={<CarRentalPage />} />
          <Route path="/packages" element={<PackagesPage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </Layout>
    </Suspense>
  );
}

export default App;
