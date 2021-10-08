# User Route Documentation

## User Route Sign Up Post Request

### Request

#### Endpoint

    /users/sign_up

#### Body

```javascript

    {
        name: String && Required && 2-32,
        username: String && Required && 5-16,
        password: String && Required
    }

```

### Response

#### Success

    {
       ok: true,
       message: "User created successfully",
       data: {
           token: "{{JWT TOKEN}}"
       }
    }

#### Fail

    {
       ok: false,
       message: "Username || Name || Password is incorrect",
    }
