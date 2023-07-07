
import { allProjects, allPosts, Project, Post } from 'contentlayer/generated';

export function projectFromSlug(slug: string): Project {

    const project = allProjects.find((post) => {
        return "projects/" + slug === post.slug;
    })
    if (project === undefined) {
        throw new Error("Project could not be found");
    }
    return project;
}

export function postFromSlug(slug: string): Post {
    const post = allPosts.find((post) => {
        return ("posts/" + slug) === post.slug;
    })
    if (post === undefined) {
        throw new Error("Project could not be found");
    }
    return post;
}