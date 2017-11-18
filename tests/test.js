var {assert, expect} = require('chai')
var should = require('chai').should()
var Grid = require('../code/grid.js')

/*
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });

        it('should also work with expect', function(){
            expect('hermosa').to.be.a('string');
            expect('te amo').to.have.lengthOf(6);
        })

        it('should also be good with should', function(){
            var foo = 'jota';
            foo.should.equal('jota')
        })
    });
});*/

/*
* grid is data object - needs more than
*
* expect that cell has 8 neighbors
*
* if (live neighbors)
* */

describe('Conway Game of Life', function(){

    var grid = new Grid()
    var initCell = grid.createCell(true,[2,2])

    describe('one cell', function(){
        it('should have eight neighbors', function(){
            expect(Grid.getNeigbors(initCell)).to.have.lengthOf(8);
        })
    })
})

