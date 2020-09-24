import Head from "next/head";
import "../styles/Home.module.css";


import Home from "./Home";

export default function Index() {
  return (
    <div className="container">
      <Head>
        <title>PattananNP</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Head>
        <meta property="og:title" content="PattananNP" key="title" />
      </Head>
      <Head>
        <meta property="og:description" content="Pattanan Numpong Website" />
       
      </Head>

      <Home />
    </div>
  );
}
