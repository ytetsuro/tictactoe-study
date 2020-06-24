import GameStatus from './GameStatus';
import Panel from '../Entity/Panel';
import PanelCollection from '../Entity/PanelCollection';
import Icon from '../Enums/Icon';

test('アイコンがセットされるべき', () => {
    const panel = new Panel(0, 0);
    const gameStatus = new GameStatus(
        new PanelCollection([
            panel,
            new Panel(1, 0),
            new Panel(2, 0),
            new Panel(0, 1),
            new Panel(1, 1),
            new Panel(2, 1),
            new Panel(0, 2),
            new Panel(1, 2),
            new Panel(2, 2),
        ]),
    );
    gameStatus.setIcon(0, 0);

    expect(Icon.MARU).toBe(panel.getIcon());
});

test('斜めか縦か横が全て丸だった場合はゲームが終了になり、マルが勝利アイコンになるべき', () => {
    const dataProvider = [
        // 横
        [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
        [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
        [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }],
        // 縦
        [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }],
        [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }],
        [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }],
        // 斜め
        [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }],
        [{ x: 0, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 0 }],
    ];

    dataProvider.forEach(row => {
        const panelCollection = new PanelCollection([
            new Panel(0, 0),
            new Panel(1, 0),
            new Panel(2, 0),
            new Panel(0, 1),
            new Panel(1, 1),
            new Panel(2, 1),
            new Panel(0, 2),
            new Panel(1, 2),
            new Panel(2, 2),
        ]);

        row.forEach(column => {
            const panel = panelCollection.findByPosition(column.x, column.y);
            panel.setIcon(Icon.MARU);
        });

        const gameStatus = new GameStatus(panelCollection);
        (<any>gameStatus).setGameOver();

        expect(false).toEqual(gameStatus.isPlayable());
        expect(Icon.MARU).toEqual(gameStatus.getWinnerIcon());
    });
});

test('斜めか縦か横が全てバツだった場合はゲームが終了になり、バツが勝利アイコンになるべき', () => {
    const dataProvider = [
        // 横
        [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
        [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
        [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }],
        // 縦
        [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }],
        [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }],
        [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }],
        // 斜め
        [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }],
        [{ x: 0, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 0 }],
    ];

    dataProvider.forEach(row => {
        const panelCollection = new PanelCollection([
            new Panel(0, 0),
            new Panel(1, 0),
            new Panel(2, 0),
            new Panel(0, 1),
            new Panel(1, 1),
            new Panel(2, 1),
            new Panel(0, 2),
            new Panel(1, 2),
            new Panel(2, 2),
        ]);

        row.forEach(column => {
            const panel = panelCollection.findByPosition(column.x, column.y);
            panel.setIcon(Icon.BATSU);
        });

        const gameStatus = new GameStatus(panelCollection);
        (<any>gameStatus).turn.switchIcon();
        (<any>gameStatus).setGameOver();

        expect(false).toEqual(gameStatus.isPlayable());
        expect(Icon.BATSU).toEqual(gameStatus.getWinnerIcon());
    });
});

test('パネルのIconがセットされていない場合、trueを返すべき', () => {
    const panelCollection = new PanelCollection([
        new Panel(0, 0),
        new Panel(1, 0),
        new Panel(2, 0),
        new Panel(0, 1),
        new Panel(1, 1),
        new Panel(2, 1),
        new Panel(0, 2),
        new Panel(1, 2),
        new Panel(2, 2),
    ]);

    const gameStatus = new GameStatus(panelCollection);
    (<any>gameStatus).setGameOver();

    expect(true).toEqual(gameStatus.isPlayable());
});

test('座標とIconが勝利条件を満たしていない場合、falseを返すべき', () => {
    const panelCollection = new PanelCollection([
        new Panel(0, 0),
        new Panel(1, 0),
        new Panel(2, 0),
        new Panel(0, 1),
        new Panel(1, 1),
        new Panel(2, 1),
        new Panel(0, 2),
        new Panel(1, 2),
        new Panel(2, 2),
    ]);

    const gameStatus = new GameStatus(panelCollection);
    gameStatus.setIcon(0, 1);
    gameStatus.setIcon(0, 0);
    gameStatus.setIcon(0, 2);

    expect(true).toEqual(gameStatus.isPlayable());
});

test('引き分けの場合、アイコンがundefinedで取得できるべき', () => {
    const panelCollection = new PanelCollection([
        new Panel(0, 0),
        new Panel(1, 0),
        new Panel(2, 0),
        new Panel(0, 1),
        new Panel(1, 1),
        new Panel(2, 1),
        new Panel(0, 2),
        new Panel(1, 2),
        new Panel(2, 2),
    ]);

    const gameStatus = new GameStatus(panelCollection);
    gameStatus.setIcon(1, 1);
    gameStatus.setIcon(2, 2);
    gameStatus.setIcon(2, 1);
    gameStatus.setIcon(0, 1);
    gameStatus.setIcon(0, 2);
    gameStatus.setIcon(2, 0);
    gameStatus.setIcon(1, 2);
    gameStatus.setIcon(1, 0);
    gameStatus.setIcon(0, 0);

    expect(false).toEqual(gameStatus.isPlayable());
    expect(undefined).toEqual(gameStatus.getWinnerIcon());
});
