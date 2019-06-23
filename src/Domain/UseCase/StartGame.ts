import PanelListFetcher from '../Repository/PanelListFetcher';
import PanelCollection from '../Entity/PanelCollection';
import GameStatus from '../Entity/GameStatus';
import Panel from '../Entity/Panel';
import GameStatusRepository from '../Repository/GameStatusRepository';

export default class StartGame {
    private panelListFetcher: PanelListFetcher;
    private gameStatusRepository: GameStatusRepository;

    public constructor(panelListFetcher: PanelListFetcher, gameStatusRepository: GameStatusRepository) {
        this.panelListFetcher = panelListFetcher;
        this.gameStatusRepository = gameStatusRepository;
    }

    /**
     * パネルの集合を返す。
     *
     * @returns {Promise<GameStatus>}
     */
    public async run(): Promise<GameStatus> {
        const panelList = await this.panelListFetcher.fetch();

        const gameStatus = new GameStatus(new PanelCollection(panelList.map(row => new Panel(row.x, row.y))));
        this.gameStatusRepository.set(gameStatus);

        return gameStatus;
    }
}
