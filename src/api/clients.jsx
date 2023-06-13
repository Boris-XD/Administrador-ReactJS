export const getClients = async () => {
    const result = await fetch(import.meta.env.VITE_API_URL);
    return await result.json();
}