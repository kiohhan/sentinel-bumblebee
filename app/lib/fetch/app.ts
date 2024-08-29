import { findManyRaw, findOneRaw} from "../db/select";
import { DBApp } from "../types";
import { fetchObjectFieldsJSON, fetchObjectsByApp } from "./object";

const table = 'apps'

export async function fetchApps(){
    return await findManyRaw(table) as DBApp[]
}

export async function fetchApp(id: string) {
    return await findOneRaw(table, id) as DBApp
}

export async function fetchAppJSON(id: string) {
    const objs = await fetchObjectsByApp(id)
    const app = await fetchApp(id)
    let myObjectsJson : any[] = []
    for (let i=0; i<objs.length; i++){
        const fieldJson = await fetchObjectFieldsJSON(objs[i].id)
        myObjectsJson.push({
            name: objs[i].name,
            slug: objs[i].name,
            fields: fieldJson,
            workflow: {}
        })
    }
    return {
        name: app.name,
        slug: app.name,
        objects: myObjectsJson
    }
}