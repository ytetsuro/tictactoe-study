import PanelCollection from '../../Domain/Entity/PanelCollection';
import SetIcon from '../../Domain/UseCase/SetIcon';
import GetPanelCollection from '../../Domain/UseCase/GetPanelCollection';
import Panel from '../../Domain/Entity/Panel';
import Turn from '../../Domain/Entity/Turn';

export default class TicTacToe {
    private panelCollection: PanelCollection;

    private getPanelCollectionUseCase: GetPanelCollection;

    private setIcon: SetIcon;

    private turn: Turn;

    public constructor(getPanelCollectionUseCase: GetPanelCollection) {
        this.getPanelCollectionUseCase = getPanelCollectionUseCase;
        this.panelCollection = new PanelCollection([]);
        this.turn = new Turn();
        this.setIcon = new SetIcon(this.panelCollection, this.turn);
    }

    public async setPanelList() {
        this.panelCollection = await this.getPanelCollectionUseCase.run();
        this.setIcon = new SetIcon(this.panelCollection, this.turn);
    }

    public getPanelList() {
        return this.panelCollection.getSortedList();
    }

    public getSetIconEvent(panel: Panel) {
        return () => {
            this.setIcon.run(panel.x, panel.y);
        };
    }
}
