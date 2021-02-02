export interface IPicture {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly availableSizes: readonly string[];
    readonly source: string;
}
