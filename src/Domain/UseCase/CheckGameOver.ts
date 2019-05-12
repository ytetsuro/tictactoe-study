import PanelCollection from '../Entity/PanelCollection';

export default class CheckGameOver {
    private collection: PanelCollection;

    constructor(collection: PanelCollection) {
        this.collection = collection;
    }

    public run(): boolean {
        const collection this.collection.getSortedList()
        // 横
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9},
        // 縦
        { 1, 4, 7 },
        { 2, 5, 8 },
        { 3, 6, 9 },
        // 斜め
        { 1, 4, 7 },
        { 2, 5, 8 },
    }
}
