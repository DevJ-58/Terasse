# Guide d'Intégration des Images - TERRASSE

## Zones d'images à remplir

Le site Terrasse contient 15 zones destinées à recevoir vos images. Voici le guide complet.

---

## 1. PAGE D'ACCUEIL (index.html)

### Zone 1 : Image Hero Section (Droite)
**Localisation** : `<div class="hero-image">`  
**Dimensions recommandées** : 1200x1200px  
**Type** : Paysage naturel, durabilité, environnement  
**Instruction** :
```html
<!-- Remplacer -->
<div class="hero-image">
    <div class="placeholder-image"></div>
</div>

<!-- Par -->
<div class="hero-image">
    <img src="images/hero-nature.jpg" alt="Paysage environnemental durable" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

**Ou via CSS** :
```css
.hero-image {
    background-image: url('images/hero-nature.jpg');
    background-size: cover;
    background-position: center;
}
```

---

## 2. PAGE ARTICLES (articles.html)

### Zone 2 & 3 : Images des articles complets
**Localisation** : `<div class="article-image-large"></div>` (2 occurrences)  
**Dimensions recommandées** : 1200x400px  

**Article 1 - Énergies Renouvelables** :
- Thématique : Panneaux solaires, éoliennes, énergie verte
- Suggestion : Champs solaires ou éoliennes offshore

```html
<div class="article-header">
    <img src="images/article-energy.jpg" alt="Énergies renouvelables" style="width: 100%; height: 400px; object-fit: cover;">
</div>
```

**Article 2 - Déforestation** :
- Thématique : Forêts, déforestation, biodiversité
- Suggestion : Forêt amazonienne ou comparaison avant/après

```html
<div class="article-header">
    <img src="images/article-forest.jpg" alt="Écosystème forestier" style="width: 100%; height: 400px; object-fit: cover;">
</div>
```

### Zones 4, 5, 6 : Images des cartes articles
**Localisation** : `<div class="article-image"></div>` (3 occurrences)  
**Dimensions recommandées** : 600x250px  

**Carte 1 - COP28** :
```html
<article class="article-card">
    <img src="images/cop28.jpg" alt="COP28 Accord climatique" style="width: 100%; height: 250px; object-fit: cover;">
```

**Carte 2 - 10 Gestes** :
```html
<article class="article-card">
    <img src="images/gestes-climat.jpg" alt="Actions climatiques quotidiennes" style="width: 100%; height: 250px; object-fit: cover;">
```

**Carte 3 - Cycles du Carbone** :
```html
<article class="article-card">
    <img src="images/cycles-carbone.jpg" alt="Cycle du carbone" style="width: 100%; height: 250px; object-fit: cover;">
```

---

## 3. PAGE À PROPOS (about.html)

### Zone 7 : Image de la section mission
**Localisation** : `<div class="about-image"><div class="placeholder-image"></div></div>`  
**Dimensions recommandées** : 500x500px  
**Thématique** : Nature, durabilité, environnement positif  
**Suggestion** : Mains plantant un arbre, terre verte

```html
<div class="about-image">
    <img src="images/about-mission.jpg" alt="Engagement pour l'environnement" style="width: 100%; height: 500px; object-fit: cover; border-radius: 0;">
</div>
```

### Zones 8, 9, 10 : Images des contributeurs
**Localisation** : `<div class="member-image"></div>` (3 occurrences)  
**Dimensions recommandées** : 200x200px (carré)  
**Type** : Photos de profil ou icônes représant les domaines  

```html
<!-- Expertise Climatique -->
<div class="member-image" style="background-image: url('images/team-climate.jpg'); background-size: cover; background-position: center;"></div>

<!-- Éducation -->
<div class="member-image" style="background-image: url('images/team-education.jpg'); background-size: cover; background-position: center;"></div>

