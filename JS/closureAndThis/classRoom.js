function classRoom(){
  var instructors = ["Elie", "Colt"];
  return {
    getInstructors: function(){
      return instructors;
    },
    addInstructor: function(instructor){
      instructor.push(instructor);
      return instructors;
    }
  }
}