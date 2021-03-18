import { heroes } from "../../data/heroes";

export const getHeroeByName = (name = '') => {

    if (name === '') {
        return []
    }

    name = name.toLocaleLowerCase()

    return heroes.filter(x => x.superhero.toLocaleLowerCase().includes(name))

}