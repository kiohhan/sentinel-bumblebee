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
