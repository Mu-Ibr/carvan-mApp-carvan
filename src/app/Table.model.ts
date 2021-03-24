export class Table{
    constructor(
        public tableNum: number,
        public waiterName: string,
        public isTaken: boolean,
        public orderedItems: string[],
        public totalSum: number
    ){}
}