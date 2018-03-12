import {pingPong} from '../src/ping-pong.js';

describe('pingPong', function() {

  it('should turn numbers into words', function() {
    var goal = 5;
    var output = pingPong(goal);
    expect(output).toEqual([1, 2, "ping", 4, "pong"]);
    expect(output).not.toEqual([1, 4, "bong"]);
  });
});
