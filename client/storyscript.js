// const updateStory = async () => {
//     const response = await fetch('https://newsbusters.org/api/fsarecent?_format=json');
//     const articles = await response.json();
//     console.log(articles);
// }

// updateStory();

imageLink = imageLink.includes("/s3/files")
  ? `https://newsbusters.org${imageLink}`
  : imageLink;
