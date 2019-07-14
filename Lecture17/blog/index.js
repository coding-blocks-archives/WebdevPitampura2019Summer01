const express = require('express')

const app = express()

app.set('view engine', 'hbs')

const blogs = [{
    id: 1,
    title: 'My awesome post about web',
    body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
}, {
    id: 2,
    title: 'My second post on cats.',
    body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
}]

app.get('/', (req, res) => {
    const blogId = req.query.blog
    const selectedBlog = blogs.find(b => b.id == blogId)
    res.render('index', { blogs, selectedBlog })
})


app.listen(8080, function () {
    console.log("app running on 8080")
})