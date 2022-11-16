function buttonClick() {

  var first_column = $('table.timetable tr td:nth-child(2)');

  // var saveButton = document.getElementById("myButtonId"); 
  // column 2
  var checkedRowIndices = [];
  $('table.timetable tr td:nth-child(2) input[type=checkbox]').each(function(index) {
      if ($(this)[0].checked) {
          checkedRowIndices.push(index + 1);
      }
  })

  console.warn(checkedRowIndices);

  // column 3
  var checkedRowIndices = [];
  $('table.timetable tr td:nth-child(3) input[type=checkbox]').each(function(index) {
      if ($(this)[0].checked) {
          checkedRowIndices.push(index + 1);
      }
  })

  console.warn(checkedRowIndices);

}



function courseClick() {

  // column 1
  var courseDates = [];
  $('table.courseTable tr td:nth-child(1)').each(function(index) {
      courseDates.push($(this).html());
  })

  console.warn(courseDates);

  // column 2
  var courseCodes = [];
  $('table.courseTable tr td:nth-child(2)').each(function(index) {
      courseCodes.push($(this).html());
  })

  console.warn(courseCodes);

}

$(document).ready(function(e) {
  // alert('Hello');
  // $('table.timetable tr td:nth-child(2), table.services tr td:nth-child(3)')

  var first_column = $('table.timetable tr td:nth-child(2)');
  var second_column = $('table.services tr td:nth-child(3)');

  // $('body').append(first_column);
  // console.error(first_column);

});



var monthData = [{
      "dayOfMonth": 1,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 2,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 3,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 4,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 5,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 6,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 7,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 8,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 9,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 10,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 11,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 12,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 13,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 14,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 15,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 16,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 17,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 18,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 19,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 20,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 21,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 22,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 23,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 24,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 25,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 26,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 27,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 28,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 29,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 30,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  },
  {
      "dayOfMonth": 31,
      "month": 0,
      "dateOfWeek": 0,
      "course": "",
      "courseCode": "",
      "level": "",
      "assigned": false,
      "assignedTo": ""
  }

];


var avaliabitly =

  [{

          "day": 1,
          "available": false,
          "standBy": false
      },
      {

          "day": 2,
          "available": false,
          "standBy": false
      },
      {

          "day": 3,
          "available": false,
          "standBy": false
      },
      {

          "day": 4,
          "available": false,
          "standBy": false
      },
      {

          "day": 5,
          "available": false,
          "standBy": false
      },
      {

          "day": 6,
          "available": false,
          "standBy": false
      },
      {

          "day": 7,
          "available": false,
          "standBy": false
      },
      {

          "day": 8,
          "available": false,
          "standBy": false
      },
      {

          "day": 9,
          "available": false,
          "standBy": false
      },
      {

          "day": 10,
          "available": false,
          "standBy": false
      },
      {

          "day": 11,
          "available": false,
          "standBy": false
      },
      {

          "day": 12,
          "available": false,
          "standBy": false
      },
      {

          "day": 13,
          "available": false,
          "standBy": false
      },
      {

          "day": 14,
          "available": false,
          "standBy": false
      },
      {

          "day": 15,
          "available": false,
          "standBy": false
      },
      {

          "day": 16,
          "available": false,
          "standBy": false
      },
      {

          "day": 17,
          "available": false,
          "standBy": false
      },
      {

          "day": 18,
          "available": false,
          "standBy": false
      },
      {

          "day": 19,
          "available": false,
          "standBy": false
      },
      {

          "day": 20,
          "available": false,
          "standBy": false
      },
      {

          "day": 21,
          "available": false,
          "standBy": false
      },
      {

          "day": 22,
          "available": false,
          "standBy": false
      },
      {

          "day": 23,
          "available": false,
          "standBy": false
      },
      {

          "day": 24,
          "available": false,
          "standBy": false
      },
      {

          "day": 25,
          "available": false,
          "standBy": false
      },
      {

          "day": 26,
          "available": false,
          "standBy": false
      },
      {

          "day": 27,
          "available": false,
          "standBy": false
      },
      {

          "day": 28,
          "available": false,
          "standBy": false
      },
      {

          "day": 29,
          "available": false,
          "standBy": false
      },
      {

          "day": 30,
          "available": false,
          "standBy": false
      },
      {

          "day": 31,
          "available": false,
          "standBy": false
      }

  ];

