import fetch from 'node-fetch'

const fetchUser = async (name, key) => {
    return await fetch(
        'https://aplikace.skolaonline.cz/SOLWebApi/api/v1/UzivatelInfo',
        {
            body: JSON.stringify(name),
            headers: {
                Authorization: `Basic ${key}`,
                Base64: '1',
                'Content-Type': 'application/json; charset=utf-8',
            },
            method: 'POST',
        }
    )
        .then((res) => res.json())
        .catch((err) => console.error())
}

export default fetchUser
