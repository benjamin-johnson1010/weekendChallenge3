console.log('sourced for fun math time');

$(document).ready(function(){
  console.log('doc ready for fun math time');

  $('.math-button').on('click', function(){
    //get operation value and send to variable
    var opVal = $(this).data('type');
    //get values from inputs
    var xIn = $('#numberOneIn').val();
    var yIn = $('#numberTwoIn').val();
    if(xIn === '' || yIn === ''){
      alert('Please input numbers');
    }
    var inputObject = {x: Number(xIn), y: Number(yIn), type: opVal};
    console.log(inputObject);
    $.ajax({
      type: 'POST',
      url: '/numberSent',
      data: inputObject,
      success: function(data){
        console.log(data);
        $('.displayAnswer').html('<h2>' + data + '</h2>');
      }
    });
  });
  $('.clear-button').on('click', function(){
    $('#numberOneIn').val('');
    $('#numberTwoIn').val('');
    $('.displayAnswer').html('<h2>Answer: </h2>');
  });
});
