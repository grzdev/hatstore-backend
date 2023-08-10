const router = require("express").Router();
const articleController = require("../controllers/articlesController");

router.get("/", articleController.getAllArticles)
router.get("/:id", articleController.getArticle)
router.post("/", articleController.createArticle)
// router.get("/search/:key", articleController.searchProduct)
router.delete("/delete/:id", articleController.deleteArticle)
router.put("/edit/:id", articleController.editArticle)

module.exports = router