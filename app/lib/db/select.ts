import { myPool } from './db'

// findMany
export const findManyRaw = async (table: string) => {
    try {
        const query = `SELECT * FROM ${table}`
        const res = await myPool.query(query)
        return res.rows
    } catch (e) {
        throw e
    }
}

export const findOneRaw = async (table: string, id: string) => {
    try {
        const query = `SELECT * FROM ${table} WHERE id=${id}`
        const res = await myPool.query(query)
        return res.rows[0]
    } catch (e) {
        throw e
    }
}
