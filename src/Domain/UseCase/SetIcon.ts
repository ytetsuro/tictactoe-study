import PanelCollection from '../Entity/PanelCollection';
import Icon from '../Enums/Icon';

export default class SetIcon {
    private panelCollection: PanelCollection;
    private icon: Icon;

    public constructor(panelCollection: PanelCollection, icon: Icon) {
        this.panelCollection = panelCollection;
        this.icon = icon;
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
            panel.setIcon(this.icon);
        } catch (e) {
            console.log(e.message);
        }
    }
}
