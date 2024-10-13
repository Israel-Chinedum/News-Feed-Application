const header = document.querySelector('#header');
const current = document.querySelector('#current');
const blogs = document.querySelectorAll('.blog');
const blogContainer = document.querySelector('#blog-nav ul');
const content = document.querySelector('#content');
let currNav = blogs[0];

const currentNav = (blog) =>{
    current.style.marginLeft = `${(blog.offsetLeft - blogContainer.offsetLeft) * 100 / blogContainer.offsetWidth}%`;
    current.style.width = `${blog.clientWidth}px`;
}

blogs.forEach(blog =>{
    blog.addEventListener('click', (e) =>{
        switch(e.target.innerHTML){
          case 'School updates':
            content.src = 'http://localhost:4000/school_updates';
            break;
          case 'Sports':
            content.src = 'http://localhost:4000/sports';
            break;
          case 'Health':
            content.src = 'http://localhost:4000/health';
            break;
          case 'Business':
            content.src = 'http://localhost:4000/business';
            break;
          case 'Entertainment':
            content.src = 'http://localhost:4000/entertainment';
            break;
          case 'Politics':
            content.src = 'http://localhost:4000/politics';
            break;
          case 'Fashion':
            content.src = 'http://localhost:4000/fashion';
            break;
          case 'Technology':
            content.src = 'http://localhost:4000/technology';
            break;
          case 'Short videos':
            content.src = 'http://localhost:4000/short_videos';
        }
        currentNav(blog)
        currNav = blog;
        for(let i = 0; i < blogs.length; i++){
          if(blogs[i] == blog){
            blogs[i].classList.add('active');
          } else{
            blogs[i].classList.remove('active');
            blogs[i].style.color = 'white';
          }
        }
    });
});


blogs.forEach(blog => {
  blog.addEventListener('mouseover', () => {
    blog.style.color = 'orangered'
  });
  blog.addEventListener('mouseout', () => {
    if(blog.classList.contains('active')){
      return
    } 
    blog.style.color = 'white';
  })
})


currentNav(currNav);
window.addEventListener('resize', () => currentNav(currNav));

