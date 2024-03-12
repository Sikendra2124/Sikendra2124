//let submit_btn = document.querySelector(".submit-btn");
let parent = document.querySelector(".inside");
document.body.onload= async (e) => {
    async function myfunction() {
        e.preventDefault();
        var url = 'http://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=b68a6e0f69684533bfc835b6242f6b19';
        var req = new Request(url);
        var response = await fetch(req);
        try {
            let data = await response.json();
            console.log("newsList", data);
            // console.log(data['articles'].length);
            for (var i = 0; i < data['articles'].length; i++) {

                let dynamicbox = document.createElement("div");
                parent.append(dynamicbox);
                let newsList_image = document.createElement("img");
                dynamicbox.append(newsList_image);
                let newsList_description = document.createElement("p");
                newsList_image.after(newsList_description);
                let newsList_content = document.createElement("p");
                newsList_description.after(newsList_content);
                let newsList_urls = document.createElement("a");
                newsList_content.after(newsList_urls);
                let newsList_published = document.createElement("h4");
                newsList_urls.after(newsList_published);
                let newsList_author = document.createElement("h4");
                newsList_published.after(newsList_author);
                
                console.log("newsList image:", data['articles'][i]['urlToImage']);
                newsList_image.src=data['articles'][i]['urlToImage'];

                console.log("newsList description:", data['articles'][i]['description']);
                newsList_description.innerText=data['articles'][i]['description'];

                console.log("newsList content:", data['articles'][i]['content']);
                newsList_content.innerText=data['articles'][i]['content'];

                console.log("newsList url:", data['articles'][i]['url']);
                newsList_urls.href=data['articles'][i]['url'];


                console.log("newsList published:", data['articles'][i]['publishedAt']);
                newsList_published.innerText=data['articles'][i]['publishedAt'];
                
                console.log("newsList author:", data['articles'][i]['author']);
                newsList_author.innerText=data['articles'][i]['publishedAt'];
            }

        } catch (error) {
            console.error(error);
        }

    }
    myfunction();
}
