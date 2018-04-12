import {isNum}  from 'src/index';
import chai from 'chai';
let expect=chai.expect;
describe('是否是数字的测试',()=>{
	it('23应该返回true',()=>{
        expect(isNum(23)).to.be.equal(true);
	});
});