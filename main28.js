$("#monDiv").fadeOut('slow').queue(function() {
     $("#monDeuxiemeDiv").fadeIn('slow');
     $(this).dequeue();
  });
