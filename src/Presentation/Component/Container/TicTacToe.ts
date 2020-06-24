import { default as m } from 'mithril';
import Panel from '../Presentational/Panel';
import { default as ViewModel } from '../../ViewModel/TicTacToe';

export default class TicTacToe implements m.ClassComponent {
    private viewModel: ViewModel;

    constructor(viewModel: ViewModel) {
        this.viewModel = viewModel;
    }

    oninit() {
        this.viewModel.gameStart().then(() => {
            m.redraw();
        });
    }

    view() {
        return m(
            'div',
            this.viewModel.getPanelList().map(row => {
                return m(Panel, { entity: row, eventCreater: this.viewModel });
            }),
        );
    }
}
