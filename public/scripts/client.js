console.log('sourced for fun math time');

$(document).ready(function(){
  console.log('doc ready for fun math time');
  var xIn = '';
  var yIn = '';
  var opVal = '';
  var xNew = '';
  var i = 0;
  $('.num-button').on('click', function(){
    console.log($(this).data('type'));
    xIn += $(this).data('type');
    $('.inputOne').html(xIn);
  });
  $('.decimal-button').on('click', function(){
    console.log($(this).data('type'));
    console.log('click');
    if( i < 1){
    xIn += $(this).data('type');
    yIn += $(this).data('type');
      $('.inputOne').html(xIn);
      $('.inputOne').html(yIn);
      i++;
  }

});
  $('.math-button').on('click', function(){
    //get operation value and send to variable
    opVal = $(this).data('type');
    console.log(opVal);
    //get values from inputs
    yIn = '';
    xNew = xIn;
    i = 0;
    console.log(xNew);
    $('.inputOne').hide();
    $('.inputTwo').show();

  });
  $('.num-button').on('click', function(){
    console.log($(this).data('type'));
    yIn += $(this).data('type');
    $('.inputTwo').html(yIn);
  });
    $('.equal-button').on('click', function(){
      console.log(opVal);
    var inputObject = {x: Number(xNew), y: Number(yIn), type: opVal};
    console.log(inputObject);
    $.ajax({
      type: 'POST',
      url: '/numberSent',
      data: inputObject,
      success: function(data){
        console.log(data);
        $('.displayAnswer').html('<h3>' + data + '</h3>');
      }
    });
  });
  $('.clear-button').on('click', function(){

    $('.inputOne').html('Enter Number here:');
    $('.inputOne').show();
    $('.inputTwo').hide();
    xIn = '';
    yIn = '';
    opVal = '';
    $('.displayAnswer').html('<h3>Answer: </h3>');
  });
});
