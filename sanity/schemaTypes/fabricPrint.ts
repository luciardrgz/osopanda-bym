export default {
    name: 'fabricPrint',
    type: 'document',
    title: 'Estampado',
    fields: [
      {
        name: 'fabricPrintName',
        type: 'string',
        title: 'Nombre',
      },
      {
        name: 'fabricPrintSlug',
        type: 'slug',
        title: 'Identificador',
        options: {
          source: 'fabricPrintName',
        },
      },
      {
        name: 'fabricPrintImg',
        type: 'image',
        title: 'Imagen',
      },
    ],
  }
  