export default {
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'HeroImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'backgroundInformation',
      title: 'Background Information',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    },
    {
      name: 'profilePic',
      title: 'ProfilePic',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'phoneNumber',
      title: 'PhoneNumber',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of:[{ type: 'reference', title:'reference', to:{ type:'social'}}]
    },
  ],
};
