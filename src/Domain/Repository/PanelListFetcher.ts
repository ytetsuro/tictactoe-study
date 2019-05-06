export default interface PanelListFetcher {
    /**
     * PanelListを取得する
     */
    fetch(): Promise<Panel[]>;
}

interface Panel {
    /**
     * x 座標
     */
    readonly x: number;

    /**
     * y 座標
     */
    readonly y: number;
}
