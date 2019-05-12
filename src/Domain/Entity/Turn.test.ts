import Turn from './Turn';
import Icon from '../Enums/Icon';

test('Iconは変更しない場合、マルであるべき', () => {
    const turn = new Turn();
    expect(turn.getIcon()).toBe(Icon.MARU);
});

test('Iconを変更する場合、バツであるべき', () => {
    const turn = new Turn(Icon.BATSU);
    expect(turn.getIcon()).toBe(Icon.BATSU);
});

test('Iconを変更できるべき', () => {
    const turn = new Turn();
    turn.switchIcon();
    expect(turn.getIcon()).toBe(Icon.BATSU);
});
