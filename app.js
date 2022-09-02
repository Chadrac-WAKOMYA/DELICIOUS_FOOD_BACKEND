const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')

const app = express()
const port = process.env.PORT || 3500
app.use(express.json());

sequelize.initDb()

app.get('/', (req, res) => {
    res.json({ msg: 'Hello Heroku !'})
})
    
// Ici nos futurs point de terminaison
require('./src/routes/client/createClient')(app)
require('./src/routes/client/findAllClients')(app)
require('./src/routes/client/updateClient')(app)
require('./src/routes/client/findClientByPK')(app)
require('./src/routes/client/deleteClient')(app)

require('./src/routes/bareme/createBareme')(app)
require('./src/routes/bareme/findAllBaremes')(app)
require('./src/routes/bareme/findAllBaremeByPK')(app)
require('./src/routes/bareme/updateBareme')(app)
require('./src/routes/bareme/deleteBareme')(app)

require('./src/routes/commande/createCommande')(app)
require('./src/routes/commande/findAllCommandes')(app)
require('./src/routes/commande/findAllCommandeByPK')(app)
require('./src/routes/commande/updateCommande')(app)
require('./src/routes/commande/deleteCommande')(app)

require('./src/routes/agence/createAgence')(app)
require('./src/routes/agence/findAllAgences')(app)
require('./src/routes/agence/findAllAgencesByPK')(app)
require('./src/routes/agence/deleteAgence')(app)
require('./src/routes/agence/updateAgence')(app)

require('./src/routes/categorieProduit/createCategorieProduit')(app)
require('./src/routes/categorieProduit/findAllCategorieProduits')(app)
require('./src/routes/categorieProduit/findAllCategorieProduitByPK')(app)
require('./src/routes/categorieProduit/updateCategorieProduit')(app)
require('./src/routes/categorieProduit/deleteCategorieProduit')(app)

require('./src/routes/produit/createProduit')(app)
require('./src/routes/produit/findAllProduits')(app)
require('./src/routes/produit/findAllProduitByPK')(app)
require('./src/routes/produit/updateProduit')(app)
require('./src/routes/produit/deleteProduit')(app)

require('./src/routes/imageProduit/createImageProduit')(app)
require('./src/routes/imageProduit/findAllImageProduits')(app)
require('./src/routes/imageProduit/findAllImageProduitByPK')(app)
require('./src/routes/imageProduit/updateImageProduit')(app)
require('./src/routes/imageProduit/deleteImageProduit')(app)

require('./src/routes/detailCommande/createDetailCommande')(app)
require('./src/routes/detailCommande/findAllDetailCommandes')(app)
require('./src/routes/detailCommande/findAllDetailCommandeByPK')(app)
require('./src/routes/detailCommande/updateDetailCommande')(app)
require('./src/routes/detailCommande/deleteDetailCommande')(app)


require('./src/routes/notationProduit/createNotationProduit')(app)
require('./src/routes/notationProduit/findAllNotationProduits')(app)
require('./src/routes/notationProduit/findAllNotationProduitByPK')(app)
require('./src/routes/notationProduit/updateNotationProduit')(app)
require('./src/routes/notationProduit/deleteNotationProduit')(app)


require('./src/routes/statsVisualize/createStatsVisualize')(app)
require('./src/routes/statsVisualize/findAllStatsVisualizes')(app)
require('./src/routes/statsVisualize/findAllStatsVisualizeByPK')(app)
require('./src/routes/statsVisualize/updateStatsVisualize')(app)
require('./src/routes/statsVisualize/deleteStatsVisualize')(app)

require('./src/routes/livreur/createLivreur')(app)
require('./src/routes/livreur/findAllLivreurs')(app)
require('./src/routes/livreur/findAllLivreurByPK')(app)
require('./src/routes/livreur/updateLivreur')(app)
require('./src/routes/livreur/deleteLivreur')(app)


app.get('/delicious_food_api/home', (req, res) => {
    res.json({ msg: 'server runs well'})
})

app.listen(port,()=>console.log(`Notre application Node est demaree sur : http://localhost:${port}`))