import { default as m } from 'mithril';
import GameStatusRepository from '../../../Domain/Repository/GameStatusRepository';

export default class GameOver implements m.ClassComponent {
    private gameStatusRepository: GameStatusRepository;

    constructor(gameStatusRepository: GameStatusRepository) {
        this.gameStatusRepository = gameStatusRepository;
    }

    view() {
        return m('div', this.gameStatusRepository.get().getWinnerIcon());
    }
}
