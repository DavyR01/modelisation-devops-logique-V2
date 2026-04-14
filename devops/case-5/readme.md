## Case 5 — Debug Microservices avec Kong Gateway

### 🧠 Contexte

Une architecture microservices est déployée avec Kong comme API Gateway et trois services backend (user, product, order).

Problème initial :
- Kong retourne des 502 Bad Gateway
- Les services semblent ne pas communiquer entre eux
- Aucune route n’est fonctionnelle

---

## 🛠️ Démarche de résolution

1. Démarrage de la stack
```bash
docker compose up -d
```

1. Analyse des logs
docker compose logs -f kong kong-migration kong-database

Constats :
- démarrage non fiable de PostgreSQL
- migrations exécutées trop tôt
- Kong sans configuration

3. Fiabilisation PostgreSQL
- ajout d’un healthcheck avec pg_isready

4. Correction migrations
- ajout sleep + restart on-failure

5. Stabilisation Kong
- healthcheck + restart

6. Vérification backends
curl http://localhost:3001/health
curl http://localhost:3002/health
curl http://localhost:3003/health

7. Ajout healthchecks backend

8. Problème principal identifié
- aucune config Kong → 502

9. Configuration Kong via API

10. Script init
- kong/init-kong.sh

11. Init container

12. Idempotence
- POST → PUT

13. Correction routing
- strip_path=false

14. Correction réseau
- ajout kong-net

15. Externalisation config
- .env + .env.example

---

## ⚠️ Blocages rencontrés

- Kong non prêt → healthcheck
- Script non idempotent → PUT
- Erreur shell → correction syntaxe
- Mauvais routing → strip_path=false
- Réseau incorrect → kong-net

---

## 🔐 Sécurisation

- variables dans .env
- .env.example fourni
- suppression des valeurs en dur

---

## ✅ Validation finale

docker compose ps

Tests backend :
```bash
curl http://localhost:3001/health
curl http://localhost:3002/health
curl http://localhost:3003/health
```

Tests via Kong :
```bash
curl http://localhost:8000/api/users
curl http://localhost:8000/api/products
curl http://localhost:8000/api/orders
```

---

## 🔧 Troubleshooting

Logs :
```bash
docker compose logs -f kong
docker compose logs -f kong-init
docker compose logs -f kong-database
```

Etat :
```bash
docker compose ps
docker stats
```

Connectivité :
```bash
docker compose exec kong ping user-service
```

Accès conteneur :
```bash
docker compose exec kong sh
```

Reset :
```bash
docker compose down -v
docker compose up -d
```

---

## 🎯 Résultat

- Kong opérationnel
- Communication inter-services OK
- Routes automatisées
- Plus de 502
- Configuration reproductible
- Bonnes pratiques appliquées
