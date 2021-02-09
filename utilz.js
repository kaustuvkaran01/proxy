import fetch from 'node-fetch'

export const types = [
    {
        DRUH_HODNOCENI_ID: 'C6179',
        NAZEV: 'PPR 2',
        POPIS: 'Písemná práce 2',
        VAHA: 0.4,
        PORADI_ZOBRAZENI: 2,
    },
    {
        DRUH_HODNOCENI_ID: 'C6178',
        NAZEV: 'PPR 1',
        POPIS: 'Písemná práce 1',
        VAHA: 0.2,
        PORADI_ZOBRAZENI: 2,
    },
    {
        DRUH_HODNOCENI_ID: 'C6180',
        NAZEV: 'PPR 3',
        POPIS: 'Písemná práce 3',
        VAHA: 0.6,
        PORADI_ZOBRAZENI: 3,
    },
    {
        DRUH_HODNOCENI_ID: 'C6181',
        NAZEV: 'PPR 4',
        POPIS: 'Písemná práce 4',
        VAHA: 0.8,
        PORADI_ZOBRAZENI: 4,
    },
    {
        DRUH_HODNOCENI_ID: 'C6182',
        NAZEV: 'PPR 5',
        POPIS: 'Písemná práce 5',
        VAHA: 1.0,
        PORADI_ZOBRAZENI: 5,
    },
    {
        DRUH_HODNOCENI_ID: 'C6183',
        NAZEV: 'ÚZK 1',
        POPIS: 'Ústní zkouška 1',
        VAHA: 0.2,
        PORADI_ZOBRAZENI: 6,
    },
    {
        DRUH_HODNOCENI_ID: 'C6184',
        NAZEV: 'ÚZK 2',
        POPIS: 'Ústní zkouška 2',
        VAHA: 0.4,
        PORADI_ZOBRAZENI: 7,
    },
    {
        DRUH_HODNOCENI_ID: 'C6185',
        NAZEV: 'ÚZK 3',
        POPIS: 'Ústní zkouška 3',
        VAHA: 0.6,
        PORADI_ZOBRAZENI: 8,
    },
    {
        DRUH_HODNOCENI_ID: 'C6186',
        NAZEV: 'ÚZK 4',
        POPIS: 'Ústní zkouška 4',
        VAHA: 0.8,
        PORADI_ZOBRAZENI: 9,
    },
    {
        DRUH_HODNOCENI_ID: 'C6187',
        NAZEV: 'ÚZK 5',
        POPIS: 'Ústní zkouška 5',
        VAHA: 1.0,
        PORADI_ZOBRAZENI: 10,
    },
    {
        DRUH_HODNOCENI_ID: 'C6188',
        NAZEV: 'PRČ 1',
        POPIS: 'Praktická činnost 1',
        VAHA: 0.2,
        PORADI_ZOBRAZENI: 11,
    },
    {
        DRUH_HODNOCENI_ID: 'C6189',
        NAZEV: 'PRČ 2',
        POPIS: 'Praktická činnost 2',
        VAHA: 0.4,
        PORADI_ZOBRAZENI: 12,
    },
    {
        DRUH_HODNOCENI_ID: 'C6190',
        NAZEV: 'PRČ 3',
        POPIS: 'Praktická činnost 3',
        VAHA: 0.6,
        PORADI_ZOBRAZENI: 13,
    },
    {
        DRUH_HODNOCENI_ID: 'C6191',
        NAZEV: 'PRČ 4',
        POPIS: 'Praktická činnost 4',
        VAHA: 0.8,
        PORADI_ZOBRAZENI: 14,
    },
    {
        DRUH_HODNOCENI_ID: 'C6192',
        NAZEV: 'PRČ 5',
        POPIS: 'Praktická činnost 5',
        VAHA: 1.0,
        PORADI_ZOBRAZENI: 15,
    },
    {
        DRUH_HODNOCENI_ID: 'C6193',
        NAZEV: 'DOP 1',
        POPIS: 'Domácí příprava 1',
        VAHA: 0.2,
        PORADI_ZOBRAZENI: 16,
    },
    {
        DRUH_HODNOCENI_ID: 'C6194',
        NAZEV: 'DOP 2',
        POPIS: 'Domácí příprava 2',
        VAHA: 0.4,
        PORADI_ZOBRAZENI: 17,
    },
    {
        DRUH_HODNOCENI_ID: 'C6195',
        NAZEV: 'AKT 1',
        POPIS: 'Aktivita v hodině 1',
        VAHA: 0.2,
        PORADI_ZOBRAZENI: 21,
    },
    {
        DRUH_HODNOCENI_ID: 'C6196',
        NAZEV: 'AKT 2',
        POPIS: 'Aktivita v hodině 2',
        VAHA: 0.4,
        PORADI_ZOBRAZENI: 22,
    },
    {
        DRUH_HODNOCENI_ID: 'C6197',
        NAZEV: 'MET 1',
        POPIS: 'Metodické portfolio1',
        VAHA: 0.2,
        PORADI_ZOBRAZENI: 31,
    },
    {
        DRUH_HODNOCENI_ID: 'C6198',
        NAZEV: 'MET 2',
        POPIS: 'Metodické portfolio 2',
        VAHA: 0.4,
        PORADI_ZOBRAZENI: 32,
    },
    {
        DRUH_HODNOCENI_ID: 'C6199',
        NAZEV: 'MET 3',
        POPIS: 'Metodické portfolio 3',
        VAHA: 0.6,
        PORADI_ZOBRAZENI: 33,
    },
    {
        DRUH_HODNOCENI_ID: 'C6200',
        NAZEV: 'MET 4',
        POPIS: 'Metodické portfolio 4',
        VAHA: 0.8,
        PORADI_ZOBRAZENI: 34,
    },
    {
        DRUH_HODNOCENI_ID: 'C6201',
        NAZEV: 'MET 5',
        POPIS: 'Metodické portfolio 5',
        VAHA: 1.0,
        PORADI_ZOBRAZENI: 35,
    },
]

