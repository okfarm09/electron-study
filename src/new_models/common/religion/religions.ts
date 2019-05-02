import { BasicModel, ModelOption } from "basic_model";
import { Modifier } from "modifier";
import { Religion, Doctrin, Canon } from "religion";
import { History } from "history";
import * as Utils from "/dev/react/react-electron/my-first-react-app/src/new_utils/utils";

export class ReligionManager {
    private religions: BasicModel[];
    private religionMap: { [key: string]: Religion };

    private static instance: ReligionManager;
    private constructor() {
        this.religions = [];
        this.religionMap = {};
    }
    static getInstance(): ReligionManager {
        if(!ReligionManager.instance) ReligionManager.instance = new ReligionManager();
        return ReligionManager.instance;
    }

    makeNewEmptyReligion(name: string): ReligionImpl {
        let obj: ReligionImpl = Utils.findItemByName(this.religions, name) as ReligionImpl;
        if(obj === null) {
            const id = Utils.makeId(name);
            obj = new ReligionImpl({name: name, id: id});
        }
        this.religions.push(obj);
        this.religionMap[obj.getId()] = obj;
        return obj;
    }

    getReligions(): BasicModel[] {
        return this.religions;
    }

    getReligionMap(): { [key: string]: Religion } {
        return this.religionMap;
    }
}

class ReligionImpl implements Religion {
    name: string;
    id: string;
    idInt: number;
    description: string;
    history: History[];
    father: string;
    doctrinMap: { [key: string]: Doctrin };
    canonMap: { [key: string]: Canon };

    constructor(options?: ModelOption) {
        this.name = options.name? options.name : "";
        this.id = options.id? options.id : "";
        this.idInt = Utils.hashCode(this.id);
        this.doctrinMap = {};
        this.canonMap = {};
        this.history = [];
    }

    addDoctrin(doctrin: Doctrin): void {
        this.doctrinMap[doctrin.getId()] = doctrin;
    }
    removeDoctrin(doctrin: Doctrin): void {
        this.doctrinMap[doctrin.getId()] = null;
    }
    getDoctrins(): { [key: string]: Doctrin } {
        return this.doctrinMap;
    }
    addCanon(canon: Canon): void {
        this.canonMap[canon.getId()] = canon;
    }
    removeCanon(canon: Canon): void {
        this.canonMap[canon.getId()] = null;
    }
    getCanons(): { [key: string]: Canon } {
        return this.canonMap;
    }
    setDescription(description: string): void {
        this.description = description;
    }
    getDescription(): string {
        return this.description;
    }
    addHistory(history: History): void {
        this.history.push(history);
    }
    getHistoryString(): string {
        return this.history.map(item => { return item.getHistoryString() }).join("\n");
    }
    setName(name: string): void {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
    getId(): string {
        return this.id;
    }
    getIdInt(): number {
        return this.idInt;
    }
    setFather(religion: Religion): void {
        this.father = religion.getId();
    }
    getFather(): Religion {
        return ReligionManager.getInstance().getReligionMap()[this.father];
    }

    public toString = () : string => {
        return this.name;
    }
}

class DoctrinImpl implements Doctrin {
    name: string;    
    id: string;
    idInt: number;
    modifierMap: { [key: string]: Modifier };

    constructor(options?: ModelOption) {
        this.name = options.name? options.name : "";
        this.id = options.id? options.id : "";
        this.idInt = Utils.hashCode(this.id);
        this.modifierMap = {};
    }

    setName(name: string): void {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
    getId(): string {
        return this.id;
    }
    getIdInt(): number {
        return this.idInt;
    }
    setModifier(modifier: Modifier): void {
        this.modifierMap[modifier.getId()] = modifier;
    }
    removeModifier(modifier: Modifier): void {
        this.modifierMap[modifier.getId()] = null;
    }
    getModifiers(): { [key: string]: Modifier } {
        return this.modifierMap;
    }
}

class CanonImpl implements Canon {
    name: string;    
    id: string;
    idInt: number;
    modifierMap: { [key: string]: Modifier };

    constructor(options?: ModelOption) {
        this.name = options.name? options.name : "";
        this.id = options.id? options.id : "";
        this.idInt = Utils.hashCode(this.id);
        this.modifierMap = {};
    }

    setName(name: string): void {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
    getId(): string {
        return this.id;
    }
    getIdInt(): number {
        return this.idInt;
    }
    setModifier(modifier: Modifier): void {
        this.modifierMap[modifier.getId()] = modifier;
    }
    removeModifier(modifier: Modifier): void {
        this.modifierMap[modifier.getId()] = null;
    }
    getModifiers(): { [key: string]: Modifier } {
        return this.modifierMap;
    }
}