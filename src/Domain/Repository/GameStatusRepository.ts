import GameStatus from '../Entity/GameStatus';

export default interface GameStatusRepository {
    set(gameStatus: GameStatus): void;
    get(): GameStatus;
}
