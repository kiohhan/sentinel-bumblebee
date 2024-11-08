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
    slug: string;
    type: string;
    options: string;
}

export type App = {
    name: string;
}

export type DBApp = App & {
    id: string;
}

export type Object = {
    name: string;
    app: string;
    options: string;
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