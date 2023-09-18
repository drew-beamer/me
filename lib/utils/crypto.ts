const { subtle } = globalThis.crypto;

export async function pbkdf2(pass: string, salt: string, iterations = 1000, length = 256) {
    const ec = new TextEncoder();
    const key = await subtle.importKey(
        'raw',
        ec.encode(pass),
        'PBKDF2',
        false,
        ['deriveBits']);
    const bits = await subtle.deriveBits({
        name: 'PBKDF2',
        hash: 'SHA-256',
        salt: ec.encode(salt),
        iterations,
    }, key, length);
    return bits;
}