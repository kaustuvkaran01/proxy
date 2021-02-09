import fetch from 'node-fetch'
import types from '../../utilz.js'
const fetchIndividualMarks = async (date, key) => {
    const data = await fetch(
        `https://aplikace.skolaonline.cz/SOLWebApi/api/v1/VypisHodnoceniStudent?datumOd=${date[0]}&datumDo=${date[1]}`,
        {
            headers: {
                Authorization: `Basic ${key}`,
                Base64: '1',
            },
        }
    )
        .then((response) => response.json())
        .catch((err) => console.error())

    const marks = data.Data.Hodnoceni.map((item) => {
        return {
            Name: item.NAZEV,
            Mark: item.VYSLEDEK,
            Date: item.DATUM.substring(0, 10),
            Id: item.UDALOST_ID,
            Value: types.find(
                (t2) => t2.DRUH_HODNOCENI_ID === item.DRUH_HODNOCENI_ID
            ),
        }
    }).sort((a, b) => new Date(b.Date) - new Date(a.Date))
    return marks
}
export default fetchIndividualMarks
