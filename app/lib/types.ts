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
    type: string;
    options: string;
}

export type Object = {
    name: string;
    fields: FieldInput[];
    workflows: string;
}

export type DBObject = Object & {
    id: string;
}

export type BreadcrumbType = {
    name: string;
    link: string;
}