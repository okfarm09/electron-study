declare module "religion" {
    import { BasicModel, ModelOption } from "basic_model";
    import { Modifier, ModifierFeature } from "modifier";
    import { History } from "history";

    interface Doctrin extends ModifierFeature {}
    interface Canon extends ModifierFeature {}
    interface Religion extends BasicModel {
        description: string;
        history: History[];
        father: string;
        doctrinMap: { [key: string]: Doctrin };
        canonMap: { [key: string]: Canon };

        addDoctrin(doctrin: Doctrin): void;
        removeDoctrin(doctrin: Doctrin): void;
        getDoctrins(): { [key: string]: Doctrin };

        addCanon(canon: Canon): void;
        removeCanon(canon: Canon): void;
        getCanons(): { [key: string]: Canon };

        setDescription(description: string): void;
        getDescription(): string;

        addHistory(history: History): void;
        getHistoryString(): string;

        setFather(religion: Religion): void;
        getFather(): Religion;
    }

    enum ReligionStatus {
        secular = 1,
        cynical = 2,
        sceptical = 3,
        humble = 4,
        pious = 5,
        zealous = 6,
        fanatical = 7
    }
}