export const getClients = async () => {
    const result = await fetch(import.meta.env.VITE_API_URL);
    return await result.json();
}

export const getClient = async (clientId) => {
    const result = await fetch(`${import.meta.env.VITE_API_URL}/${clientId}`)
    return await result.json();
}

export const saveClient = async (datos) => {
    try{
        console.log(datos)
        const result = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'content-type': 'application/json'
            }
        });

        return await result.json();
    }catch(error)
    {
        console.log(error);
    }

}
