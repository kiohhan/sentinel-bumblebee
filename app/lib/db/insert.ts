import { myPool } from './db'

export const util_getFieldInsertSQL = (table: string, fields: string[]) => {
    let sql = ``;
    let count = 1;
    fields.forEach(field => {
        sql += `${field}`
        if (count < fields.length) {
            sql += `,`
        }
        count += 1
    })
    return sql
}

export const util_getFieldValueInsertSQL = (fieldValues: string[]) => {
    let sql = ``;
    let count = 1;
    fieldValues.forEach(field => {
        sql += `$${count}`
        if (count < fieldValues.length) {
            sql += `,`
        }
        count += 1
    })
    return sql
}

// insert
export const createOne = async (table: string, fields: string[], fieldValues: string[]) => {
    try {
        let sql = `INSERT INTO ${table} (${util_getFieldInsertSQL(table, fields)}) VALUES (${util_getFieldValueInsertSQL(fieldValues)}) RETURNING id`
        console.log(sql)
        const resp = await myPool.query(sql, fieldValues)
        // await new Promise(r => setTimeout(r, 5000));
        return resp
    } catch (e) {
        throw e
    }
}

// insert with conflicts
export const createOneNoConflict = async (table: string, fields: string[], fieldValues: string[]) => {
    console.log(table)
    console.log(fields)
    console.log(fieldValues)
    try {
        let sql = `INSERT INTO ${table} (${util_getFieldInsertSQL(table, fields)}) VALUES (${util_getFieldValueInsertSQL(fieldValues)}) ON CONFLICT DO NOTHING RETURNING id`
        console.log(sql)
        const resp = await myPool.query(sql, fieldValues)
        // await new Promise(r => setTimeout(r, 5000));
        return resp
    } catch (e) {
        throw e
    }
}