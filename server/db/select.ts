import { myPool } from './db'

// findMany
export const findManyRaw = async (table: string) => {
    try {
        const query = `SELECT * FROM ${table}`
        const res = await myPool.query(query)
        // await new Promise(r => setTimeout(r, 2000));
        return res.rows
    } catch (e) {
        throw e
    }
}

export const findOneRaw = async (table: string, id: string) => {
    try {
        const query = `SELECT * FROM ${table} WHERE id=${id}`
        const res = await myPool.query(query)
        // await new Promise(r => setTimeout(r, 2000));
        return res.rows[0]
    } catch (e) {
        throw e
    }
}

export const findManyByKey = async (table: string, key: string, id: string) => {
    try {
        const query = `SELECT * FROM ${table} WHERE ${key}=$1`
        const res = await myPool.query(query, [id])
        return res.rows
    } catch (e) {
        throw e
    }
}
