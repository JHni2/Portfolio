export default {
  title: 'Comment',
  name: 'comment',
  type: 'document',
  fields: [
    {
      title: 'Emoji',
      name: 'emoji',
      type: 'string',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'string',
    },
  ],

  preview: {
    select: {
      title: 'emoji',
      subtitle: 'content',
    },
  },
}
