import type { NextPage } from 'next';
import Head from 'next/head';

import { PageTemplate } from '@/components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated  by create next app" />
      </Head>
      <PageTemplate />
    </>
  );
};

export default Home;
