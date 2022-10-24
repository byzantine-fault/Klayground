import type { AppProps } from 'next/app';
import LayoutComponent from '../components/Layout/LayoutComponent';
import Head from 'next/head';
import '../styles/customTheme.less';
import '../styles/theme.css';
import '../styles/fonts.css';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';
import axios from 'axios';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      {/* <SessionProvider session={session}> */}
      <SWRConfig
        value={{
          fetcher: (url: string) => axios.get(url).then((res) => res.data),
          onError: (error) => {
            console.error(error);
          },
        }}
      >
        <LayoutComponent>
          <Head>
            <title>KlayGround</title>
            <meta name="description" content="KlayGround | 선별된 NFT 마켓플레이스" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </LayoutComponent>
      </SWRConfig>
      {/* </SessionProvider> */}
    </RecoilRoot>
  );
}

export default MyApp;
