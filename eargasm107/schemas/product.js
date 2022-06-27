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
    ],
  };