export function getFullUrl(path: string) {
    return new URL(path, import.meta.env.PUBLIC_SITE_URL).toString();
}
