import Icon from '../Enums/Icon';
import PanelCollection from './PanelCollection';
import Turn from './Turn';

export default class GameStatus {
    private turn: Turn;
    private panelCollection: PanelCollection;
    private isGameOver: boolean;
    private winnerIcon?: Icon;
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

    public constructor(panelCollection: PanelCollection) {
        this.panelCollection = panelCollection;
        this.turn = new Turn();
        this.isGameOver = false;
    }

    public isPlayable(): boolean {
        return !this.isGameOver;
    }

    public getWinnerIcon(): Icon | undefined {
        return this.winnerIcon;
    }

    public setIcon(x: number, y: number) {
        const panel = this.panelCollection.findByPosition(x, y);
        panel.setIcon(this.turn.getIcon());
        this.turn.switchIcon();
        this.setGameOver();
    }

    private setGameOver() {
        const icon = this.findWinnerIcon();

        if (icon !== undefined) {
            this.winnerIcon = icon;
            this.isGameOver = true;
            return;
        }

        this.isGameOver = this.panelCollection.getSortedList().find(row => !row.hasIcon()) === undefined;
    }

    private findWinnerIcon(): Icon | undefined {
        const hasWinner =
            this.gameOverPatterns.find(pattern => {
                const checkPannelList = pattern.map(row => this.panelCollection.findByPosition(row.x, row.y));

                const isAllMARU =
                    checkPannelList.filter(row => row.hasIcon() && row.getIcon() === Icon.MARU).length ===
                    pattern.length;
                const isAllBATSU =
                    checkPannelList.filter(row => row.hasIcon() && row.getIcon() === Icon.BATSU).length ===
                    pattern.length;

                return isAllMARU || isAllBATSU;
            }) !== undefined;

        return hasWinner ? this.turn.getIcon() : undefined;
    }
}
