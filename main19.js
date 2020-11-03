$('div')
  .filter(function() {
    return this.id.match(/abc+d/);
  })
  .html("Matched!");
