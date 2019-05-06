import TicTacToe from './TicTacToe';
import GetPanelCollection from '../../Domain/UseCase/GetPanelCollection';
import Panel from '../../Domain/Entity/Panel';
import Icon from '../../Domain/Enums/Icon';

it('セットしたパネルのリストが取得できるべき', async () => {
    const ticTacToe = new TicTacToe(
        new GetPanelCollection(
            new class {
                fetch() {
                    return Promise.resolve([{ x: 1, y: 1 }]);
                }
            }(),
        ),
    );

    await ticTacToe.setPanelList();

    expect([new Panel(1, 1)]).toEqual(ticTacToe.getPanelList());
});

it('アイコンをセットするイベントが取得できるべき', async () => {
    const ticTacToe = new TicTacToe(
        new GetPanelCollection(
            new class {
                fetch() {
                    return Promise.resolve([{ x: 1, y: 1 }]);
                }
            }(),
        ),
    );

    await ticTacToe.setPanelList();

    const panel = ticTacToe.getPanelList()[0];

    const event = ticTacToe.getSetIconEvent(panel);
    event();

    expect(Icon.MARU).toBe(panel.getIcon());
});
