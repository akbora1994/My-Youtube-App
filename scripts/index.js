
    const API = "AIzaSyBKrX2ZRXabcSJuzkVxm2M4LhrCy6HuHeM"
    const searchVideos = async () => {
    try {
        const q =  document.getElementById("query").value;
    
      const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=${API}`);
  
     
  
 const data = await res.json();
      console.log(data.items);
      append(data.items);
    }
     catch (err) {
      console.log(err);
    }
  }


fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&key=${API}`).then((res)=>{
    return res.json();
}).then((res)=>{
console.log(res.items)
append1(res.items)
}).catch((err)=>{
    console.log(err)
})


  
  
  // appending popular vidoes to
  const append1 = (trendvideos) => {
      let show_video = document.getElementById("show_videos");
      show_video.innerHTML = null;
    
      trendvideos.forEach(({id,snippet:{title,thumbnails:{medium}}})=>{
        let div = document.createElement("div");
        // let iframe = document.createElement("iframe");
        // iframe.src = `https://www.youtube.com/embed/${id}`
        // iframe.style.width="230px"
        // iframe.style.height="200px"
        // iframe.allow="fullscreen"
        let image = document.createElement("img");
        image.src = medium.url;
        image.style.width="240px";
        let name = document.createElement("h5")
        name.innerText=title;
        div.append(image,name);
     
        let data = {
            id,
            title,
        }
        div.onclick = ()=>{
            trendVideo(data)
        }
        show_video.append(div);
    })
}

const trendVideo = (y)=>{
    console.log("inside function")
    window.location.href = "trending.html";
    localStorage.setItem("trend",JSON.stringify(y))
}

const append = (videos)=>{
    let show_video = document.getElementById("show_videos");
      show_video.innerHTML = null;
    
      videos.forEach(({id:{videoId},snippet:{thumbnails:{medium},title}})=>{
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = medium.url;
        image.style.width="240px";
        let name = document.createElement("h5")
        name.innerText=title;
        div.append(image,name);
        let data = {
            videoId,
            title,
        }
        div.onclick = ()=>{
            showVideo(data)
        }
        show_video.append(div);
    })
}
const showVideo = (x)=>{
    console.log("inside function")
    window.location.href = "video.html";
    localStorage.setItem("video",JSON.stringify(x))
}
