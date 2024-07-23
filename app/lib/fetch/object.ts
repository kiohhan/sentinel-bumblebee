import { findManyRaw } from "../db/select";

export async function fetchObjects(){
    return await findManyRaw('objects')
}