<!-- Engagement Communautaire -->
<div class="member-image" style="background-image: url('images/team-community.jpg'); background-size: cover; background-position: center;"></div>
```

---

## 4. STRUCTURE DE DOSSIER RECOMMANDÉE

```
TERRASSE/
├── images/
│   ├── hero-nature.jpg              (1200x1200px)
│   ├── article-energy.jpg           (1200x400px)
│   ├── article-forest.jpg           (1200x400px)
│   ├── cop28.jpg                    (600x250px)
│   ├── gestes-climat.jpg            (600x250px)
│   ├── cycles-carbone.jpg           (600x250px)
│   ├── about-mission.jpg            (500x500px)
│   ├── team-climate.jpg             (200x200px)
│   ├── team-education.jpg           (200x200px)
│   └── team-community.jpg           (200x200px)
├── index.html
├── articles.html
├── about.html
├── services.html
├── contact.html
├── styles.css
├── script.js
└── README.md
```

---

## OPTIMISATION DES IMAGES

### Réduction de taille sans perte de qualité

**Avec ImageMagick (ligne de commande)** :
```bash
convert hero-nature.jpg -quality 85 -resize 1200x1200 hero-nature-optimized.jpg
```

**Avec un outil online** :
- TinyPNG/TinyJPG (recommandé)
- ImageOptim
- FileOptimizer

### Format recommandé
- **JPEG** : Pour photos et images naturelles (80-85% qualité)
- **PNG** : Pour infographies et illustrations (niveau 8 max)
- **WebP** : Pour performance optimale (80% qualité)

### Tailles optimisées approximatives
- Hero : 150-200 KB
- Articles complets : 80-120 KB
- Cartes articles : 40-60 KB
- Contributeurs : 15-20 KB chacun

---

## LISTE D'IMAGES À TROUVER/CRÉER

| Zone | Page | Dimensions | Description | Source suggérée |
|------|------|-----------|-------------|-----------------|
| 1 | Accueil | 1200x1200 | Paysage nature durable | Unsplash, Pexels |
| 2 | Articles | 1200x400 | Panneaux solaires/éoliennes | Pixabay, Unsplash |
| 3 | Articles | 1200x400 | Forêt/déforestation | National Geographic, Unsplash |
| 4 | Articles | 600x250 | COP28/accord climat | Reuters, AP Photos |
| 5 | Articles | 600x250 | Gestes écologiques | Illustrations, Unsplash |
| 6 | Articles | 600x250 | Cycle du carbone | Infographie/diagramme |
| 7 | À Propos | 500x500 | Environnement positif | Unsplash, Pexels |
| 8 | À Propos | 200x200 | Climatologie/science | Unsplash |
| 9 | À Propos | 200x200 | Éducation | Unsplash |
| 10 | À Propos | 200x200 | Communauté | Unsplash |

### Banques d'images recommandées (libres de droit)
- **Unsplash** : unsplash.com (gratuit, haute qualité)
- **Pexels** : pexels.com (gratuit)
- **Pixabay** : pixabay.com (gratuit)
- **Shutterstock** : shutterstock.com (payant, très qualité)
- **Getty Images** : gettyimages.com (payant)

---

## MÉTHODE D'INTÉGRATION RAPIDE

### Étape 1 : Créer le dossier images
```bash
mkdir images
```

### Étape 2 : Ajouter les images
Placer les images JPG/PNG dans le dossier `images/`

### Étape 3 : Remplacer les placeholders

**Pour chaque `.placeholder-image`** :
```html
<!-- Avant -->
<div class="placeholder-image"></div>

<!-- Après -->
<img src="images/votre-image.jpg" alt="Description courte" 
     style="width: 100%; height: 100%; object-fit: cover;">
```

**Pour les `.article-image-large`** :
```html
<!-- Avant -->
<div class="article-image-large"></div>

<!-- Après -->
<img src="images/article-theme.jpg" alt="Description de l'image"
     style="width: 100%; height: 400px; object-fit: cover;">
```

### Étape 4 : Tester et valider
- Vérifier l'affichage sur tous les appareils
- Tester la charge des pages
- Vérifier les alt texts pour l'accessibilité

---

## BONNES PRATIQUES

✅ **À faire** :
- Utiliser des images de haute qualité (au moins 1920px pour les plus grandes)
- Optimiser les fichiers (max 200 KB par image)
- Fournir des descriptions alt complètes
- Maintenir un ratio cohérent par type
- Vérifier la cohérence de style/ambiance

❌ **À éviter** :
- Images pixelisées ou de mauvaise qualité
- Fichiers trop volumineux (ralentissement)
- Manque de alt text (accessibilité)
- Images trop saturées (distrait du texte)
- Utilisation d'images protégeées par droits d'auteur

---

## ACCESSIBILITÉ DES IMAGES

Chaque image **doit** avoir un `alt` descriptif :

```html
<!-- Mauvais -->
<img src="image.jpg">

<!-- Bon -->
<img src="image.jpg" alt="Panneau solaire dans un champ de tournesol">
```

### Directives pour les alt texts :
- Décrivez ce que l'image montre
- Soyez concis (< 125 caractères)
- N'écrivez pas "Image de..." ou "Photo de..."
- Pour les infographies, décrivez les données clés

---

## SUPPORT ET AIDE

Pour des questions sur :
- **Réduction de taille** : Utiliser TinyPNG
- **Format optimal** : JPEG pour photos, PNG pour infographies
- **Dimensions** : Suivre les recommandations par zone
- **Accessibilité** : Toujours ajouter un alt text descriptif

---

**Bon travail ! Vos images vont transformer Terrasse en plateforme visuelle impactante.**

*N'oubliez pas : les images de qualité + contenu pertinent = impact maximal pour votre présentation*
