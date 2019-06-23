import PanelCollection from '../Entity/PanelCollection';
import Icon from '../Enums/Icon';

export default class CheckGameOver {
    private collection: PanelCollection;
    private gameOverPatterns = [
        // 横
        [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
        [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
        [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }],
        // 縦
        [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }],
        [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }],
        [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }],
        // 斜め
        [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }],
        [{ x: 0, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 0 }],
    ];

    constructor(collection: PanelCollection) {
        this.collection = collection;
    }

    public run(): boolean {
        const result = this.gameOverPatterns.find(pattern => {
            const checkPannelList = pattern.map(row => this.collection.findByPosition(row.x, row.y));

            const isAllMARU = checkPannelList.find(row => !row.hasIcon() || row.getIcon() === Icon.BATSU) === undefined;
            const isAllBATSU = checkPannelList.find(row => !row.hasIcon() || row.getIcon() === Icon.MARU) === undefined;

            return isAllMARU || isAllBATSU;
        });

        return result !== undefined;
    }
}
