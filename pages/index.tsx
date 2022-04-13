import type { NextPage } from 'next';
import Head from 'next/head';

import { Dish, PageTemplate } from '@/components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated  by create next app" />
      </Head>
      <PageTemplate>
        {/*  <h1>Encontre opçõees em Delivery próximos a você</h1>
        <h2>
          Descubra seu novo Delivery favorito. MIlhares de opções a um clique.
        </h2> */}
        <Dish />
      </PageTemplate>
    </>
  );
};

export default Home;
