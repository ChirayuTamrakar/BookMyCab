# User Registration API Documentation

## Endpoint

`POST /users/register`

---

## Description

Registers a new user in the system. On successful registration, returns a JWT token and the created user object.

---

## Request Body Example

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "jane.smith@example.com",
  "password": "securepass"
}
```

### Field Requirements

- `fullname.firstname` (string, required): Minimum 3 characters.
- `fullname.lastname` (string, required): Minimum 3 characters.
- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

---

## Success Response Example

- **Status Code:** `201 Created`
- **Content-Type:** `application/json`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Smith"
      },
      "email": "jane.smith@example.com"
      // ...other user fields
    }
  }
  ```

---

## Validation Error Response Example

- **Status Code:** `400 Bad Request`
- **Content-Type:** `application/json`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Password must be at least 6 character long",
        "param": "password",
        "location": "body"
      }
      // ...more errors
    ]
  }
  ```

---

## Notes

- All fields are required.
- On success, use the returned token for authenticated requests.