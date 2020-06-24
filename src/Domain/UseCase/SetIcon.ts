import GameStatusRepository from '../Repository/GameStatusRepository';

export default class SetIcon {
    private gameStatusRepository: GameStatusRepository;

    public constructor(gameStatusRepository: GameStatusRepository) {
        this.gameStatusRepository = gameStatusRepository;
    }

    /**
     * Iconをセットする。
     *
     * @param {number} x
     * @param {number} y
     */
    public run(x: number, y: number) {
        try {
            this.gameStatusRepository.get().setIcon(x, y);
        } catch (e) {
            console.log(e.message);
        }
    }
}
