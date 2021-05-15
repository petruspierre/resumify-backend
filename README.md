<p align="center">
  <img src="https://i.ibb.co/jRWxfD2/Logo.png">
</p><br>

[![Current Version](https://img.shields.io/badge/version-0.1.0-yellow.svg)](https://github.com/petruspierre/resumify)

### resumify is an application to facilitate the creation of school summaries quickly in PDF format

---

# How to Setup
Make sure you have **NodeJS** installed in your machine

Clone this repo
```
$ git clone https://github.com/petruspierre/resumify
```

Install all dependences
```
$ npm install
```
> If you want to use yarn, run ```yarn``` in your terminal

Change the URL in ```finalPath``` in ```src/controllers/PDFController.ts``` to your IP Address

Run the project
```
$ yarn dev
```

# How to Use

```POST /pdf```

Send the type, title and content in JSON format

```
title: string
discipline: string:
body: [
  type: "topic" | "paragraph" | "subtitle"
  title: string
  content: string[]
]
```

> type can be "topic" or "paragraph"

## Authors
- [Petrus Pierre](https://github.com/petruspierre/)
