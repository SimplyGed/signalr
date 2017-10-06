export class Progress {
    public message: String;
    public percent: Number;

    constructor(message: string, percent: number) {
        this.message = message;
        this.percent = percent;
    }
}