function getNoOfDaysInCurrentMonth() {
  const date = new Date();

  return new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
  ).getDate();
}

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var day = days[new Date().getDay()];
var month = months[new Date().getMonth()];

const result = getNoOfDaysInCurrentMonth();
console.log(result);
console.log(day);
console.log(month);


var dayOfTheWeek = (day, month, year) => {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekday[new Date(`${month}/${day}/${year}`).getDay()];
  };
  
// console.log(dayOfTheWeek(14, 11, 2022));

function checkSunday(day, month, year) {
    var result = dayOfTheWeek(day, month, year);
    if(result == "Sunday")
        return true;
    else 
        return false;
}

function courseDayOnChange(inputDate) {
    isSunday = checkSunday(inputDate, 11, 2022);
    
    if(!isSunday)
        alert('Entered day is not on Sunday');
}



const jsonToDownload = '{"foo":42}';

function download() {
  const aElem = document.createElement("A");
  aElem.href = 'data:application/octet-stream,' + jsonToDownload;
  aElem.download = 'filename.json';
  aElem.click();
}


var course = ['Aero', 'HPL', 'AGK', 'MET', 'Pref', 'FlightPlan'];
var course_assigned = [false, false, false, false, false, false];
var course_date = [1, 2, 14, 21, 26, 29];
var course_assignee = ['', '', '', '', '', ''];

var tutor = ['jayden', 'kat', 'fred', 'kieth', 'simon'];

var jayden = [1, 2, 4, 8, 9, 11, 13, 14, 23, 26];
window['tutor_' + 0] = [1, 2, 4, 8, 9, 11, 13, 14, 23, 26];

var kat = [1, 2, 4, 8, 12, 15, 16, 19, 21, 23, 26];
window['tutor_' + 1] = [1, 2, 4, 8, 12, 15, 16, 19, 21, 23, 26];

var fred = [3, 4, 5, 14, 17, 20, 21, 23, 26];
window['tutor_' + 2] = [3, 4, 5, 14, 17, 20, 21, 23, 26];

var keith = [2, 8, 7, 8, 9, 14, 21, 23, 26];
window['tutor_' + 3] = [2, 8, 7, 8, 9, 14, 21, 23, 26];

var simon = [2, 8, 9, 14, 17, 20, 21, 23, 29];
window['tutor_' + 4] = [2, 8, 9, 14, 17, 20, 21, 23, 29];


var id_counter = 0;
var assigned = false;
var counter_id = 0;
var max_counter_id = tutor.length - 1;
var last_tutor_index = 0;


