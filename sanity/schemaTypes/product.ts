export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'productName',
      type: 'string',
      title: 'Nombre del producto',
    },
    {
      name: 'productPrice',
      type: 'number',
      title: 'Precio',
    },
    {
      name: 'productSlug',
      type: 'slug',
      title: 'Identificador',
      options: {
        source: 'productName',
      },
    },
    {
      name: 'productImage',
      type: 'image',
      title: 'Imagen',
    },
    {
      name: 'productSmallDescription',
      type: 'text',
      title: 'Descripción breve',
    },
    {
      name: 'productLongDescription',
      type: 'array',
      title: 'Descripción extensa',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
