const lunr = require("lunr");
const fs = require("fs");

var resultJson = fs.readFileSync("search-data.json");


    docs = JSON.parse(resultJson);

    lunr.tokenizer.separator = /[\s/]+/

     index = lunr(function(){
      this.ref('id');
      this.field('title', { boost: 200 });
      this.field('content', { boost: 2 });
      this.field('relUrl');
      this.metadataWhitelist = ['position']

      for (var i in docs) {
        this.add({
          id: i,
          title: docs[i].title,
          content: docs[i].content,
          relUrl: docs[i].relUrl
        });
      }
    });

 fs.writeFileSync("search-index.json", JSON.stringify(index));

 