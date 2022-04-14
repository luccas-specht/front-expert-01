import type { NextPage } from 'next';
import Head from 'next/head';

import { Character, Search, PageTemplate } from '@/components';

import styles from '../styles/internals.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated  by create next app" />
      </Head>
      <PageTemplate>
        <div className={styles.content}>
          <h1>Encontre opçõees em Delivery próximos a você</h1>
          <Search />
          <h2>
            Descubra seu novo Delivery favorito. MIlhares de opções a um clique.
          </h2>
        </div>
        <Character />
      </PageTemplate>
    </>
  );
};

export default Home;
