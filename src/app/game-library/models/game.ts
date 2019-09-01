import { Genre } from '../enums/genre';

export class Game {
    id: number;
    title: string;
    genre: Genre;

    constructor(id: number, title: string, genre: Genre) {
        this.id = id;
        this.title = title;
        this.genre = genre;
    }
}
