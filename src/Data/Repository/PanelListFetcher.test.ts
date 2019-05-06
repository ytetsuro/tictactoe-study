import PanelListFetcher from './PanelListFetcher';

it('PanelListFetcher.fetch では座標のリストを返すべき', async () => {
    const panelListFetcher = new PanelListFetcher();
    const panelList = await panelListFetcher.fetch();
    expect([
        { x: 0, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: 2 },
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 1, y: 2 },
        { x: 2, y: 0 },
        { x: 2, y: 1 },
        { x: 2, y: 2 },
    ]).toEqual(panelList);
});
