import Panel from './Panel';
import Icon from '../Enums/Icon';

test('座標がセットされるべき', () => {
    const panel = new Panel(1, 2);
    expect(1).toBe(panel.x);
    expect(2).toBe(panel.y);
});

test('初期化されたPanelクラスでは、Iconがセットされていないか', () => {
    const panel = new Panel(0, 0);
    expect(false).toBe(panel.hasIcon());
});

test('アイコンがセットされるべき', () => {
    const panel = new Panel(0, 0);
    panel.setIcon(Icon.BATSU);

    expect(true).toBe(panel.hasIcon());
});

test('アイコンがセットされている場合、アイコンがセットできないべき', () => {
    const panel = new Panel(0, 0);
    panel.setIcon(Icon.BATSU);

    expect(() => {
        panel.setIcon(Icon.BATSU);
    }).toThrowError('Setted Icon.');
});

test('アイコンがセットされていない場合には、取得することができないべき', () => {
    const panel = new Panel(0, 0);
    expect(() => {
        panel.getIcon();
    }).toThrowError('Not Found Icon.');
});

test('アイコンがセットされている場合には、取得することができるべき', () => {
    const panel = new Panel(0, 0);
    panel.setIcon(Icon.BATSU);

    expect(Icon.BATSU).toBe(panel.getIcon());
});