export async function authFetch(name, key) {
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
export async function fetchAvarageMarks(id, key) {
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
export async function fetchIndividualMarks(date, key) {
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
export async function fetchHomewoks(key) {
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
export function getStartEndOfWeek() {
    let curr = new Date() // get current date
    let month = curr.getDate()
    let day = curr.getDay()

    let first = month - day + 1 // First day is the day of the month - the day of the week
    let last = first + 11 // last day is the first day + 11 (For the next week)

    let firstday = new Date(curr.setDate(first))
    let lastday = new Date(curr.setDate(last))

    return [
        JSON.stringify(firstday).substring(1, 11),
        JSON.stringify(lastday).substring(1, 11),
    ]
}
export async function fetchDayCalendar(date, key) {
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
            Name: /\(([^)]+)\)/.exec(item.NAZEV)[1],
            From: item.CAS_OD.substring(11, 16),
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

// THIS CAN BE USED FOR MORE THEN A WEEK
/*const fetchDayCalendar = async (id, key, week) => {
    const data = await fetch(
        `https://aplikace.skolaonline.cz/SOLWebApi/api/v1/RozvrhoveUdalosti/${week[0]}/${week[1]}/${id}`,
        {
            headers: {
                Authorization: `Basic ${key}`,
                Base64: '1',
            },
        }
    ).then((response) => response.json());

    const events = [];

    const lessons = data.Data.UDALOSTI.filter((item) => {
        if (item.TYP_UDALOSTI.TYP_UDALOSTI_ID !== 'ROZVRH') {
            events.push(item);
            return false;
        }
        return true;
    });

    let timeTable = {};
    lessons.forEach((item) => {
        let time = item.DATUM.substring(0, 10);
        if (timeTable.hasOwnProperty(time)) {
            timeTable[time].push({
                Name: item.NAZEV,
                From: item.CAS_OD,
                To: item.CAS_DO,
                Class: item.MISTNOSTI_UDALOSTI[0].NAZEV,
                Teacher:
                    item.UCITELE_UDALOSTI[0].JMENO +
                    ' ' +
                    item.UCITELE_UDALOSTI[0].PRIJMENI,
                Id: item.UDALOST_ID,
                Order: item.OBDOBI_DNE_OD_ID,
            });
        } else {
            timeTable[time] = [
                {
                    Name: item.NAZEV,
                    From: item.CAS_OD,
                    To: item.CAS_DO,
                    Class: item.MISTNOSTI_UDALOSTI[0].NAZEV,
                    Teacher:
                        item.UCITELE_UDALOSTI[0].JMENO +
                        ' ' +
                        item.UCITELE_UDALOSTI[0].PRIJMENI,
                    Id: item.UDALOST_ID,
                    Order: item.OBDOBI_DNE_OD_ID,
                },
            ];
        }
    });

    const EventsByDate = {};
    events.forEach((t1) => {
        let time = t1.DATUM.substring(0, 10);
        if (EventsByDate.hasOwnProperty(time)) {
            EventsByDate[time].push({
                Event: t1.NAZEV,
                Order: t1.OBDOBI_DNE_OD_ID,
                Color: t1.BARVA,
            });
        } else {
            EventsByDate[time] = [
                {
                    Event: t1.NAZEV,
                    Order: t1.OBDOBI_DNE_OD_ID,
                    Color: t1.BARVA,
                },
            ];
        }
    });

    let connected = {};
    Object.keys(timeTable).forEach((date) => {
        for (let i in timeTable[date]) {
            if (connected.hasOwnProperty(date)) {
                connected[date].push({
                    ...timeTable[date][i],
                    Events: EventsByDate[date].find(
                        (t2) => t2.Order === timeTable[date][i].Order
                    ),
                });
            } else {
                connected[date] = [
                    {
                        ...timeTable[date][i],
                        Events: EventsByDate[date].find(
                            (t2) => t2.Order === timeTable[date][i].Order
                        ),
                    },
                ];
            }
        }
    });

    return connected;
};*/

// THIS IS DATA STRUCTURE FOR CALENDAR MARKED DATES (Can be used for more days)
/*
let timeTable = {};
lessons.forEach((item) => {
    let time = item.DATUM.substring(0, 10);
    if (timeTable.hasOwnProperty(time)) {
        timeTable[time].push({
            Name: item.NAZEV,
            From: item.CAS_OD,
            To: item.CAS_DO,
            Class: item.MISTNOSTI_UDALOSTI[0].NAZEV,
            Teacher:
                item.UCITELE_UDALOSTI[0].JMENO +
                ' ' +
                item.UCITELE_UDALOSTI[0].PRIJMENI,
            Id: item.UDALOST_ID,
            Order: item.OBDOBI_DNE_OD_ID,
        });
    } else {
        timeTable[time] = [
            {
                Name: item.NAZEV,
                From: item.CAS_OD,
                To: item.CAS_DO,
                Class: item.MISTNOSTI_UDALOSTI[0].NAZEV,
                Teacher:
                    item.UCITELE_UDALOSTI[0].JMENO +
                    ' ' +
                    item.UCITELE_UDALOSTI[0].PRIJMENI,
                Id: item.UDALOST_ID,
                Order: item.OBDOBI_DNE_OD_ID,
            },
        ];
    }
});

const EventsByDate = {};
events.forEach((t1) => {
    let time = t1.DATUM.substring(0, 10);
    if (EventsByDate.hasOwnProperty(time)) {
        EventsByDate[time].push({
            Event: t1.NAZEV,
            Order: t1.OBDOBI_DNE_OD_ID,
            Color: t1.BARVA,
        });
    } else {
        EventsByDate[time] = [
            {
                Event: t1.NAZEV,
                Order: t1.OBDOBI_DNE_OD_ID,
                Color: t1.BARVA,
            },
        ];
    }
});

let connected = {};
Object.keys(timeTable).forEach((date) => {
    for (let i in timeTable[date]) {
        if (connected.hasOwnProperty(date)) {
            connected[date].push({
                ...timeTable[date][i],
                Events: EventsByDate[date].find(
                    (t2) => t2.Order === timeTable[date][i].Order
                ),
            });
        } else {
            connected[date] = [
                {
                    ...timeTable[date][i],
                    Events: EventsByDate[date].find(
                        (t2) => t2.Order === timeTable[date][i].Order
                    ),
                },
            ];
        }
    }
});

*/
