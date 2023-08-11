import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: '2023-08-11', // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.SANITY_SECRET_TOKEN, // Only if you want to update content with the client
});

// 'https://myProjectId.api.sanity.io/v2021-03-25/assets/images/myDataset'
export const assetsURL = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/assets/images/${process.env.SANITY_DATASET}`;
