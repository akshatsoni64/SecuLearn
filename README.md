# SecuLearn
Learning Portal dedicated to learning about Web Security concepts, with competitive environment with leaderboard.

### Steps for Deployment


- Step 1: Clone the repository
```
git clone https://github.com/akshatsoni64/SecuLearn
```

- Step 2: Deploy using Docker Compose:
```
docker compose up --build -d
```

Note: For testing the application, use the APIs to add users as the application is invite-only.

- API URL: ``` http://localhost:3000/user/ ```
- Post Request Body:
```
{
    "username": "username",
    "password": "password",
    "name": "Name"
}
```

Few targets to use the scanner:
```
- juice-shop.herokuapp.com
- 127.0.0.1
```