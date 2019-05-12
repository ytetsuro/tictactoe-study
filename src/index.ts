import { default as ViewModel } from './Presentation/ViewModel/TicTacToe';
import GetPanelCollection from './Domain/UseCase/GetPanelCollection';
import PanelListFetcher from './Data/Repository/PanelListFetcher';
import { default as m } from 'mithril';
import TicTacToe from './Presentation/Component/Container/TicTacToe';

const panelListFetcher = new PanelListFetcher();
const getPanelCollection = new GetPanelCollection(panelListFetcher);
const viewModel = new ViewModel(getPanelCollection);

m.mount(document.body, new TicTacToe(viewModel));