// First round 
for (var i = 0; i < course.length; i++) {
  var date = course_date[i];
  console.error('current date ' + date);
  console.error('============  current course INDEX ' + i + " =================");
  assigned = false;

  console.info('======= course array index ' + i);
  console.info('======= course date ' + course_date);

  var tutor_index = 0;

  for (var k = 0; k < tutor.length; k++) {
      console.info('==== course start 0TTTTT ');
      console.info('==== last_tutor_index  ' + last_tutor_index);
      tutor_index = last_tutor_index;

      // make sure the previous assignee is not the same person
      // if (counter_id < 1 && course_assignee[i - 1] != tutor[i]) {
          console.info('==== course start 1XXXX ');

          for (var j = 0; j < tutor.length; j++) {
              console.info('==== accessing Windows Tutor ' + 'tutor_' + tutor_index);

              for (var index = 0; index < window['tutor_' + tutor_index].length; index++) {
                  console.info('tutor_index ' + tutor_index);
                  console.info(' index  ' + j + " " + window['tutor_' + tutor_index][j]);
                  var tutor_date = window['tutor_' + tutor_index][index];

                  console.error('=== Current tutor_date ' + tutor_date);
                  console.error('=== Current date ' + date);
                  console.error('=== Current tutor ', tutor[tutor_index]);

                  if (tutor_date === date) {
                      course_assignee[i] = tutor[tutor_index];
                      console.warn('Assigned to course_assignee-index ' + i);
                      window['tutor_' + tutor_index] = window['tutor_' + tutor_index].filter(item => item !== tutor_date);

                      assigned = true;

                      console.warn('=== BINGO  ' + window['tutor_' + tutor_index]);
                      console.warn('=== BINGO  tutor_ index ' + tutor_index);
                      console.warn('=== BINGO course_assignee below');
                      console.warn(course_assignee);
                      counter_id++;
                      last_tutor_index = tutor_index;

                      console.error('Setting last tutor index  ' + last_tutor_index);
                      last_tutor_index++;

                      if (last_tutor_index == tutor.length) {
                          last_tutor_index = 0;
                      }

                      if (last_tutor_index == tutor.length) {
                          // last_tutor_index = 0;
                      }
                      console.error('Setting last tutor index after ++ ' + last_tutor_index);

                      break;
                  }
                  console.info('AAABBB  array ' + j);

              }

              if (assigned) {
                  console.info('==== Assigned');
                  console.info('==== counter_id ' + counter_id);
                  console.info('==== course index ' + i);
                  break
              }
          }

      // }

  }


  counter_id = 0;
  console.error('Done first assignment. Result as below');
  console.warn(course_assignee);
}




// Second round to assign tutor to courses without assignee yet 

for (var i = 0; i < course.length; i++) {
  console.error('Second round start !!!');

  if (course_assignee[i] === "") {
      var date = course_date[i];
      console.error('current date ' + date);
      console.error('##################  current course INDEX ' + i + " ##################");
      assigned = false;

      console.info('######### course array index ' + i);
      console.info('#########course date ' + course_date);

      var tutor_index = 0;

      for (var k = 0; k < tutor.length; k++) {
          console.info('######### course start 0TTTTT ');
          console.info('######### last_tutor_index  ' + last_tutor_index);
          tutor_index = last_tutor_index;

          // make sure the previous assignee is not the same person
          // if (counter_id < 1 && course_assignee[i - 1] != tutor[i]) {
              console.info('######### course start 1XXXX ');

              for (var j = 0; j < tutor.length; j++) {
                  console.info('######### accessing Windows Tutor ' + 'tutor_' + tutor_index);

                  for (var index = 0; index < window['tutor_' + tutor_index].length; index++) {
                      console.info('tutor_index ' + tutor_index);
                      console.info(' index  ' + j + " " + window['tutor_' + tutor_index][j]);
                      var tutor_date = window['tutor_' + tutor_index][index];

                      console.error('######### Current tutor_date ' + tutor_date);
                      console.error('######### Current date ' + date);
                      console.error('######### Current tutor ', tutor[tutor_index]);

                      if (tutor_date === date) {
                          course_assignee[i] = tutor[tutor_index];
                          console.warn('Assigned to course_assignee-index ' + i);
                          window['tutor_' + tutor_index] = window['tutor_' + tutor_index].filter(item => item !== tutor_date);

                          assigned = true;

                          console.warn('######### BINGO  ' + window['tutor_' + tutor_index]);
                          console.warn('######### BINGO  tutor ' + tutor[tutor_index]);
                          console.warn('######### BINGO  tutor_ index ' + tutor_index);
                          console.warn('######### BINGO course_assignee below');
                          console.warn(course_assignee);
                          counter_id++;
                          last_tutor_index = tutor_index;

                          console.error('Setting last tutor index  ' + last_tutor_index);
                          last_tutor_index++;

                          if (last_tutor_index == tutor.length) {
                              last_tutor_index = 0;
                          }

                          if (last_tutor_index == tutor.length) {
                              // last_tutor_index = 0;
                          }
                          console.error('Setting last tutor index after ++ ' + last_tutor_index);

                          break;
                      }
                      console.info('AAABBB  array ' + j);

                  }

                  if (assigned) {
                      console.info('######### Assigned');
                      console.info('######### counter_id ' + counter_id);
                      console.info('######### course index ' + i);
                      break
                  }
              }

          // }

      }


      counter_id = 0;
      console.error('Done second assignment. Result as below');
      console.warn(course_assignee);
  }
}

