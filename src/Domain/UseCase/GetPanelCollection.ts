import PanelListFetcher from '../Repository/PanelListFetcher';
import PanelCollection from '../Entity/PanelCollection';
import Panel from '../Entity/Panel';

export default class GetPanelCollection {
    private panelListFetcher: PanelListFetcher;

    public constructor(panelListFetcher: PanelListFetcher) {
        this.panelListFetcher = panelListFetcher;
    }

    /**
     * パネルの集合を返す。
     *
     * @returns {Promise<PanelCollection>}
     */
    public async run(): Promise<PanelCollection> {
        const panelList = await this.panelListFetcher.fetch();

        return new PanelCollection(panelList.map(row => new Panel(row.x, row.y)));
    }
}
