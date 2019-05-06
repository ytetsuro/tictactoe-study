import Panel from './Panel';

export default class PanelCollection {
    readonly collection: Panel[];

    public constructor(collection: Panel[]) {
        this.collection = collection;
    }

    /**
     * xとyをもとにPanelクラスを返す
     *
     * @param {number} x
     * @param {number} y
     * @return {Panel}
     */
    public findByPosition(x: number, y: number): Panel {
        const panel = this.collection.find(row => row.x === x && row.y === y);

        if (!panel) {
            throw new Error('Not Found Panel.');
        }

        return panel;
    }

    /**
     * ソートしてパネルのコレクションを返す。
     *
     * @return {Panel[]}
     */
    public getSortedList(): Panel[] {
        return this.collection.slice().sort((prev, current) => {
            if (prev.x === current.x) {
                if (prev.y === current.y) {
                    return 0;
                }

                return prev.y < current.y ? -1 : 1;
            }

            return prev.x < current.x ? -1 : 1;
        });
    }
}
