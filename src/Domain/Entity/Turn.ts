import Icon from '../Enums/Icon';

export default class Turn {
    private icon: Icon;

    public constructor(icon: Icon = Icon.MARU) {
        this.icon = icon;
    }

    public switchIcon() {
        this.icon = this.icon === Icon.MARU ? Icon.BATSU : Icon.MARU;
    }

    public getIcon(): Icon {
        return this.icon;
    }
}
