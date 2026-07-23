🏦 BanqueDemo - Application Bancaire de Démonstration
===================================================

Une application bancaire complète et sécurisée avec authentification simple, tableau de bord verrouillé et gestion de compte.

## 🚀 Fonctionnalités

✅ **Authentification Sécurisée**
- Système de login/password simple
- Protection de session
- Logout sécurisé

✅ **Tableau de Bord (Dashboard)**
- Affichage des informations du compte
- Consultation du solde disponible
- Historique des dernières transactions
- Actions rapides

✅ **Sécurité**
- Session verrouillée après déconnexion
- Timeout d'inactivité automatique (30 minutes)
- Protection contre la navigation arrière
- Validation des identifiants

## 📋 Informations du Compte de Démonstration

**Identifiants de connexion:**
- **Identifiant:** `tyla`
- **Mot de passe:** `demo123`

**Titulaire du Compte:**
- **Nom et Prénom:** Tyla Martin
- **Solde:** 253,070€
- **Dernière Transaction:** Décembre 2025

## 📁 Structure du Projet

```
demo-banking/
├── index.html       # Interface utilisateur
├── styles.css       # Styles et mise en forme
├── app.js          # Logique d'application
└── README.md       # Documentation
```

## 🎯 Utilisation

### 1. Accès à l'Application
- Ouvrez `index.html` dans votre navigateur
- Vous verrez la page de connexion

### 2. Connexion
- Entrez l'identifiant: `tyla`
- Entrez le mot de passe: `demo123`
- Cliquez sur "Connexion"

### 3. Navigation du Dashboard
- Consultez vos informations de compte
- Visualisez votre solde disponible
- Voir la dernière transaction
- Accédez aux actions rapides

### 4. Déconnexion
- Cliquez sur "Déconnexion"
- Confirmez votre choix
- Vous serez redirigé vers la page de connexion

## 🔐 Fonctionnalités de Sécurité

| Fonctionnalité | Description |
|---|---|
| **Session Storage** | Les données de session sont stockées temporairement |
| **Timeout d'Inactivité** | Déconnexion automatique après 30 minutes d'inactivité |
| **Protection Back Button** | Impossibilité de revenir à la page de login via le bouton retour |
| **Validation** | Tous les champs sont validés côté client |
| **HTTPS Ready** | Prêt pour déploiement en HTTPS |

## 🎨 Interface

- **Thème:** Mode clair avec gradients modernes (bleu/violet)
- **Responsive:** Adaptée pour desktop, tablette et mobile
- **Animations:** Transitions fluides et agréables
- **Notifications:** Système de notifications pour feedback utilisateur

## 📱 Responsive Design

L'application est entièrement responsive et fonctionne sur:
- ✅ Desktop (1920px+)
- ✅ Tablettes (768px - 1024px)
- ✅ Smartphones (< 768px)

## 🔧 Technologies Utilisées

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Stockage:** Session Storage (navigateur)
- **Sécurité:** Session-based authentication

## 📊 Dashboard Sections

### Informations du Compte
- Affiche le nom et prénom du titulaire
- Type de compte (Compte Courant)
- Numéro de compte formaté

### Solde Disponible
- Affichage prominent du solde: **253,070€**
- Date du solde mise à jour automatiquement
- Mise en évidence visuelle avec couleur verte

### Dernière Transaction
- Date: Décembre 2025
- Montant: 15,500€
- Type: Virement reçu
- Affichage du statut positif

### Actions Rapides
- Faire un virement
- Voir l'historique
- Paramètres du compte
- (Fonctionnalités à développer)

## 🚀 Déploiement

### Option 1: Déploiement Local
```bash
# Simplement ouvrir index.html dans un navigateur
```

### Option 2: Serveur Web
```bash
# Avec Python
python -m http.server 8000

# Avec Node.js
npx http-server
```

### Option 3: GitHub Pages
1. Pousser le code vers GitHub
2. Aller à Settings → Pages
3. Sélectionner la branche main
4. L'application sera accessible via `https://username.github.io/demo-banking`

## 🐛 Dépannage

### Je ne peux pas me connecter
- Vérifiez que vous utilisez les identifiants corrects: `tyla` / `demo123`
- Vérifiez la casse (minuscules)
- Effacez le cache du navigateur

### Session expirée
- Vous avez été inactif(ve) pendant plus de 30 minutes
- Reconnectez-vous avec vos identifiants

### Problèmes d'affichage
- Essayez un navigateur différent
- Effacez le cache du navigateur
- Vérifiez que JavaScript est activé

## 📝 Notes

- Cette application est une **démonstration**
- Les données sont stockées localement dans la session
- Pas de base de données backend
- Idéale pour prototypage et tests UI/UX

## 🔮 Améliorations Futures

- [ ] Intégration avec une API backend
- [ ] Base de données (MongoDB, PostgreSQL)
- [ ] Authentification multi-facteurs (2FA)
- [ ] Historique des transactions complet
- [ ] Graphiques et statistiques
- [ ] Transferts et virements
- [ ] Gestion des cartes bancaires
- [ ] Notifications push

## 📞 Support

Pour toute question ou problème, veuillez vérifier:
1. Les informations de connexion
2. Les paramètres du navigateur
3. La console du navigateur (F12) pour les erreurs

---

**Version:** 1.0.0  
**Date:** 2025  
**Statut:** Démonstration Active 🟢