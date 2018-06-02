var vowelArr = ['a', 'e', 'i', 'o', 'u']

function vowelCount(userInput) {
  var count = 0
  for(var i = 0; i < userInput.length; i++) {
    if(vowelArr.includes(userInput[i].toLowerCase())) {
      count++
    }
  }
  count = count.toString()
  return count
}

$(document).ready(function() {
var userInput = $('#text-box').val()

var count = vowelCount(userInput)

$('#count').on('click', function() {
  console.log('it worked')
  console.log($('#text-box').val())
  $('#totalCount').text(vowelCount($('#text-box').val()))
  $('#text-box').val('')
})
})

