import { Table } from "./Table.model";

export class Order{
    constructor(
        public table: Table,
        public totalSum: number,
        public orderItem: string[]
    ){}
}