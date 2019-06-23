import GameStatus from '../Entity/GameStatus';

export default class SetIcon {
    private gameStatus: GameStatus;

    public constructor(gameStatus: GameStatus) {
        this.gameStatus = gameStatus;
    }

    /**
     * Iconをセットする。
     *
     * @param {number} x
     * @param {number} y
     */
    public run(x: number, y: number) {
        try {
            this.gameStatus.setIcon(x, y);
        } catch (e) {
            console.log(e.message);
        }
    }
}
