import { findManyRaw, findOneRaw, findManyByKey } from "../db/select";
import { DBObject } from "../types";

const table = 'objects'

export async function fetchObjects(){
    return await findManyRaw(table) as DBObject[]
}

export async function fetchObject(id: string) {
    return await findOneRaw(table, id) as DBObject
}

export async function fetchObjectsByApp(appId: string){
    return await findManyByKey(table, 'app', appId)
}