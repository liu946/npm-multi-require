/**
 * Created by liu946 on 16/10/2.
 * Email mkliuyag@163.com
 */

'use strict';
require('chai').should();
const dirRequire = require('../');
const path = require('path');

describe('import dictionary', function() {

  it(`import when match`, function (done) {
    const modules = dirRequire.load(path.join(__dirname, 'moduleDir'), {match: 'testModule1.js'});
    modules.should.have.property('testModule1');
    modules.should.not.have.property('testModule2');
    modules.should.not.have.property('testIgnoreModule');
    done();
  });

  it(`import when match`, function (done) {
    const modules = dirRequire.load(path.join(__dirname, 'moduleDir'), {match: ['testModule1.js', 'testModule2.js']});
    modules.should.have.property('testModule1');
    modules.should.have.property('testModule2');
    modules.should.not.have.property('testIgnoreModule');
    done();
  });

  it(`import when match Regx`, function (done) {
    const modules = dirRequire.load(path.join(__dirname, 'moduleDir'), {match: /testModule\d.js/});
    modules.should.have.property('testModule1');
    modules.should.have.property('testModule2');
    modules.should.not.have.property('testIgnoreModule');
    done();
  });

  it(`import when ignore`, function (done) {
    const modules = dirRequire.load(path.join(__dirname, 'moduleDir'), {ignore: 'testIgnoreModule.js'});
    modules.should.have.property('testModule1');
    modules.should.have.property('testModule2');
    modules.should.not.have.property('testIgnoreModule');
    done();
  });

  it(`import when ignore list`, function (done) {
    const modules = dirRequire.load(path.join(__dirname, 'moduleDir'), {ignore: ['testIgnoreModule.js']});
    modules.should.have.property('testModule1');
    modules.should.have.property('testModule2');
    modules.should.not.have.property('testIgnoreModule');
    done();
  });

});

describe('import list', function() {
  it(`import when ignore`, function (done) {
    const modules = dirRequire.loadArray(path.join(__dirname, 'moduleDir'), {ignore: 'testIgnoreModule.js'});
    modules.should.have.length(2);
    done();
  });

  it(`import when ignore list`, function (done) {
    const modules = dirRequire.loadArray(path.join(__dirname, 'moduleDir'), {ignore: ['testIgnoreModule.js']});
    modules.should.have.length(2);
    done();
  });

});
