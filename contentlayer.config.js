// contentlayer.config.js

import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  url: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath,
  },
}

export const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: `**/posts/*.mdx`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    postImage: {
      type: 'string',
      description: 'An image to show as a thumbnail',
      required: true
    }
  },
  computedFields
}))

export const Project = defineDocumentType(() => ({
  name: 'Project',
  contentType: 'mdx',
  filePathPattern: `**/projects/*.mdx`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    categories: {
      type: 'string',
      description: 'A comma-separated string of categories',
      required: true,
    },
    projectImage: {
      type: 'string',
      description: 'An image to show as a thumbnail',
      required: true
    }
  },
  computedFields
}))



export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Project],
  mdx: { remarkPlugins: [remarkGfm] }
})