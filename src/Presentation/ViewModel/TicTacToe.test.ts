import TicTacToe from './TicTacToe';
import StartGame from '../../Domain/UseCase/StartGame';
import Panel from '../../Domain/Entity/Panel';
import Icon from '../../Domain/Enums/Icon';
import GameStatusRepository from '../../Data/Repository/GameStatusRepository';
import SetIcon from '../../Domain/UseCase/SetIcon';

it('セットしたパネルのリストが取得できるべき', async () => {
    const gameStatusRepository = new GameStatusRepository();
    const ticTacToe = new TicTacToe(
        new StartGame(
            new class {
                fetch() {
                    return Promise.resolve([{ x: 1, y: 1 }]);
                }
            }(),
            gameStatusRepository,
        ),
        new SetIcon(gameStatusRepository),
    );

    await ticTacToe.gameStart();

    expect([new Panel(1, 1)]).toEqual(ticTacToe.getPanelList());
});

it('アイコンをセットするイベントが取得できるべき', async () => {
    const gameStatusRepository = new GameStatusRepository();
    const ticTacToe = new TicTacToe(
        new StartGame(
            new class {
                fetch() {
                    return Promise.resolve([{ x: 1, y: 1 }]);
                }
            }(),
            gameStatusRepository,
        ),
        new SetIcon(gameStatusRepository),
    );

    await ticTacToe.gameStart();

    const panel = ticTacToe.getPanelList()[0];

    const event = ticTacToe.getSetIconEvent(panel);
    event();

    expect(Icon.MARU).toBe(panel.getIcon());
});
