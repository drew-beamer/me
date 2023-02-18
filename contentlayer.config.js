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
  filePathPattern: `**/*.mdx`,
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

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: { remarkPlugins: [remarkGfm] }
})