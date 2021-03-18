import { heroes } from "../../data/heroes";

export const getHeroeByPublisher = (publisher) => {
    const validPublisher = ['DC Comics', 'Marvel Comics']

    if (!validPublisher.includes(publisher)) {
        throw new Error(`Publisher ${publisher} is not the correct value, should be ${validPublisher[0]} or ${validPublisher[1]} `)

    }

    return heroes.filter(x => x.publisher === publisher)
}