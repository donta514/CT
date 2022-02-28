// const updateStory = async () => {
//     const response = await fetch('https://newsbusters.org/api/fsarecent?_format=json');
//     const articles = await response.json();
//     console.log(articles);
// }

// updateStory();
let imageLink = imageLink.includes("/s3/files")
  ? `https://newsbusters.org${imageLink}`
  : imageLink;

fetch("https://newsbusters.org/api/fsarecent")
  .then((data) => {
    //   console.log(data);
    return data.json();
  })
  .then((completedata) => {
    // console.log(completedata);

    let stories = "";
    completedata.map((values) => {
      stories += `<tr class="article" pardot-repeatable="">
        <td class="two-column">
            <div class="column">
                <table>
                    <tbody>
                        <tr>
                            <td class="inner">
                                <table class="contents">
                                    <tbody>
                                        <tr>
                                            <td><a class="article-link" href=${values.link}
                                                    target="_blank"><img alt=""
                                                        src="${values.imageLink}"> </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="column">
                <table>
                    <tbody>
                        <tr>
                            <td class="inner">
                                <table class="contents">
                                    <tbody>
                                        <tr>
                                            <td class="text">
                                                <h3 class="title">
                                                    <a href=${values.link}
                                                        target="_blank">${values.title}</a>&nbsp;
                                                </h3>
                                                <p class="authorDate">
                                                    By <span>${values.author}</span> | ${values.created}</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </td>
    </tr>`;
    });
    document.getElementById("articles").innerHTML = stories;
  })
  .catch((err) => {
    console.log(err);
  });
