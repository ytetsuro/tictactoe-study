import Panel from '../DataModel/Panel';

export default class PanelListFetcher {
    public async fetch(): Promise<Panel[]> {
        return [
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 0, y: 2 },
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 1, y: 2 },
            { x: 2, y: 0 },
            { x: 2, y: 1 },
            { x: 2, y: 2 },
        ];
    }
}
