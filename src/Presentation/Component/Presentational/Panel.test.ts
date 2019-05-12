(<any>global).window = Object.assign(
    require('mithril/test-utils/domMock.js')(),
    require('mithril/test-utils/pushStateMock')(),
);
import TicTacToe from '../../ViewModel/TicTacToe';
import GetPanelCollection from '../../../Domain/UseCase/GetPanelCollection';
import Panel from './Panel';
import Icon from '../../../Domain/Enums/Icon';

/// <amd-dependency path="mitril-query" />
declare var require: (moduleId: string) => any;
const mq = require('mithril-query');

it('Iconがセットされていないパネルには、何も表示されないべき', async () => {
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

    const component = mq(new Panel(), { entity: panel, eventCreater: ticTacToe });
    expect(component.contains('')).toBe(true);
});

it('Iconがセットされているパネルには、アイコンが表示されるべき', async () => {
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
    panel.setIcon(Icon.MARU);

    const component = mq(new Panel(), { entity: panel, eventCreater: ticTacToe });
    expect(component.contains(Icon.MARU)).toBe(true);
});

it('Iconがクリックされた時にIconがセットされるべき', async () => {
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

    const component = mq(new Panel(), { entity: panel, eventCreater: ticTacToe });
    component.click('div');
    expect(panel.getIcon()).toBe(Icon.MARU);
});
