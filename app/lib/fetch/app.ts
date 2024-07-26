import { findManyRaw, findOneRaw} from "../db/select";
import { DBApp } from "../types";

const table = 'apps'

export async function fetchApps(){
    return await findManyRaw(table) as DBApp[]
}

export async function fetchApp(id: string) {
    return await findOneRaw(table, id) as DBApp
}
