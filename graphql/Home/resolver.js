import fetch from 'node-fetch'

const fetchDaySchedule = async (date, key) => {
    const day = await fetch(
        `https://aplikace.skolaonline.cz/SOLWebApi/api/v1/RozvrhoveUdalosti/${date}`,
        {
            headers: {
                Authorization: `Basic ${key}`,
                Base64: '1',
            },
        }
    )
        .then((res) => res.json())
        .catch((err) => console.error())

    const events = []

    // filter events and lessons
    const lessons = day.Data.UDALOSTI.filter((item) => {
        if (item.TYP_UDALOSTI.TYP_UDALOSTI_ID !== 'ROZVRH') {
            events.push(item)
            return false
        }
        return true
    })

    let editedEvents = events.map((t1) => {
        return {
            Event: t1.NAZEV,
            Order: t1.OBDOBI_DNE_OD_ID,
            SecondOrder: t1.OBDOBI_DNE_DO_ID,
            Color: t1.BARVA,
        }
    })

    const editedLessons = lessons.map((t1) => {
        if (t1.TYP_UDALOSTI.TYP_UDALOSTI_ID === 'ROZVRH') {
            return {
                Name: t1.NAZEV,
                TimeFrom: t1.CAS_OD,
                TimeTo: t1.CAS_DO,
                Room: t1.MISTNOSTI_UDALOSTI[0].NAZEV,
                Teacher:
                    t1.UCITELE_UDALOSTI[0].JMENO +
                    ' ' +
                    t1.UCITELE_UDALOSTI[0].PRIJMENI,
                SubjectNum: t1.UDALOST_ID,
                SubjectId: t1.UDALOST_ID + t1.OBDOBI_DNE_OD_ID,
                Order: t1.OBDOBI_DNE_OD_ID,
            }
        }
    })
    // This combines Events and normal lessons
    let final = editedLessons.map((item) => {
        return {
            ...item,
            Events: editedEvents.find((t2) => {
                if (t2.Order === item.Order || t2.SecondOrder === item.Order) {
                    // Max 2 hours long event
                    return true
                }
            }),
        }
    })

    return final
}

const fetchHomewoks = async (key) => {
    const homeworks = await fetch(
        'https://aplikace.skolaonline.cz/SOLWebApi/api/v1/DomaciUkoly',
        {
            headers: {
                Authorization: `Basic ${key}`,
                Base64: '1',
            },
        }
    )
        .then((res) => res.json())
        .catch((err) => console.error())

    const editedHomeworks = homeworks.Data.map((t1) => {
        return {
            Name: t1.NAZEV_UKOLU,
            Info: t1.PODROBNE_ZADANI,
            TimeTo: t1.TERMIN_ODEVZDANI,
            id: t1.UKOL_ID,
        }
    })

    return editedHomeworks
}

const getDate = () => {
    let today = new Date()
    let dd = String(today.getDate())
    let mm = String(today.getMonth() + 1) //January is 0!
    let yyyy = today.getFullYear()

    return yyyy + '-' + mm + '-' + dd
}

const fetchHomeScreen = async (id, key) => {
    return Promise.all([fetchDaySchedule(getDate(), key), fetchHomewoks(key)])
}

export default fetchHomeScreen
