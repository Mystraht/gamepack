/** List of gamestates for the game loop **/
define ([], function () {
  var GameStates = {
    STOPPED   : 0,
    LOADING	  : 1,
    PAUSED    : 2,
    RUNNING   : 3,
    BAD_ORIENTATION : 4,
    LOADING_ASSETs : 5
  };
  return GameStates;
});
