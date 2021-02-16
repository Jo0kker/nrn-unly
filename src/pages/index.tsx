import { CommonServerSideParams } from '@/app/types/CommonServerSideParams';
import { SSGPageProps } from '@/layouts/core/types/SSGPageProps';
import {
  getDefaultStaticPaths,
  getDefaultStaticProps,
} from '@/layouts/default/defaultSSG';
import {
  GetStaticPaths,
  GetStaticProps
} from 'next';
// eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
import React from 'react';


/**
 * Only executed on the server side at build time
 * Necessary when a page has dynamic routes and uses "getStaticProps"
 */
export const getStaticPaths: GetStaticPaths<CommonServerSideParams> = getDefaultStaticPaths;

/**
 * Only executed on the server side at build time.
 *
 * @return Props (as "SSGPageProps") that will be passed to the Page component, as props
 *
 * @see https://github.com/vercel/next.js/discussions/10949#discussioncomment-6884
 * @see https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 */
export const getStaticProps: GetStaticProps<SSGPageProps, CommonServerSideParams> = getDefaultStaticProps;

/**
 * Terms page, that displays all legal-related information.
 *
 * Basically displays a bunch of markdown that's coming from the CMS.
 */
const HomePage = (): JSX.Element => {

  return (
    <h1>Hello world</h1>
  );
};

export default HomePage;
