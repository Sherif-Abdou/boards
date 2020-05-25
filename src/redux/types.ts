export interface Board {
    name: string;
    id: string;
    columns: [string];
    default_column: string;
}

export interface Column {
    name: string;
    id: string;
    items: [string];
}

export interface Item {
    title: string;
    id: string;
    content: string;
}
