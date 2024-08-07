import {defineField, defineType} from 'sanity'

export const social = defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description:'Platform for Social Media',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
    },
    {
      name: 'network',
      title: 'Network',
      type: 'string',
    },
  ],
})
