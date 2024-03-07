import Head from "next/head";

import { Hero, MainLayout, Tecnologies } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Franzua Plasencia</title>
      </Head>
      {/* Content */}
      <Hero />
      <main>
        {/* Tecnologies */}
        <Tecnologies />
        {/* Projects */}
      </main>
      {/* Contact Me */}
    </>
  );
}

Home.getLayout = function getLayout(page: JSX.Element) {
  return <MainLayout>{page}</MainLayout>;
};
