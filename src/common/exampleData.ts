import {IPicture} from "./interfaces";

export const examplePictures: IPicture[] = [
    {
        id: '1',
        title: 'Chihiro',
        description: 'Chihiro Szellemorszagban',
        availableSizes: ['600x800'],
        source: '/images/chihiro.jpg'
    } as const, {
        id: '2',
        title: 'Dobby',
        description: 'Dobby a mano',
        availableSizes: ['600x800'],
        source: '/images/dobby.jpg'
    } as const, {
        id: '3',
        title: 'Joker',
        description: 'Joker a szomoru trefamester',
        availableSizes: ['600x800'],
        source: '/images/joker.jpg'
    } as const, {
        id: '4',
        title: 'Kovacs',
        description: 'A fura maszkos faszi az Orzokbol',
        availableSizes: ['600x800'],
        source: '/images/kovacs.jpg'
    } as const, {
        id: '5',
        title: 'Kutyi',
        description: 'Kutyi az Upbol',
        availableSizes: ['600x800'],
        source: '/images/kutyi.jpg'
    } as const, {
        id: '6',
        title: 'Mia',
        description: 'Csaje aki tancizott a Travoltabol az izeben',
        availableSizes: ['600x800'],
        source: '/images/mia.jpg'
    } as const, {
        id: '7',
        title: 'sovenyes',
        description: 'Vegtelenul cuki kiscsavo a Tul a Sovenyenbol',
        availableSizes: ['600x800'],
        source: '/images/sovenyes.jpg'
    } as const, {
        id: '8',
        title: 'Witcher',
        description: 'Hohaju apritogep',
        availableSizes: ['600x800'],
        source: '/images/witcher.jpg'
    } as const,
]

const images = ['chihiro', 'dobby', 'joker', 'kovacs', 'kutyi', 'mia', 'sovenyes', 'witcher'];
