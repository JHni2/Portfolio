import { client } from './sanity';

export async function getComments() {
  return client.fetch(
    `*[_type == "comment"]{
      ...,
      "id":_id,
      "createdAt":_createdAt
    }`
  );
}
