import React, { FC, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "components/layout";
import NotFound from "../components/shared/widgets/not-found";

import { About, Contact, Home } from "./RouterComponents";

const Loading = () => {
  return <div>Loading...</div>;
};

const Routers: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default Routers;
