import { default as m } from 'mithril';
import { default as PanelEntity } from '../../../Domain/Entity/Panel';
import TicTacToe from '../../ViewModel/TicTacToe';

export default class Panel implements m.ClassComponent<PanelSource> {
    view(vnode: m.Vnode<PanelSource>) {
        return m(
            'div.panel',
            {
                onclick: vnode.attrs.eventCreater.getSetIconEvent(vnode.attrs.entity),
            },
            [vnode.attrs.entity.hasIcon() ? vnode.attrs.entity.getIcon() : ''],
        );
    }
}

interface PanelSource {
    entity: PanelEntity;
    eventCreater: TicTacToe;
}
