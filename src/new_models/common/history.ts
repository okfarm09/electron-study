
import { History } from "history";
export class HistoryImpl implements History {
    year: string;
    description: string;
    constructor(year: string, description: string) {
        this.year = year;
        this.description = description;
    }
    public getHistoryString(): string {
        return `[${this.year}] : ${this.description}`;
    }
}
