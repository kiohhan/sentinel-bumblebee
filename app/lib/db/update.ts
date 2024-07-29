import { myPool } from './db'

export const util_getFieldUpdateSQL = (fields: string[]) => {
    let sql = ``;
    let count = 1;
    fields.forEach(field => {
        sql += `${field}=$${count}`
        if (count < fields.length) {
            sql += `,`
        }
        count += 1
    })
    return sql
}

// update
export const updateOne = async (table: string, fields: string[], fieldValues: string[], id: string) => {
    try {
        let sql = `UPDATE ${table} SET ${util_getFieldUpdateSQL(fields)} WHERE id=${id}`
        console.log(sql)
        const resp = await myPool.query(sql, fieldValues)
        // await new Promise(r => setTimeout(r, 5000));
        return resp
    } catch (e) {
        throw e
    }
}