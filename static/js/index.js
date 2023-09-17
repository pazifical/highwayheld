
const colorsByCategory = {
    "gadgets": "var(--color1)",
    "zubehoer": "var(--color2)",
    "wartung": "var(--color3)",
    "pflege": "var(--color3)",
}

function createArticleDiv(article) {
    const element = document.createElement("div");
    element.classList.add("preview-item");
    element.style.cursor = "pointer";
    element.style.border = `2px solid ${colorsByCategory[article.category]}`;
    element.style.borderRadius = "0.5rem";
    element.style.padding = "1rem";
    element.style.transition = "0.5s";


    const inner = document.createElement("div");


    const img = document.createElement("img");
    img.style.width = "100%";
    img.src = "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80";
    img.style.objectFit = "fill";
    inner.appendChild(img);

    const text = document.createElement("div");
    // text.style.textAlign = "justify";
    text.innerHTML = `
    <h3 style="text-decoration: underline ${colorsByCategory[article.category]};">
        ${article.title}
    </h3>
    <p>
        ${article.text.substring(0, 100)}...
    </p>`;
    inner.appendChild(text);

    element.appendChild(inner);

    return element;
}


const articles = [
    {
        "title": "Lorem ipsum dolor sit amet",
        "category": "gadgets",
        "text": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {
        "title": "Eirmod tempor invidunt",
        "category": "zubehoer",
        "text": "Onsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {
        "title": "Onsetetur sadipscing",
        "category": "wartung",
        "text": "Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {
        "title": "Magna aliquyam erat, sed diam voluptua",
        "category": "pflege",
        "text": "Sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    }
]

const articlePreviews = document.getElementById("article-preview");
for (let i = 0; i < 4; i++) {
    articles.forEach(article => articlePreviews.appendChild(createArticleDiv(article)));

}