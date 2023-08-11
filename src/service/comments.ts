import { assetsURL, client } from './sanity';

export async function getComments() {
  return client.fetch(
    `*[_type == "comment"] | order(_createdAt desc){
      ...,
      "id":_id,
      "createdAt":_createdAt
    }`
  );
}

export async function createComment(emoji: string, content: string) {
  return fetch(assetsURL, {
    method: 'POST',
    headers: {
      'content-type': 'string',
      authorization: `Bearer ${process.env.SANITY_SECRET_TOKEN}`,
    },
    body: content,
  })
    .then((res) => res.json())
    .then(() => {
      return client.create(
        {
          _type: 'comment',
          emoji: emoji,
          content: content,
        },
        { autoGenerateArrayKeys: true }
      );
    });
}