function assignment() {



  var course = ['Aero', 'HPL', 'AGK', 'MET', 'Pref', 'FlightPlan'];


  // console.warn(course);

  // column 2
  course = [];
  $('table.courseTable tr td:nth-child(2)').each(function(index) {
      course.push($(this).html());
  })


//----------------------------------------

  console.warn(course);
  var course_assigned = [false, false, false, false, false, false];
  var course_date = [1, 2, 14, 21, 26, 29];

  // column 1
  course_date = [];
  $('table.courseTable tr td:nth-child(1) input:text').each(function(index) {
      // course_date.push($(this).html());
      course_date.push($(this).val());
  })
  console.warn(course_date);

  var course_assignee = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

  // var tutor = ['jayden', 'kat', 'fred', 'kieth', 'simon'];
  var tutor = ['', '', '', '', ''];

  const numberArray = ['0', '1', '2', '3', '4'];
  shuffleArray(numberArray);
  
  function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
  }
  

//----------------------------------------
  var jayden = [1, 2, 4, 8, 9, 11, 13, 14, 23, 26];
  
  tutor[numberArray[0]] = 'Jayden';
  window['tutor_' + numberArray[0]] = [1, 2, 4, 8, 9, 11, 13, 14, 23, 26];

  var jaydenCheckedRowIndices = [];
  $('table.timetable tr td:nth-child(2) input[type=checkbox]').each(function(index) {
      if ($(this)[0].checked) {
          jaydenCheckedRowIndices.push((index + 1).toString());
      }
  })
  window['tutor_' + numberArray[0]] = jaydenCheckedRowIndices;

  console.info('jayden checked ');
  console.info(window['tutor_' + numberArray[0]]);

//----------------------------------------
  tutor[numberArray[1]] = 'Kat';
  var kat = [1, 2, 4, 8, 12, 15, 16, 19, 21, 23, 26];
  window['tutor_' + numberArray[1]] = [1, 2, 4, 8, 12, 15, 16, 19, 21, 23, 26];

  var katCheckedRowIndices = [];
  $('table.timetable tr td:nth-child(3) input[type=checkbox]').each(function(index) {
      if ($(this)[0].checked) {
          katCheckedRowIndices.push((index + 1).toString());
      }
  })
  window['tutor_' + numberArray[1]] = katCheckedRowIndices;


//----------------------------------------
  tutor[numberArray[2]] = 'Fred';
  var fred = [3, 4, 5, 14, 17, 20, 21, 23, 26];
  window['tutor_' + numberArray[2]] = [3, 4, 5, 14, 17, 20, 21, 23, 26];

  var fredCheckedRowIndices = [];
  $('table.timetable tr td:nth-child(4) input[type=checkbox]').each(function(index) {
      if ($(this)[0].checked) {
          fredCheckedRowIndices.push((index + 1).toString());
      }
  })
  window['tutor_' + numberArray[2]] = fredCheckedRowIndices;

//----------------------------------------
  tutor[numberArray[3]] = 'Keith';
  var keith = [2, 8, 7, 8, 9, 14, 21, 23, 26];
  window['tutor_' + numberArray[3]] = [2, 8, 7, 8, 9, 14, 21, 23, 26];

  var kiethCheckedRowIndices = [];
  $('table.timetable tr td:nth-child(5) input[type=checkbox]').each(function(index) {
      if ($(this)[0].checked) {
          kiethCheckedRowIndices.push((index + 1).toString());
      }
  })
  window['tutor_' + numberArray[3]] = kiethCheckedRowIndices;

