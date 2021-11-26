var a = document.getElementById("a");
function Geeks() {
a.innerHTML="devicePixelRatio is : "+window.devicePixelRatio; 
} 
// tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
$(document).ready(function(){
  $('[data-toggle="tooltip"]').click(function () {
    $('[data-toggle="tooltip"]').tooltip("hide");
  });
});
// tooltip

// search-results
$(document).ready(function(){
  var awesomeBar = {
    toggleResults: function(){
      $('.search-results').show();
      if(!$('input').val().length >= 1){
        $('.search-results').hide();
      }
    },
    hideCloseIcon: function(){
      console.log('hey');
      $('.close-search')
        .text('more_vert')
        .addClass('dropdown')
        .removeClass('close-search');
      $('.dropdown').on('click', awesomeBar.toggleMenu);
      $('.search-icon').show();
      $('input').val('');
    },
  };
  $('body').on('click', '.close-search', awesomeBar.hideCloseIcon);
  $('input').keyup(awesomeBar.toggleResults);
  awesomeBar.showStatus();
  Mousetrap.bind('ctrl+space', function(e) {
    $('input').blur();
    awesomeBar.toggleSearch();
    $('.search-results').hide();
  });
});


// search-results modal popup
$(document).ready(function(){
  var awesomeBar = {
    toggleResults: function(){
      $('.search-results-modal').show();
      if(!$('#modal-search').val().length >= 1){
        $('.search-results-modal').hide();
      }
    },
    hideCloseIcon: function(){
      console.log('hey');
      $('.close-search')
        .text('more_vert')
          .addClass('dropdown')
            .removeClass('close-search');
      $('.dropdown').on('click', awesomeBar.toggleMenu);
      $('.search-icon').show();
      $('input').val('');
    },
  };
  $('body').on('click', '.close-search', awesomeBar.hideCloseIcon);
  $('input').keyup(awesomeBar.toggleResults);
  awesomeBar.showStatus();
  Mousetrap.bind('ctrl+space', function(e) {
    $('input').blur();
    awesomeBar.toggleSearch();
    $('.search-results-modal').hide();
  });
});

// search-results


// checkbox
$(function() {
  //If check_all checked then check all table rows
  $("#check_all").on("click", function () {
    if ($("input:checkbox").prop("checked")) {
      $("input:checkbox[name='row-check']").prop("checked", true);
    } else {
      $("input:checkbox[name='row-check']").prop("checked", false);
    }
  });

  // Check each table row checkbox
  $("input:checkbox[name='row-check']").on("change", function () {
    var total_check_boxes = $("input:checkbox[name='row-check']").length;
    var total_checked_boxes = $("input:checkbox[name='row-check']:checked").length;

    // If all checked manually then check check_all checkbox
    if (total_check_boxes === total_checked_boxes) {
      $("#check_all").prop("checked", true);
    }
    else {
      $("#check_all").prop("checked", false);
    }
  });
});
// checkbox

// read more
$(document).ready(function () {
  $('.nav-toggle').click(function () {
    var collapse_content_selector = $(this).attr('href');
    var toggle_switch = $(this);
    $(collapse_content_selector).toggle(function () {
      if ($(this).css('display') == 'none') {
        toggle_switch.html('Read More');
      } else {
        toggle_switch.html('Read Less');
      }
    });
  });
});
// read more

var Alert = new CustomAlert();
function CustomAlert(){
  this.render = function(){
      //Show Modal
      let popUpBox = document.getElementById('popUpBox');
      popUpBox.style.display = "block";
      //Close Modal
      document.getElementById('closeModal').innerHTML = '<div onclick="Alert.ok()">Cancel</div>';
  }
  
this.ok = function(){
  document.getElementById('popUpBox').style.display = "none";
  document.getElementById('popUpOverlay').style.display = "none";
}
}



//drag
$(document).ready(function() {
        // Initialise the first table (as before)
        $("#mainwatchlist").tableDnD();
    });

const slider = document.querySelector('.itemslide');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});
// drag