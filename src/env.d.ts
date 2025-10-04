interface ImportMetaEnv {
    readonly PUBLIC_SITE_URL: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
