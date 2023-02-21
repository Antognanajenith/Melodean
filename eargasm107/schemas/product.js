export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      { 
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      { 
        name: 'Category',
        title: 'Category',
        type: 'string',
      },
      { 
        name: 'details',
        title: 'Details',
        type: 'string',
      },
      { 
        name: 'Brand',
        title: 'Brand',
        type: 'string',
      },
      { 
        name: 'Imglnk',
        title: 'Imglnk',
        type: 'string',
      },
      { 
        name: 'Imglnk2',
        title: 'Imglnk2',
        type: 'url',
      },
      { 
        name: 'Imglnk3',
        title: 'Imglnk3',
        type: 'url',
      },
      { 
        name: 'Imglnk4',
        title: 'Imglnk4',
        type: 'url',
      },
      {
        title: 'Specs',
        name: 'Specs',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        title: 'Descheading',
        name: 'Descheading',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        title: 'Descbrief',
        name: 'Descbrief',
        type: 'array',
        of: [{type: 'string'}]
      },
     
    ],
  };