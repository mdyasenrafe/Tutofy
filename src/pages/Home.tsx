import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/home/Banner";
import StatsOverview from "../components/home/StatsOverview";

export default function Home() {
  return (
    <Layout>
      <section>
        <Banner />
        <StatsOverview />
      </section>
    </Layout>
  );
}
