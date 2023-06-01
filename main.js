const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null,
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
let ListPostLikes = [];
const containerPost =  document.getElementById("container");
posts.forEach((cardElement , index) => {
    let imagePart = `<img class="profile-pic" src="${posts[index].author.image}" alt="${posts[index].author.name}"></img>`;
    let from=posts[index].created;
    let temp = from.split("-");
    let date =temp[2] + "-" + temp[1] + "-" + temp[0];
    if(posts[index].author.image === null){
        let name = ExtratingFIrstCharAndLast(posts[index].author.name);
        imagePart = `<div class="flex bg-grey profile-pic">${name}</div>`
    }
        addPostOnDom(posts[index].author.name , date , posts[index].content , posts[index].media , posts[index].id , posts[index].likes , imagePart);
    
    
});

const buttonLikes = document.querySelectorAll("a.like-button");


buttonLikes.forEach((button , index) => {
    let IsAlreadyClicked = false;
    button.style.cursor = "pointer";
    button.addEventListener("click" , function(event){
        event.preventDefault();
        if(!IsAlreadyClicked){
            IsAlreadyClicked = true;
            button.classList.add("color-blue");
            const counter = document.getElementById(`like-counter-${posts[index].id}`);
            counter.innerHTML = posts[index].likes + 1;
            ListPostLikes.push(posts[index].id);
            console.log(ListPostLikes);
        }else{
            const counter = document.getElementById(`like-counter-${posts[index].id}`);
            counter.innerHTML = posts[index].likes;
            button.classList.remove("color-blue");
            console.log(ListPostLikes);
            IsAlreadyClicked = false;
        }
        
    });
});



 function ExtratingFIrstCharAndLast(string) {
    let names = string.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();
    
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
};

function addPostOnDom(name , date , content , media , id , likes , imagePart){
    containerPost.innerHTML += 
          `<div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            ${imagePart}                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${name}</div>
                            <div class="post-meta__time">${date}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${content}</div>
                <div class="post__image">
                    <img src="${media}" alt="Foto">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" href="#"  data-postid="1">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                         </div>
                    </div> 
                 </div>            
            </div>`
}
    