const imgFile = document.querySelector('#pic-file');
const img = document.querySelector('#img');
const form = document.querySelector('#uploadForm');
const email = document.querySelector('#email');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    const formData = new FormData(form);
    formData.append('Email', email.innerHTML);

    fetch('/uploadImg', {
        method: 'post',
        body: formData
    }).then(res => res.json()).then(data => {
        console.log(data)
        img.src = data.src;
    })

});

imgFile.addEventListener('change', () => {
    console.log(imgFile.files)
    img.src = URL.createObjectURL(imgFile.files[0]);
})