'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('generate function test', () => {
    it('should return true', async () => {

        var generate = await new index.MagicSquare(3).generate();

        var result;

        var premiereligne = generate[0][0] + generate[0][1] + generate[0][2];
        var deuxiemeligne = generate[1][0] + generate[1][1] + generate[1][2];
        var troisiemeligne = generate[2][0] + generate[2][1] + generate[2][2];

        var premierecolonne = generate[0][0] + generate[1][0] + generate[2][0];
        var deuxiemecolonne = generate[0][1] + generate[1][1] + generate[2][1];
        var troisiemecolonne = generate[0][2] + generate[1][2] + generate[2][2];

        var diagonale1 = generate[0][0] + generate[1][1] + generate[2][2];
        var diagonale2 = generate[2][0] + generate[1][1] + generate[0][2];

        var tab = new Array();
        tab.push(premiereligne, deuxiemeligne, troisiemeligne, premierecolonne, deuxiemecolonne, troisiemecolonne, diagonale1, diagonale2);

        if (tab.every(function(v) { return v === tab[0]; }))
        {
            result = true;
        } else 
        {
            result = false;
        }

        expect(result).to.equal(true);
    });
});