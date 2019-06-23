import StartGame from './StartGame';
import PanelCollection from '../Entity/PanelCollection';
import GameStatus from '../Entity/GameStatus';
import Panel from '../Entity/Panel';

it('パネルのコレクションが取得できるべき', async () => {
    let gameStatusDummy;
    const startGame = new StartGame(
        new class {
            fetch() {
                return Promise.resolve([{ x: 1, y: 1 }]);
            }
        }(),
        new class {
            set(gameStatus: GameStatus) {
                gameStatusDummy = gameStatus;
            }
            get() {
                return new GameStatus(new PanelCollection([]));
            }
        }(),
    );
    const actual = await startGame.run();

    expect(new GameStatus(new PanelCollection([new Panel(1, 1)]))).toEqual(actual);
    expect(gameStatusDummy).toStrictEqual(actual);
});
