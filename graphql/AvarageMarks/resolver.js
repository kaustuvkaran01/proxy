import fetch from 'node-fetch'
const fetchAvarageMarks = async (id, key) => {
    const Marks = await fetch(
        `https://aplikace.skolaonline.cz/SOLWebApi/api/v1/HodnoceniStudentSuma?studentID=${id}`,
        {
            headers: {
                Authorization: `Basic ${key}`,
                Base64: '1',
            },
        }
    )
        .then((response) => response.json())
        .catch((err) => console.error())

    const AvarageMarks = Marks.Data.HODNOCENI.map((item) => {
        return {
            Subject: item.PREDMET_NAZEV,
            Teacher: item.UCITEL_NAZEV,
            Marks: item.HODNOCENI_PRUMER_TEXT,
            Id: item.PREDMET_ID,
        }
    })

    return AvarageMarks
}

export default fetchAvarageMarks
