import PanelCollection from '../Entity/PanelCollection';
import Turn from '../Entity/Turn';

export default class SetIcon {
    private panelCollection: PanelCollection;
    private turn: Turn;

    public constructor(panelCollection: PanelCollection, turn: Turn) {
        this.panelCollection = panelCollection;
        this.turn = turn;
    }

    /**
     * Iconをセットする。
     *
     * @param {number} x
     * @param {number} y
     */
    public run(x: number, y: number) {
        try {
            const panel = this.panelCollection.findByPosition(x, y);
            panel.setIcon(this.turn.getIcon());
            this.turn.switchIcon();
        } catch (e) {
            console.log(e.message);
        }
    }
}
