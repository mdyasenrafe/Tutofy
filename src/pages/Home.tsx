import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/home/Banner";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Layout>
      <section>
        <Container>
          <Banner />
        </Container>
      </section>
    </Layout>
  );
}
