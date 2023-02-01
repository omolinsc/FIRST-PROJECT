import { IMonstro } from './imonstro';
export interface IPersona {

        nombre: string,
        edad: number,
        alive: boolean,
        gafas?: boolean,
        monstros?: IMonstro[],

}