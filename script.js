const bookPippi = {
    title: "Pippi",
    numPage: "110",
    Author: "Astrid Lindgren"
}

const books = [
    {
    title: "Pippi",
    numPage: "110",
    Author: "Astrid Lindgren"
    },
    {
    title: "Emil i Lönneberga",
    numPage: "99",
    Author: "Astrid Lindgren"
    },
    {
    title: "Karlsson på taket",
    numPage: "62",
    Author: "Herman"
    },
    {
    title: "Vet du hur mycket jag älskar dej?",
    numPage: "24",
    Author: "Em Bruce"
    }
]

input(look);

function findBook(searchbook) {
    for (let book of books) {
    if (book.title === searchbook) {
        console.log(searchbook.title)
    }}

}

findBook("Pippi")