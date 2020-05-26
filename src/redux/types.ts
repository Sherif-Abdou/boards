import { v4 as uuidv4 } from "uuid";

export class Board {
    name: string;
    id: string;
    columns: string[];
    default_column: string;
    constructor(name: string = "") {
        this.name = name;
        this.id = uuidv4();
        this.columns = [];
        this.default_column = "";
    }
}

export class Column {
    name: string;
    id: string;
    items: string[];
    constructor(name: string = "") {
        this.name = name;
        this.id = uuidv4();
        this.items = [];
    }
}

export class Item {
    title: string;
    id: string;
    content: string;
    constructor(title: string = "") {
        this.title = title;
        this.id = uuidv4();
        this.content = "";
    }
}

