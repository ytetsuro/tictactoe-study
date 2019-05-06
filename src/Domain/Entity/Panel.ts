import Icon from '../Enums/Icon';

export default class Panel {
    private icon?: Icon;
    readonly x: number;
    readonly y: number;

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
     * Iconがセットされているか検証する。
     *
     * @return {boolean}
     */
    public hasIcon(): boolean {
        return !this.icon === false;
    }

    /**
     * アイコンをセットする。
     *
     * @param {Icon} icon
     * @throws Error
     */
    public setIcon(icon: Icon) {
        if (this.icon) {
            throw new Error('Setted Icon.');
        }

        this.icon = icon;
    }

    /**
     * アイコンを取得する。
     *
     * @throws Error
     * @returns {Icon}
     */
    public getIcon(): Icon {
        if (!this.icon) {
            throw new Error('Not Found Icon.');
        }

        return this.icon;
    }
}
