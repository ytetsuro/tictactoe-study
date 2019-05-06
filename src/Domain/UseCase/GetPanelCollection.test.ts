import GetPanelCollection from './GetPanelCollection';
import PanelCollection from '../Entity/PanelCollection';
import Panel from '../Entity/Panel';

it('パネルのコレクションが取得できるべき', async () => {
    const getPanelCollection = new GetPanelCollection(
        new class {
            fetch() {
                return Promise.resolve([{ x: 1, y: 1 }]);
            }
        }(),
    );
    const actual = await getPanelCollection.run();

    expect(new PanelCollection([new Panel(1, 1)])).toEqual(actual);
});
