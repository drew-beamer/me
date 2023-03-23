// contentlayer.config.js

import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'

/** @type {import('contentlayer/source-files').ComputedFields} */
const generalCalculatedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath,
  },
}

/** @type {import('contentlayer/source-files').ComputedFields} */
const postCalculatedFields = {
  jsonLD: {
    type: 'object',
    resolve: (doc) => ({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": doc.title,
      "description": doc.description,
      "dateCreated": new Date(doc.date),
      "datePublished": new Date(doc.date),
      "about": {
        "@type": "Thing",
        "name": doc.about
      },
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "url": "https://www.drewbeamer.io/" + doc._raw.flattenedPath,
      "author": {
        "@type": "Person",
        "name": "Drew Beamer",
        "url": "https://www.drewbeamer.io/"
      }
    })
  }
}

/** @type {import('contentlayer/source-files').ComputedFields} */
const projectCalculatedFields = {
  jsonLD: {
    type: 'object',
    resolve: (doc) => ({
      "@context": "https://schema.org",
      "@type": "Project",
      "name": doc.title,
      "description": doc.description,
      "keywords": doc.categories,
      "founder": {
        "@type": "Person",
        "name": "Drew Beamer",
        "url": "https://www.drewbeamer.io/",
      }
    })
  }
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
    },
    description: {
      type: 'string',
      description: 'A description of the post',
      required: true
    },
    about: {
      type: 'string',
      description: 'A couple words at most identifying the post topic',
    }
  },
  computedFields: {
    ...generalCalculatedFields,
    ...postCalculatedFields

  }
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
  computedFields: {
    ...generalCalculatedFields,
    ...projectCalculatedFields
  },
}))



export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Project],
  mdx: { remarkPlugins: [remarkGfm] }
})