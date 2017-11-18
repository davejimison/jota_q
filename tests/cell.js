var {assert, expect} = require('chai')
var should = require('chai').should()
var Cell = require('../code/cell.js')

// describe('Array', function() {
//     describe('#indexOf()', function() {
//         it('should return -1 when the value is not present', function() {
//             assert.equal(-1, [1,2,3].indexOf(4));
//         });
//
//         it('should also work with expect', function(){
//             expect('hermosa').to.be.a('string');
//             expect('te amo').to.have.lengthOf(6);
//         })
//
//         it('should also be good with should', function(){
//             var foo = 'jota';
//             foo.should.equal('jota')
//         })
//     });
// });

describe('Cell', function() {
  var cell;
  var grid;
  beforeEach(function () {
    cell = new Cell(true, [4,5]);
    dealcell = new Cell(false, [4,5]);
    grid = {
      getNeighbours: function (){
        return [null, null, null, null, null, null,null, null];
      }
    }
  });

  it('should have a status', function() {
    cell.status.should.equal(true)
  });

  it('should keep a future state', function() {
    cell.SetNextState(false);
    cell.nextState.should.equal(false);
  });
  ///MOVE TO GRID TEST
  it('should have 8 neighbours', function() {
    neighbours = grid.getNeighbours(cell.coordinates);
    expect(neighbours).to.have.lengthOf(8);
  });

  it('should die if fewer than 2 neighbours are alive', function() {
    neighbours = [cell, dealcell , dealcell]
    cell.determineNextState(neighbours)
    cell.nextState.should.equal(false)
  });


});