//----------------------------------------
  tutor[numberArray[4]] = 'Simon';
  var simon = [2, 8, 9, 14, 17, 20, 21, 23, 29];
  window['tutor_' + numberArray[4]] = [2, 8, 9, 14, 17, 20, 21, 23, 29];

  var simonCheckedRowIndices = [];
  $('table.timetable tr td:nth-child(6) input[type=checkbox]').each(function(index) {
      if ($(this)[0].checked) {
          simonCheckedRowIndices.push((index + 1).toString());
      }
  })
  window['tutor_' + numberArray[4]] = simonCheckedRowIndices;

  console.info('Simon checked ');
  console.info(window['tutor_' + numberArray[4]]);



  //----------------------------------------

  
  // teachable

  //----------------------------------------
  jaydenTechableCourse = [];
  $('table.teachableTable tr td:nth-child(2) input[type=checkbox]').each(function(index) {
    if ($(this)[0].checked) {
        // jaydenTechableCourse.push((index));
        jaydenTechableCourse.push(( $('table.teachableTable tr:nth-child('+ (index + 1) +') td:nth-child(1)').html() ));
    }
  })
  window['tutor_teachable_' + numberArray[0]] = jaydenTechableCourse;

  console.info('Jayden teachable ');
  console.info(window['tutor_teachable_' + numberArray[0]]);


  //----------------------------------------
  katTechableCourse = [];
  $('table.teachableTable tr td:nth-child(3) input[type=checkbox]').each(function(index) {
    if ($(this)[0].checked) {
        katTechableCourse.push(( $('table.teachableTable tr:nth-child('+ (index + 1) +') td:nth-child(1)').html() ));
    }
  })
  window['tutor_teachable_' + numberArray[1]] = katTechableCourse;

  //----------------------------------------
  fredTechableCourse = [];
  $('table.teachableTable tr td:nth-child(4) input[type=checkbox]').each(function(index) {
    if ($(this)[0].checked) {
        fredTechableCourse.push(( $('table.teachableTable tr:nth-child('+ (index + 1) +') td:nth-child(1)').html() ));
    }
  })
  window['tutor_teachable_' + numberArray[2]] = fredTechableCourse;

  //----------------------------------------
  keithTechableCourse = [];
  $('table.teachableTable tr td:nth-child(5) input[type=checkbox]').each(function(index) {
    if ($(this)[0].checked) {
        keithTechableCourse.push(( $('table.teachableTable tr:nth-child('+ (index + 1) +') td:nth-child(1)').html() ));
    }
  })
  window['tutor_teachable_' + numberArray[3]] = keithTechableCourse;

  //----------------------------------------
  simonTechableCourse = [];
  $('table.teachableTable tr td:nth-child(6) input[type=checkbox]').each(function(index) {
    if ($(this)[0].checked) {
        simonTechableCourse.push(( $('table.teachableTable tr:nth-child('+ (index + 1) +') td:nth-child(1)').html() ));
    }
  })
  window['tutor_teachable_' + numberArray[4]] = simonTechableCourse;

  console.info('Simon teachable ');
  console.info(window['tutor_teachable_' + numberArray[4]]);



  var id_counter = 0;
  var assigned = false;
  var counter_id = 0;
  var max_counter_id = tutor.length - 1;
  var last_tutor_index = 0;


  // First round 
  for (var i = 0; i < course.length; i++) {
      var date = course_date[i];
      console.error('current date ' + date);
      console.error('============  current course INDEX ' + i + " =================");
      assigned = false;

      console.info('======= course array index ' + i);
      console.info('======= course date ' + course_date);

      var tutor_index = 0;

      // for (var k = 0; k < tutor.length; k++) {
          console.info('==== course start 0TTTTT ');
          console.info('==== last_tutor_index  ' + last_tutor_index);
          tutor_index = last_tutor_index;

          // make sure the previous assignee is not the same person
          // if (counter_id < 1 && course_assignee[i - 1] != tutor[i]) {
              console.info('==== course start 1XXXX ');

              for (var j = tutor_index; j < tutor.length; j++) {
                  console.info('==== accessing Windows Tutor ' + 'tutor_' + j);

                  for (var index = 0; index < window['tutor_' + j].length; index++) {
                      console.info('tutor_index ' + j);
                      console.info(' index  ' + j + " " + window['tutor_' + j][index]);
                      var tutor_date = window['tutor_' + j][index];

                      console.error('=== Current tutor_date ' + tutor_date);
                      console.error('=== Current date ' + date);
                      console.error('=== Current tutor ', tutor[j]);

                      console.error(window['tutor_teachable_' + j]);
                      console.error(course[i]);
                      
                      if ( tutor_date === date && (window['tutor_teachable_' + j].includes(course[i])) ) { 
                          course_assignee[i] = tutor[j];
                          console.warn('Assigned to course_assignee-index ' + i);
                          window['tutor_' + j] = window['tutor_' + j].filter(item => item !== tutor_date);

                          assigned = true;

                          console.warn('=== BINGO  ' + window['tutor_' + j]);
                          console.warn('=== BINGO  tutor_ index ' + j);
                          console.warn('=== BINGO course_assignee below');
                          console.warn(course_assignee);
                          counter_id++;
                          last_tutor_index = j;

                          console.error('Setting last tutor index  ' + last_tutor_index);
                          last_tutor_index++;

                          if (last_tutor_index == tutor.length) {
                              last_tutor_index = 0;
                          }

                          if (last_tutor_index == tutor.length) {
                              // last_tutor_index = 0;
                          }
                          console.error('Setting last tutor index after ++ ' + last_tutor_index);

                          break;
                      }
                      console.info('AAABBB  array ' + j);

                  }

                  if (assigned) {
                      console.info('==== Assigned');
                      console.info('==== counter_id ' + counter_id);
                      console.info('==== course index ' + i);
                      break
                  }
              }

          // }

      // }


      counter_id = 0;
      console.error('Done first assignment. Result as below');
      console.warn(course_assignee);
  }




  // Second round to assign tutor to courses without assignee yet 
  
  for (var i = 0; i < course.length; i++) {
      console.error('Second round start !!!');

      if (course_assignee[i] === "") {
          var date = course_date[i];
          console.error('current date ' + date);
          console.error('##################  current course INDEX ' + i + " ##################");
          assigned = false;

          last_tutor_index = 0;
          console.info('######### course array index ' + i);
          console.info('#########course date ' + course_date);

          var tutor_index = 0;

          // for (var k = 0; k < tutor.length; k++) {
              console.info('######### course start 0TTTTT ');
              console.info('######### last_tutor_index  ' + last_tutor_index);
              tutor_index = last_tutor_index;

              // make sure the previous assignee is not the same person
              // if (counter_id < 1 && course_assignee[i - 1] != tutor[i]) {
                  console.info('######### course start 1XXXX ');

                  for (var j = tutor_index; j < tutor.length; j++) {
                      console.info('######### accessing Windows Tutor ' + 'tutor_' + j);

                      for (var index = 0; index < window['tutor_' + j].length; index++) {
                          console.info('tutor_index ' + j);
                          console.info(' index  ' + j + " " + window['tutor_' + j][index]);
                          var tutor_date = window['tutor_' + j][index];

                          console.error('######### Current tutor_date ' + tutor_date);
                          console.error('######### Current date ' + date);
                          console.error('######### Current tutor ', tutor[j]);


                          if ( tutor_date === date && (window['tutor_teachable_' + j].includes(course[i])) ) { 
                              course_assignee[i] = tutor[j];
                              console.warn('Assigned to course_assignee-index ' + i);
                              window['tutor_' + j] = window['tutor_' + j].filter(item => item !== tutor_date);

                              assigned = true;

                              console.warn('######### BINGO  ' + window['tutor_' + j]);
                              console.warn('######### BINGO  tutor ' + tutor[j]);
                              console.warn('######### BINGO  tutor_ index ' + j);
                              console.warn('######### BINGO course_assignee below');
                              console.warn(course_assignee);
                              counter_id++;
                              last_tutor_index = j;

                              console.error('Setting last tutor index  ' + last_tutor_index);
                              last_tutor_index++;

                              if (last_tutor_index == tutor.length) {
                                  last_tutor_index = 0;
                              }

                              if (last_tutor_index == tutor.length) {
                                  // last_tutor_index = 0;
                              }
                              console.error('Setting last tutor index after ++ ' + last_tutor_index);

                              break;
                          }
                          console.info('AAABBB  array ' + j);

                      }

                      if (assigned) {
                          console.info('######### Assigned');
                          console.info('######### counter_id ' + counter_id);
                          console.info('######### course index ' + i);
                          break
                      }
                  }

              // }

          // }


          counter_id = 0;
          console.error('Done second assignment. Result as below');
          console.warn(course_assignee);
      }
  }

  
  var tutorCount = [];
  console.warn('Jayden ' + course_assignee.filter(x => x === 'Jayden').length );
  tutorCount.push(course_assignee.filter(x => x === 'Jayden').length );

  console.warn('Kat ' + course_assignee.filter(x => x === 'Kat').length );
  tutorCount.push(course_assignee.filter(x => x === 'Kat').length );

  console.warn('Fred ' + course_assignee.filter(x => x === 'Fred').length );
  tutorCount.push(course_assignee.filter(x => x === 'Fred').length );

  console.warn('Keith ' + course_assignee.filter(x => x === 'Keith').length );
  tutorCount.push(course_assignee.filter(x => x === 'Keith').length );

  console.warn('Simon ' + course_assignee.filter(x => x === 'Simon').length );
  tutorCount.push(course_assignee.filter(x => x === 'Simon').length );


    // update tutor assignment
    // column 6
    course_date = [];
    $('table.courseTable tr td:nth-child(6)').each(function(index) {
        // if(index!=0)
        //     $(this).html(course_assignee[index]);
    });

    $('table.courseTable tr td:nth-child(6) select').each(function(index) {
            
        $(this).append('<option value=""></option>  ');
        $(this).append('<option value="Jayden">Jayden</option>  ');
        $(this).append('<option value="Kat">Kat</option>  ');
        $(this).append('<option value="Fred">Fred</option>  ');
        $(this).append('<option value="Simon">Simon</option>  ');
        $(this).append('<option value="Keith">Keith</option>  ');

        $(this).val(course_assignee[index]).change();

    })
    ;

   
  


    // lesson count
    $('table.tutorCount tr td:nth-child(2)').each(function(index) {
      $(this).html(tutorCount[index]);
  })

  alert('Roster assigned. Please check.');

  updateCalendar();
}

function updateCalendar() {
    course_date = [];
    $('table.courseTable tr td:nth-child(1) input').each(function(index) {
        course_date.push($(this).val());
    });

    course_code = [];
    $('table.courseTable tr td:nth-child(2)').each(function(index) {
        course_code.push($(this).html());
    })

    course_level = [];
    $('table.courseTable tr td:nth-child(5)').each(function(index) {
        courseLevel = $(this).html();
        courseLevel = courseLevel.substr(courseLevel.length - 1);
        course_level.push(courseLevel);
    })

    course_tutor = [];
    $('table.courseTable tr td:nth-child(6) select :selected').each(function(index) {
        course_tutor.push($(this).text());
    })

    course_date.forEach(function (value, index) {
        var dayItem = $('div.calendar-month ol li.calendar-day.day_' + course_date[index]);
        // clear the content first
        dayItem.html('');
        // append the elements
        dayItem.append('<span>' + value + '</span>');
        dayItem.append('<p class="level' + course_level[index] + '">' + course_code[index] + '</p> ');
        dayItem.append('<p class="tutor">' + course_tutor[index] + '</p> ');
    })

    }
