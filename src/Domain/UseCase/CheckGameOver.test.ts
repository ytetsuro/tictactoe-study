import CheckGameOver from './CheckGameOver';
import PanelCollection from '../Entity/PanelCollection';
import Panel from '../Entity/Panel';
import Icon from '../Enums/Icon';

test('斜めか縦か横が全て丸だった場合はtrueを返すべき', () => {
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
            new Panel(0, 0), new Panel(1, 0), new Panel(2, 0),
            new Panel(0, 1), new Panel(1, 1), new Panel(2, 1),
            new Panel(0, 2), new Panel(1, 2), new Panel(2, 2),
        ]);

        row.forEach(column => {
            const panel = panelCollection.findByPosition(column.x, column.y);
            panel.setIcon(Icon.MARU);
        });

        const checkGameOver = new CheckGameOver(panelCollection);
        const actual = checkGameOver.run();

        expect(true).toEqual(actual);
    });
});

test('斜めか縦か横が全てバツだった場合はtrueを返すべき', () => {
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
            new Panel(0, 0), new Panel(1, 0), new Panel(2, 0),
            new Panel(0, 1), new Panel(1, 1), new Panel(2, 1),
            new Panel(0, 2), new Panel(1, 2), new Panel(2, 2),
        ]);

        row.forEach(column => {
            const panel = panelCollection.findByPosition(column.x, column.y);
            panel.setIcon(Icon.BATSU);
        });

        const checkGameOver = new CheckGameOver(panelCollection);
        const actual = checkGameOver.run();

        expect(true).toEqual(actual);
    });
});

test('パネルのIconがセットされていない場合、falseを返すべき', () => {
    const panelCollection = new PanelCollection([
        new Panel(0, 0), new Panel(1, 0), new Panel(2, 0),
        new Panel(0, 1), new Panel(1, 1), new Panel(2, 1),
        new Panel(0, 2), new Panel(1, 2), new Panel(2, 2),
    ]);

    const checkGameOver = new CheckGameOver(panelCollection);
    const actual = checkGameOver.run();

    expect(false).toEqual(actual);
});

test('座標とIconが勝利条件を満たしていない場合、falseを返すべき', () => {
    const panelCollection = new PanelCollection([
        new Panel(0, 0), new Panel(1, 0), new Panel(2, 0),
        new Panel(0, 1), new Panel(1, 1), new Panel(2, 1),
        new Panel(0, 2), new Panel(1, 2), new Panel(2, 2),
    ]);

    const checkGameOver = new CheckGameOver(panelCollection);
    const actual = checkGameOver.run();

    panelCollection.findByPosition(0, 0).setIcon(Icon.BATSU);
    panelCollection.findByPosition(0, 1).setIcon(Icon.MARU);
    panelCollection.findByPosition(0, 2).setIcon(Icon.MARU);

    expect(false).toEqual(actual);
});