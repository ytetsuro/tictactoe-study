import PanelCollection from '../../Domain/Entity/PanelCollection';
import SetIcon from '../../Domain/UseCase/SetIcon';
import GetPanelCollection from '../../Domain/UseCase/GetPanelCollection';
import Panel from '../../Domain/Entity/Panel';
import Icon from '../../Domain/Enums/Icon';

export default class TicTacToe {
    private panelCollection: PanelCollection;

    private getPanelCollectionUseCase: GetPanelCollection;

    public constructor(getPanelCollectionUseCase: GetPanelCollection) {
        this.getPanelCollectionUseCase = getPanelCollectionUseCase;
        this.panelCollection = new PanelCollection([]);
    }

    public async setPanelList() {
        this.panelCollection = await this.getPanelCollectionUseCase.run();
    }

    public getPanelList() {
        return this.panelCollection.getSortedList();
    }

    public getSetIconEvent(panel: Panel) {
        const setIconUseCase = new SetIcon(this.panelCollection, Icon.MARU);

        return () => {
            setIconUseCase.run(panel.x, panel.y);
        };
    }
}
