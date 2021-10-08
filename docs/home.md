# Home Route Documentation

## Home Route Get Request

### Request

#### Endpoint

    /

#### Headers

```json
    {
        "Authorization": {{ TOKEN }}
    }
```

### Response

#### Success

    // code = 200

    {
       ok: true,
       message: "OK"
    }

#### Fail

    // code = 403

    {
       ok: false,
       message: "Token is not defined || Token doesn't match",
    }
