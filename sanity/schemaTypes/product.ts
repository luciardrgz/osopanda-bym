export default {
  name: 'product',
  type: 'document',
  title: 'Producto',
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
      name: 'productCategory',
      type: 'reference',
      title: 'Categoría',
      to: [{type: 'category'}],
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
      name: 'productFabricPrints',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'fabricPrint'}],
        },
      ],
      title: 'Estampados',
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
