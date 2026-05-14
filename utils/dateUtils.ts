export function getCurrentTimestamp(): string {

    const now = new Date();

    return now.toISOString().replace(/[:.]/g, '-');

}