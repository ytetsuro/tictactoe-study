import { default as ViewModel } from './Presentation/ViewModel/TicTacToe';
import StartGame from './Domain/UseCase/StartGame';
import PanelListFetcher from './Data/Repository/PanelListFetcher';
import { default as m } from 'mithril';
import TicTacToe from './Presentation/Component/Container/TicTacToe';
import GameStatusRepository from './Data/Repository/GameStatusRepository';
import SetIcon from './Domain/UseCase/SetIcon';
import GameOver from './Presentation/Component/Container/GameOver';

const panelListFetcher = new PanelListFetcher();
const gameStatusRepository = new GameStatusRepository();
const startGame = new StartGame(panelListFetcher, gameStatusRepository);
const setIcon = new SetIcon(gameStatusRepository);
const viewModel = new ViewModel(startGame, setIcon);

m.route(document.body, '/', {
    '/': new TicTacToe(viewModel),
    '/show_winning': new GameOver(gameStatusRepository),
});
