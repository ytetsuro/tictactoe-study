import PanelCollection from './PanelCollection';
import Panel from './Panel';

test('PanelのListを持っているべき', () => {
    const panelCollection = new PanelCollection([new Panel(1, 2), new Panel(0, 2)]);

    expect([new Panel(1, 2), new Panel(0, 2)]).toEqual(panelCollection.collection);
});

test('xとyを元にPanelクラスを取得できるべき', () => {
    const panelCollection = new PanelCollection([new Panel(1, 2), new Panel(0, 2)]);

    expect(new Panel(0, 2)).toEqual(panelCollection.findByPosition(0, 2));
});

test('xとyからPanelクラスを取得でない時に、エラーが発生するべき', () => {
    const panelCollection = new PanelCollection([new Panel(1, 2), new Panel(0, 2)]);

    expect(() => {
        panelCollection.findByPosition(9999, 9999);
    }).toThrowError('Not Found Panel.');
});

test('ソート済みのPanelクラスのリストを返すべき', () => {
    const panelCollection = new PanelCollection([
        new Panel(1, 0),
        new Panel(2, 2),
        new Panel(0, 1),
        new Panel(1, 1),
        new Panel(1, 2),
        new Panel(1, 1),
    ]);

    expect([
        new Panel(0, 1),
        new Panel(1, 0),
        new Panel(1, 1),
        new Panel(1, 1),
        new Panel(1, 2),
        new Panel(2, 2),
    ]).toEqual(panelCollection.getSortedList());
});
