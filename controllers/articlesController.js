const Article = require("../models/Articles")

module.exports = {
    createArticle: async(req, res) => {
        const newArticle = new Article(req.body);
        try {
            await newArticle.save();
            res.status(200).json("article created succesfully")
        } catch (error) {
            res.status(500).json("failed to create the article")
        }
    },
    getAllArticles: async(req, res) => {
        try {
            const articles = await Article.find().sort({ createdAt: -1 })
            res.status(200).json(articles)
        } catch (error) {
            res.status(500).json("failed to get the articles")
        }
    },
    getArticle: async(req, res) => {
        try {
            const article = await Article.findById(req.params.id)
            res.status(200).json(article)
        } catch (error) {
            res.status(500).json("failed to get the article")
        }
    },
    // searchArticle: async(req, res) => {
    //     try {
    //         const result = await Article.aggregate(
    //             [
    //                 {
    //                   $search: {
    //                     index: "accessories",
    //                     text: {
    //                       query: req.params.key,
    //                       path: {
    //                         wildcard: "*"
    //                       }
    //                     }
    //                   }
    //                 }
    //               ]
    //         )
    //         res.status(200).json(result)
    //     } catch (error) {
    //         res.status(500).json("failed to get the article")
    //     }
    // },
    deleteArticle: async (req, res) => {
        try {
          const deletedArticle = await Article.findByIdAndRemove(req.params.id);
          if (deletedArticle) {
            res.status(200).json("article deleted successfully");
          } else {
            res.status(404).json("article not found");
          }
        } catch (error) {
          res.status(500).json("Failed to delete the article");
        }
      },

     editArticle: async (req, res) => {
        try {
            const updatedArticle = await Article.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
    
            if (!updatedArticle) {
                return res.status(404).json("article not found");
            }
    
            res.status(200).json(updatedArticle);
        } catch (error) {
            res.status(500).json("failed to edit the article");
        }
    }
}