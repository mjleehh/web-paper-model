// jshint -W030
var self = require('../../../index');
var _ = require('lodash');
var fs = require('fs');
var expect = require('chai').expect;


describe('face intersection', function(){
    it('detects intersecting triangles', function(){
        var buffer = fs.readFileSync(__dirname + '/resources/intersecting-triangles.obj', {encoding: 'ascii'});
        var mesh = self.mesh.readObj(buffer);
        var triangle1 = _.map(mesh.faces[0].vertices, function(vertexIndex){
            return mesh.vertices[vertexIndex];
        });
        var triangle2 = _.map(mesh.faces[1].vertices, function(vertexIndex){
            return mesh.vertices[vertexIndex];
        });
        expect(self.algorithms.faces.doFacesIntersect(triangle1, triangle2)).to.be.true;
    });

    it('detects non intersecting triangles', function(){
        var buffer = fs.readFileSync(__dirname + '/resources/non-intersecting-triangles.obj', {encoding: 'ascii'});
        var mesh = self.mesh.readObj(buffer);
        var triangle1 = _.map(mesh.faces[0].vertices, function(vertexIndex){
            return mesh.vertices[vertexIndex];
        });
        var triangle2 = _.map(mesh.faces[1].vertices, function(vertexIndex){
            return mesh.vertices[vertexIndex];
        });
        expect(self.algorithms.faces.doFacesIntersect(triangle1, triangle2)).to.be.false;
    });
});
