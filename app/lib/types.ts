export type RelationType = {
    object: "single" | "multi";
}

export type FieldType = {
    name: string;
    type: string;
    queryable: boolean;
    options: any;
    description: string;
    relation?: RelationType;
}

export type FieldInput = {
    name: string;
    dbname: string;
    type: FieldType;
}