import { myPool } from './db'

// delete
export const deleteOne = async (table: string, id: string) => {
    try {
        let sql = `DELETE FROM ${table} WHERE id=${id} RETURNING id`
        console.log(sql)
        const resp = await myPool.query(sql)
        return resp
    } catch (e) {
        throw e
    }
}
