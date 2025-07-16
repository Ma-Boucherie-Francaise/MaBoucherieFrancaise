# Ma Boucherie Française

![Logo de Ma Boucherie Française](/public/images/logo/mbf-white.png)

Bienvenue sur **Ma Boucherie Française** – votre boucherie en ligne dédiée à la viande artisanale et fraîche, à la française.

---

## 1. Présentation du projet

**Ma Boucherie Française** est une boutique en ligne qui vous permet de :
1. Découvrir un large catalogue de viandes et de découpes.  
2. Passer commande en ligne via une plateforme sécurisée.  
3. Choisir entre la livraison à domicile ou le retrait en magasin (click & collect).

---

## 2. Fonctionnalités clés

- **Catalogue de produits**  
  Parcourez une grande variété de viandes et de découpes, classées par catégorie et origine.

- **Interface responsive**  
  Profitez d’une expérience utilisateur optimisée sur mobile, tablette et ordinateur de bureau.

---

## 3. Technologies utilisées

- **Front-end** : HTML, CSS, JavaScript (avec [React](https://reactjs.org/))  
- **Hébergement** : Netlify

---

## 4. Installation et déploiement

### Prérequis

- [Node.js](https://nodejs.org/)  
- Un gestionnaire de paquets (npm ou yarn)  
- Git

### Instructions d’installation

```bash
# 1. Cloner le dépôt
git clone https://github.com/Ma-Boucherie-Francaise/MaBoucherieFrancaise.git

# 2. Se positionner dans le dossier du projet
cd MaBoucherieFrancaise

# 3. Installer les dépendances
npm install
# ou
yarn install

# 4. Lancer l’application en mode développement
npm start
# ou
yarn start
```

---

## 5. Modifier un fichier ou ajouter une image directement sur GitHub

### 📝 Modifier un fichier

1. **Accédez à votre dépôt**  
   Ouvrez votre navigateur et rendez‑vous sur :  
   `https://github.com/Ma-Boucherie-Francaise/MaBoucherieFrancaise`

2. **Naviguez jusqu’au fichier**  
   Par exemple :  
   `src/app/_data/content.json`

3. **Cliquez sur l’icône ✏️ (Modifier ce fichier)**  
   En haut à droite de la vue du fichier, cliquez sur l’icône en forme de crayon.

4. **Effectuez vos modifications**  
   - Modifiez le contenu ligne par ligne.  
   - Ajoutez ou supprimez des lignes selon vos besoins.

5. **Rédigez un message de commit**  
   - **Titre** : résumé succinct (ex. “Ajout d’un nouveau produit”)  
   - **Description** : détails facultatifs

6. **Validez vos modifications**  
   Cliquez sur **“Commit changes”**.

---

### 🖼️ Ajouter une image (par ex. photo d’une découpe de viande)

1. **Accédez au dossier d’images**  
   Dans votre dépôt, allez dans :  
   `public/images/content/cutting`

2. **Choisissez le sous-dossier approprié**  
   Chaque découpe a son propre dossier, par exemple :  
   - `public/images/content/cutting/volaille`  
   - `public/images/content/cutting/boeuf`  
   - `public/images/content/cutting/porc`

3. **Ajoutez votre image**  
   - Cliquez sur **“Add file”** (en haut à droite)  
   - Sélectionnez **“Upload files”**

4. **Téléchargez l’image**  
   - Glissez‑déposez ou sélectionnez votre fichier  
   - Formats recommandés : `.jpg`, `.png`, `.webp`  
   - Nom de fichier sans accents ni espaces (ex. `entrecote-01.jpg`)

5. **Rédigez un message de commit**  
   - **Titre** : `Ajout image entrecote`  
   - **Description** : `Ajout de entrecote-01.jpg dans cutting/entrecote`

6. **Validez vos modifications**  
   - Branche : **`main`**  
   - Cliquez sur **“Commit changes”**
  
7. **Lier l'image aux produits**
   - Dans le fichier `_data/content.json`, ajouter le chemin de l'image `images/content/cutting/NOM_CATEGORIE/NOM_IMAGE.EXTENSION`

7. ✅ **Déploiement automatique**  
   Votre site se mettra à jour automatiquement.  

---

*Si vous pensez vous être trompé, contactez votre développeur.*

