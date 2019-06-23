import { default as m } from 'mithril';
import PanelCollection from '../../Domain/Entity/PanelCollection';
import SetIcon from '../../Domain/UseCase/SetIcon';
import StartGame from '../../Domain/UseCase/StartGame';
import Panel from '../../Domain/Entity/Panel';
import GameStatus from '../../Domain/Entity/GameStatus';

export default class TicTacToe {
    private gameStatus: GameStatus;

    private startGame: StartGame;

    private setIcon: SetIcon;

    public constructor(startGame: StartGame, setIcon: SetIcon) {
        this.startGame = startGame;
        this.gameStatus = new GameStatus(new PanelCollection([]));
        this.setIcon = setIcon;
    }

    public async gameStart() {
        this.gameStatus = await this.startGame.run();
    }

    public getPanelList() {
        return this.gameStatus.getPanelList();
    }

    public getSetIconEvent(panel: Panel) {
        return () => {
            this.setIcon.run(panel.x, panel.y);
            if (!this.gameStatus.isPlayable()) {
                m.route.set('/show_winning');
            }
        };
    }
}
