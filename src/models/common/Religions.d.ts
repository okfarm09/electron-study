export interface Religion {
    rName: string;
    rId: string;
    doctring: Array<string>;
    canon: Array<string>;
    description: string;
    history: ReligionHistory;
}

export interface ReligionHistory {
    year: number;
    description: string;
}

export enum ReligionStatus {
    secular = 1,
    cynical = 2,
    sceptical = 3,
    humble = 4,
    pious = 5,
    zealous = 6,
    fanatical = 7
}