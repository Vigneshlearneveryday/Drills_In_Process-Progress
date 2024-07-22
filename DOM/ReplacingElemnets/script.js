//Function to replace an article

function replaceArticle(articleId, newContent) {
  //Find the existing article element by it's ID
  const existingArticle = document.getElementById(articleId);
  //Create a new article for the updated article

  const newArticleEl = document.createElement("div");
  //add css in to it
  newArticleEl.className = "article";
  //keep ID same for the new article
  newArticleEl.id = articleId;
  //Create The text node to the new content
  const newTextNode = document.createTextNode(newContent);
  //Append the text node to the new article div
  newArticleEl.appendChild(newTextNode);
  //Replacing the existing article with the new one
  existingArticle.parentNode.replaceChild(newArticleEl, existingArticle);
}
replaceArticle("article1", "Replaced content 1");
replaceArticle("article2", "Replaced content 2");
replaceArticle("article3", "Replaced content 3");
