const express = require('express')
const app = express()
const PORT = 3000

const fs = require('fs')

app.engine('portal', (filePath, options, callback) => {
    fs. readFile(filePath, (err, content) => {
        if (err) return callback(err)

        const rendered = content
            .toString()
            .replace('#name#', options.name)
            .replace('#race#', options.race)
            .replace('#content#','<div>'+ options.content + '</div>' )
            .replace('#oppName#', options.oppName)
            .replace('#oppRace#', options.oppRace)
        return callback(null, rendered)
    })
})
app.set('views', './views')
app.set('view engine', 'portal')

app.get("/", (req, res) => {
    res.render("template", {
        name: "Goku",
        race: "Saiyan",
        content: "Goku is a Saiyan raised on Earth and the main protagonist of the Dragon Ball series."
    })
})

app.get("/2", (req, res) => {
    res.render("template", {
        name: "Vegeta",
        race: "Saiyan",
        content: "Vegeta is the prince of the fallen Saiyan race and one of the main characters in the Dragon Ball series."
    })
})

app.get("/fight1", (req, res) => {
    res.render("fightTemplate", {
        name: "Goku",
        race: "Saiyan",
        oppName: "Vegeta",
        oppRace: "Saiyan"
    })
})

app.get("/3", (req, res) => {
    res.render("template", {
        name: "Frieza",
        race: "Frost Demon",
        content: "Frieza is the main antagonist of the Dragon Ball series. He is the descendant of Chilled, the youngest son of King Cold, the younger brother of Cooler and the father of Kuriza."
    })
})

app.get("/4", (req, res) => {
    res.render("template", {
        name: "Piccolo",
        race: "Namekian",
        content: "Piccolo was the main antagonist in the final saga of Dragon Ball, later becoming a permanent member of the Dragon Team and eventually one of Earth's greatest heroes."
    })
})

app.get("/fight2", (req, res) => {
    res.render("fightTemplate", {
        name: "Piccolo",
        race: "Namekian",
        oppName: "Frieza",
        oppRace: "Frost Demon"
    })
})

app.get("/5", (req, res) => {
    res.render("template", {
        name: "Krillin",
        race: "Human",
        content: "Krillin is a supporting protagonist in the Dragon Ball series. Krillin had a brief rivalry with Goku when they first trained under Master Roshi, but they quickly became lifelong best friends."
    })
})

app.get("/6", (req, res) => {
    res.render("template", {
        name: "Yamcha",
        race: "Saiyan",
        content: "A former desert bandit, Yamcha was once an enemy of Goku, but quickly reformed and became a friend and ally. Yamcha is a very talented martial artist and one of the most powerful humans on Earth, possessing skills and traits that allow him to fight alongside his fellow Z Fighters when major threats loom."
    })
})

app.get("/fight3", (req, res) => {
    res.render("fightTemplate", {
        name: "Krillin",
        race: "Human",
        oppName: "Yamcha",
        oppRace: "Human"
    })
})

app.get("/fight4", (req, res) => {
    res.render("fightTemplate", {
        name: "Yamcha",
        race: "Human (LMAO HE GON DIE)",
        oppName: "Frieza",
        oppRace: "Frost Demon"
    })
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})

