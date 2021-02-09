import fetch from 'node-fetch'

const authFetch = async (name, key) => {
    return await fetch(
        'https://aplikace.skolaonline.cz/SOLWebApi/api/v1/AuthorizationStatus',
        {
            headers: {
                Authorization: `Basic ${key}`,
                Base64: '1',
            },
        }
    )
        .then((res) => res.json())
        .catch((err) => console.error())
}

export default authFetch
