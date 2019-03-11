export class MagicSquare 
{
    // Dimension du carré magique (à renseigner) 
    private dimSquare                :   number = 3;

    private n                       :   number;
    private somme                   :   number;
    private sol                     :   number[][];
    private dejaPris                :   boolean[];

    constructor(dimension ?: number){ 
        this.dimSquare = (dimension >= 3) ? dimension : this.dimSquare;
        console.log(this.dimSquare);
        // Init de notre tableau de retour
        this.sol = [];
        for (var i = 0; i < this.dimSquare; i++) {
            this.sol[i] = [];
            for (var j = 0; j < this.dimSquare; j++){
                this.sol[i][j] = 0;
            }
        }
    }

    // Génération d'un carré magique
    public generate() : Promise<number[][] | null>
    {
        console.time();
        this.n = this.dimSquare * this.dimSquare;
        var sommeN2 : number = (this.n * (this.n + 1)) / 2;
        this.somme = sommeN2 / this.dimSquare;
        this.dejaPris = new Array<boolean>(this.n + 1);
        if (this.solve(0, 0, 0)) {
            console.log('Magic square : ', this.sol);
            console.timeEnd();
            return Promise.resolve(this.sol);
        }
        return Promise.reject('Pas de résultat');
    }

    // Solveur
    public solve(i : number, j : number, sommeLigneEnCours : number) : boolean {
        //Condition d'arrêt
        if (j >= this.dimSquare) {
            j = 0;
            i++;
            sommeLigneEnCours = 0;
        }

        if (i >= this.dimSquare) {
            return true;
        }

        // trouver une valeur pour la case i,j
        var end : number = Math.min(this.n, this.somme - sommeLigneEnCours);
        for (var v = 1; v <= end; v++) {
            if (!this.dejaPris[v]) {
                this.sol[i][j] = v;
                if (i == this.dimSquare - 1 && j == 0 && !this.checkDiag2())
                    continue;
                if (i == this.dimSquare - 1 && j == this.dimSquare - 1 && !this.checkDiag1())
                    continue;
                if (i == this.dimSquare - 1 && !this.checkCol(j)) {
                    continue;
                }
                this.dejaPris[v] = true;
                if (this.solve(i, j + 1, sommeLigneEnCours + v)) {
                    return true;
                }
                this.dejaPris[v] = false;
            }
        }
        return false;
    }

    // Vérification de la somme des colonnes
    private checkCol(j : number) : boolean {
        var s : number = 0;
        for (var i = 0; i < this.dimSquare; i++) {
            s += this.sol[i][j];
        }
        return (s == this.somme);
    }

    // Vérification de la somme de la première diagonale (de gauche à droite)
    private checkDiag1() : boolean {
        var s : number = 0;
        for (var i = 0; i < this.dimSquare; i++) {
            s += this.sol[i][i];
        }
        return (s == this.somme);
    }

    // Vérification de la somme de la deuxième diagonale (de droite à gauche)
    private checkDiag2() : boolean {
        var s : number = 0;
        for (var i = 0; i < this.dimSquare; i++) {
            s += this.sol[i][this.dimSquare-i-1];
        }
        return (s == this.somme);
    }
}