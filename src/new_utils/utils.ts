import { BasicModel } from "basic_model";

export function hashCode(str: string) : number {
    return Array.from(str).reduce((s, c) => Math.imul(31, s) + c.charCodeAt(0) | 0, 0)
}

export function findItem(list: BasicModel[], item: BasicModel) : BasicModel {
    if(list.length < 1) return null;
    const tmp = list.filter(model => { return model.getIdInt() === item.getIdInt() });
    if(tmp.length < 1) return null;
    return tmp[0];
}

export function findItemByName(list: BasicModel[], name: string): BasicModel {
    if(list.length < 1) return null;
    const tmp = list.filter(model => { return model.getName() === name });
    if(tmp.length < 1) return null;
    return tmp[0];
}

export function findItemById(list: BasicModel[], id: string): BasicModel {
    if(list.length < 1) return null;
    const tmp = list.filter(model => { return model.getId() === id });
    if(tmp.length < 1) return null;
    return tmp[0];
}

export function makeNewListWOItem(list: BasicModel[], item: BasicModel): BasicModel[] {
    return list.filter(model => model.getIdInt() !== item.getIdInt());
}

export function makeId(str: string) : string {
    const now = new Date();
    const dateString = `${now.getFullYear()}${now.getMonth() + 1}${now.getDate()}${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;
    return hashCode(str + dateString).toString(16);
}