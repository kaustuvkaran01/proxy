import fetch from 'node-fetch'

const fetchDayCalendar = async (date, key) => {
    const data = await fetch(
        `https://aplikace.skolaonline.cz/SOLWebApi/api/v1/RozvrhoveUdalosti/${date}`,
        {
            headers: {
                Authorization: `Basic ${key}`,
                Base64: '1',
            },
        }
    ).then((response) => response.json())

    const notes = await fetch(
        `https://aplikace.skolaonline.cz/SOLWebApi/api/v1/PoznamkyKHodine?datumOd=${date}&datumDo=${date}`,
        {
            headers: {
                Authorization: `Basic ${key}`,
                Base64: '1',
            },
        }
    )
        .then((res) => res.json())
        .catch((err) => console.error())

    const editedNotes = notes.Data.map((t1) => {
        return {
            Note: t1.POZNAMKA,
            Order: t1.OBDOBI_DNE_ID,
        }
    })

    const events = []

    const lessons = data.Data.UDALOSTI.filter((item) => {
        if (item.TYP_UDALOSTI.TYP_UDALOSTI_ID !== 'ROZVRH') {
            events.push(item)
            return false
        }
        return true
    })

    let editedLessons = lessons.map((item) => {
        return {
            Name: /\(([^)]+)\)/.exec(item.NAZEV)[1], //For the name just between the brackets
            From: item.CAS_OD.substring(11, 16), // get just starting time
            To: item.CAS_DO,
            Class: item.MISTNOSTI_UDALOSTI[0].NAZEV,
            Teacher:
                item.UCITELE_UDALOSTI[0].JMENO +
                ' ' +
                item.UCITELE_UDALOSTI[0].PRIJMENI,
            Id: item.UDALOST_ID,
            Order: item.OBDOBI_DNE_OD_ID,
        }
    })

    let editedEvents = events.map((t1) => {
        return {
            Event: t1.NAZEV,
            Order: t1.OBDOBI_DNE_OD_ID,
            Color: t1.BARVA,
        }
    })

    let final = editedLessons.map((item) => {
        return {
            ...item,
            Events: editedEvents.find((t2) => t2.Order === item.Order),
            Notes: editedNotes.find((t2) => t2.Order === item.Order),
        }
    })

    return final
}

export default fetchDayCalendar
