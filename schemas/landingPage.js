export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'ctaButton',
      title: 'Call to Action',
      type: 'object',
      fields: [
        { name: 'text', type: 'string' },
        { name: 'url', type: 'url' },
      ],
    },
  ],
};
