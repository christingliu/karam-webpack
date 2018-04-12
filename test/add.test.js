import {addNum} from 'src/add';
import chai from 'chai';
let expect=chai.expect;
describe('加法测试',function(){
	it('1加1等于2',function(){
		expect(addNum(1,1)).to.be.equal(2);
	})
})