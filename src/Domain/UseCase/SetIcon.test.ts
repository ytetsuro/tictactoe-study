import SetIcon from './SetIcon';
import Panel from '../Entity/Panel';
import PanelCollection from '../Entity/PanelCollection';
import Icon from '../Enums/Icon';
import Turn from '../Entity/Turn';

beforeEach(() => {
    jest.clearAllMocks();
});

test('アイコンがセットされるべき', () => {
    const panel = new Panel(1, 1);
    const turn = new Turn();
    const useCase = new SetIcon(new PanelCollection([panel]), turn);
    useCase.run(1, 1);

    expect(Icon.MARU).toBe(panel.getIcon());
    expect(turn.getIcon()).toBe(Icon.BATSU);
});

test('座標が正しくない場合は、ログを書き込むべき', () => {
    const spyLog = jest.spyOn(console, 'log');
    spyLog.mockImplementation(x => x);

    const useCase = new SetIcon(new PanelCollection([]), new Turn());
    useCase.run(9999999, 99999999999999);

    expect(console.log).toBeCalled();
    expect(spyLog.mock.calls[0][0]).toBe('Not Found Panel.');
});

test('Iconがすでにセットされている場合にセットすると、ログを書き込むべき', () => {
    const spyLog = jest.spyOn(console, 'log');
    spyLog.mockImplementation(x => x);

    const panel = new Panel(1, 1);
    panel.setIcon(Icon.BATSU);

    const useCase = new SetIcon(new PanelCollection([panel]), new Turn());
    useCase.run(1, 1);

    expect(console.log).toBeCalled();
    expect(spyLog.mock.calls[0][0]).toBe('Setted Icon.');
});
