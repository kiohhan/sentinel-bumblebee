import { myPool } from './db'

export const util_getFieldInsertSQL = (table: string, fields: string[]) => {
    let sql = `table_id`;
    if (fields.length > 0){
        sql += `,`
    }
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

export const util_getFieldValueInsertSQL = (table: string, fieldValues: string[]) => {
    let sql = `(SELECT id from sys_tables WHERE table_name='${table}')`;
    if (fieldValues.length > 0){
        sql += `,`
    }
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

export const util_getFieldInsertSQLNoTable = (table: string, fields: string[]) => {
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

export const util_getFieldValueInsertSQLNoTable = (table: string, fieldValues: string[]) => {
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
        let sql = `INSERT INTO ${table} (${util_getFieldInsertSQL(table, fields)}) VALUES (${util_getFieldValueInsertSQL(table, fieldValues)}) RETURNING id`
        console.log(sql)
        const resp = await myPool.query(sql, fieldValues)
        return resp
    } catch (e) {
        throw e
    }
}

// insert with conflicts
export const createOneNoConflict = async (table: string, fields: string[], fieldValues: string[]) => {
    try {
        let sql = `INSERT INTO ${table} (${util_getFieldInsertSQL(table, fields)}) VALUES (${util_getFieldValueInsertSQL(table, fieldValues)}) ON CONFLICT DO NOTHING RETURNING id`
        console.log(sql)
        const resp = await myPool.query(sql, fieldValues)
        return resp
    } catch (e) {
        throw e
    }
}

// insert to non-object [multirel junction tables]
export const createOneJunction = async (table: string, fields: string[], fieldValues: string[]) => {
    try {
        let sql = `INSERT INTO ${table} (${util_getFieldInsertSQLNoTable(table, fields)}) VALUES (${util_getFieldValueInsertSQLNoTable(table, fieldValues)}) RETURNING id`
        console.log(sql)
        const resp = await myPool.query(sql, fieldValues)
        return resp
    } catch (e) {
        throw e
    }
}