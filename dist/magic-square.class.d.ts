export declare class MagicSquare {
    private dimSquare;
    private n;
    private somme;
    private sol;
    private dejaPris;
    constructor(dimension?: number);
    generate(): Promise<number[][] | null>;
    solve(i: number, j: number, sommeLigneEnCours: number): boolean;
    private checkCol;
    private checkDiag1;
    private checkDiag2;
}
