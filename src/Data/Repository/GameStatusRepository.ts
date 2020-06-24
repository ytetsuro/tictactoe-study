import GameStatus from '../../Domain/Entity/GameStatus';

export default class GameStatusRepository {
    private store: WeakMap<GameStatusRepository, GameStatus>;

    public constructor() {
        this.store = new WeakMap();
    }

    public set(gameStatus: GameStatus) {
        this.store.set(this, gameStatus);
    }

    public get() {
        if (!this.store.has(this)) {
            throw new Error('ゲームが開始されていません。');
        }

        return <GameStatus>this.store.get(this);
    }
}
