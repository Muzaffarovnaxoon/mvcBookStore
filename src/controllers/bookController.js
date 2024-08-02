const { readFile, writeFile } = require("../utils/fs")

const createBook = (req, res) => {
    let { title, price, count, desc, img, authorId, categoryId } = req.body
    let books = readFile("books")
    books.push({
        id: books.at(-1)?.id + 1 || 1,
        title,
        price,
        count,
        desc,
        img, 
        authorId, 
        categoryId
    })

    writeFile("books", books)
    res.redirect("/admin")
}

module.exports = {
    createBook
}