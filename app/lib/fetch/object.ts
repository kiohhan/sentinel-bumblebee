import { findManyRaw, findOneRaw} from "../db/select";
import { DBObject } from "../types";

const table = 'objects'

export async function fetchObjects(){
    return await findManyRaw(table) as DBObject[]
}

export async function fetchObject(id: string) {
    return await findOneRaw(table, id) as DBObject
}
