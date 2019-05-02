declare module "history" {
    interface History {
        year: string;
        description: string;

        getHistoryString() : string;
    }
}