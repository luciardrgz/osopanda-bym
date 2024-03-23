export default {
  name: 'category',
  type: 'document',
  title: 'Categoría',
  fields: [
    {
      name: 'categoryName',
      type: 'string',
      title: 'Categoría',
    },
    {
      name: 'categorySlug',
      type: 'slug',
      title: 'Identificador',
      options: {
        source: 'categoryName',
      },
    },
  ],
}
