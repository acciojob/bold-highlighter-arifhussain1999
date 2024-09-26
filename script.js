function highlight() {
    //Write your code here
const strongs = document.querySelectorAll('strong')
strongs.forEach(ele=>{
	ele.classList.add('highlighted');
});
}


function return_normal() {
    //Write your code here
 const strongTags = document.querySelectorAll('strong');
  strongTags.forEach(tag => tag.classList.remove('highlighted'));
}
