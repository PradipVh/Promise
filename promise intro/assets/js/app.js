let cl = console.log;

const blogContainer = document.getElementById("blogContainer")

let blogs = [
    {
        title: "Angular 15- Standalone Components",
        content: "Angular 15 introduced new concept called Standalone Components"
    },
    {
        title: "Async Await",
        content: "Es 7 introduced Async Await, it Syntettcal sugar coating over Promises"
    }
]
function createBlogs(blog) {
    setTimeout(() => {
        //    cl(blogs)
        blogs.push(blog)
        fetchBlogs()
    }, 4000);
    // cl(blog)
}
function fetchBlogs() {
    setTimeout(() => {
        cl(blogs)
        templating(blogs)
    }, 2000);
}

function templating(arr) {
    let result = `<ul class="list-group">`
    arr.forEach(ele => {
        result += `
                <div class="card-header">
                ${ele.title}
                </div>
                <div class="card-footer">${ele.content}
                </div> 
                  `
    })
    result += `</ul>`
    blogContainer.innerHTML = result
}




createBlogs({ title: "Demo", content: "Demo" });
// fetchBlogs()