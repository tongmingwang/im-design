export default class RippleTask {
    #private;
    constructor();
    add(el: HTMLElement): Promise<void>;
    remove(): void;
    run(el: HTMLElement): Promise<void>;
}
