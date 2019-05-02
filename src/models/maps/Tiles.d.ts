import { Religion, ReligionStatus } from "../common/Religions";

export class Tile {
    private _tType: string = "";
    private _tileId: string = "";
    private _objId: string = "";
    private _selected: boolean = false;
    private _pStatus: string = ""; // Political status of the tile
    private _cStatus: string = ""; // Cultural status of the tile
    private _eStatus: string = ""; // Economical status of the tile
    private _rStatus: ReligionStatus; // Religional status of the tile
    private _tStatus: string = ""; // Transportational status of the tile
    private _pInfluences: Array<string> = []; // Political influences in the tile
    private _cInfluences: Array<string> = []; // Cultural influences in the tile
    private _eInfluences: Array<string> = []; // Economical influences in the tile
    private _rInfluences: Array<ReligionInfluence> = []; // Religional influences in the tile
    private _modifiers: Array<string> = []; // Modifiers that the tile has

    constructor(options?: TileBasicOptions) {
        this._tType = options.tType? options.tType : "";
        this._tileId = options.tileId? options.tileId : "";
        this._objId = options.objId? options.objId : "";
        this._selected = false;
    }

    // tile property
    set tType(type: string) { this._tType = type; }
    get tType(): string { return this._tType; }

    set tileId(id: string) { this._tileId = id; }
    get tileId(): string { return this._tileId; }

    set objId(id: string) { this._objId = id; }
    get objId(): string { return this._objId; }

    // tile status
    set rStatus(status: ReligionStatus) { this._rStatus = status; }
    get rStatus(): ReligionStatus { return this._rStatus; }

    // tile influence
    private addReligionalInfluence(influence: ReligionInfluence): void {
        let findTarget = this._rInfluences.filter((item) => { return item.religion.rId == influence.religion.rId });
        if(findTarget.length < 1) this._rInfluences.push(influence);
    }
    private removeReligionalInfluence(religion: Religion): void {
        let newArray = this._rInfluences.filter((item) => { return item.religion.rId != religion.rId });
        this._rInfluences = newArray;
    }
    public getReligionalInfluence(religion: Religion): ReligionInfluence {
        let findTarget = this._rInfluences.filter((item) => { return item.religion.rId == religion.rId });
        if(findTarget.length < 1) return null;
        else return findTarget[0];
    }
    public setReligionalInfluence(influence: ReligionInfluence): void {
        this.removeReligionalInfluence(influence.religion);
        this.addReligionalInfluence(influence);
    }
}

export interface TileBasicOptions {
    tType?: string;
    tileId?: string;
    objId?: string;
}

export interface ReligionInfluence {
    religion: Religion;
    power: number;
}