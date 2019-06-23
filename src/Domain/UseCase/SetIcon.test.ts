import SetIcon from './SetIcon';
import Panel from '../Entity/Panel';
import PanelCollection from '../Entity/PanelCollection';
import Icon from '../Enums/Icon';
import GameStatus from '../Entity/GameStatus';

beforeEach(() => {
    jest.clearAllMocks();
});

test('アイコンがセットされるべき', () => {
    const panel = new Panel(1, 1);
    const useCase = new SetIcon(new GameStatus(new PanelCollection([panel])));
    useCase.run(1, 1);

    expect(Icon.MARU).toBe(panel.getIcon());
});

test('座標が正しくない場合は、ログを書き込むべき', () => {
    const spyLog = jest.spyOn(console, 'log');
    spyLog.mockImplementation(x => x);

    const useCase = new SetIcon(new GameStatus(new PanelCollection([])));
    useCase.run(9999999, 99999999999999);

    expect(console.log).toBeCalled();
    expect(spyLog.mock.calls[0][0]).toBe('Not Found Panel.');
});

test('Iconがすでにセットされている場合にセットすると、ログを書き込むべき', () => {
    const spyLog = jest.spyOn(console, 'log');
    spyLog.mockImplementation(x => x);

    const panel = new Panel(1, 1);
    panel.setIcon(Icon.BATSU);

    const useCase = new SetIcon(new GameStatus(new PanelCollection([panel])));
    useCase.run(1, 1);

    expect(console.log).toBeCalled();
    expect(spyLog.mock.calls[0][0]).toBe('Setted Icon.');
});
