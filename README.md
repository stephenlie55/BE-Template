# mongoose-crud

# mongoose-crud

### All endpoint

| method | routes                        | detail                              | body | headers |
| ------ | ----------------------------- | ------------------------------------|--------|-------------|
| GET    | /books                    |   show all `book` list                  | - | - |
| GET    | /books/:id                | show one `book` list by id              | - | - |
| POST   | /books                    | create new `book` list                   | isbn, title, author, category,stock | - |
| DELETE   | /books/:id              | delete one of `book` list by id          | - | - |
| PUT    | /books/:id                | edit `book` list by id                   | isbn, title, author, category,stock | - |
| GET    | /books/search                | search by title `book`                   | - | - |
| GET    | /members                    |   show all `member` list                  | - | - |
| GET    | /members/:id                | show one `member` list by id              | - | - |
| POST   | /members                    | create new `member` list                   | name, address, zipcode, email,phone | - |
| DELETE   | /members/:id              | delete one of `members` list by id          | - | - |
| PUT    | /members/:id                | edit `member` list by id                   | name, address, zipcode, email,phone | - |
| GET    | /transactions                    |   show all `transactions` list                  | - | - |
| GET    | /transactions/:id                | show one `transaction` list by id              | - | - |
| POST   | /transactions                    | create new `transaction` list                   | member,in_date,out_date, due_date,fine,booklist(array) | - |
| DELETE   | /transactions/:id              | delete one of `transactions` list by id          | - | - |
| PATCH    | /transactions/:id                | update in_date `transactions` list                  | in_date | - |
| GET    | /transactions/search                | search by transaction of `bookid`                   | - | - |
------


## Example endpoint
### Books

> GET / books
#### expected output
HTTP Status Code: `200`
    [
        {
            "_id": "5cecb7a4f00ace0076d4af27",
            "isbn": "1234567890",
            "title": "What if I had never tried it?",
            "author": "Valentino Rossi",
            "category": "Sport, Autobiography",
            "stock": "10"
        }
    ]

> GET /books/5cecb7a4f00ace0076d4af27
#### expected output
HTTP Status Code: 200
array of object
    [
        {
            "_id": "5cecb7a4f00ace0076d4af27",
            "isbn": "1234567890",
            "title": "What if I had never tried it?",
            "author": "Valentino Rossi",
            "category": "Sport, Autobiography",
            "stock": "10"
        }
    ]
> POST /books
#### input
    {
        "isbn": "1234567890",
        "title": "What if I had never tried it?",
        "author": "Valentino Rossi",
        "category": "Sport, Autobiography",
        "stock": "10
    }
#### expected output
HTTP Status Code: 201
object
    {
        "_id": "5d246266fe3388544dccc02f",
        "isbn": "1234567890",
        "title": "What if I had never tried it?",
        "author": "Valentino Rossi",
        "category": "Sport, Autobiography",
        "stock": 10,
        "createdAt": "2019-07-09T09:46:14.028Z",
        "updatedAt": "2019-07-09T09:46:14.028Z",
        "__v": 0
    }
> DELETE /books/5cecb7a4f00ace0076d4af27
#### expected output
HTTP Status Code: 200    
object
    {
        "deletedCount": 1,
        "n": 1,
        "ok": 1
    }
> PUT /books/5cecb7a4f00ace0076d4af27
#### input
    {
        "isbn": "1234567890",
        "title": "What if I had never tried it?",
        "author": "Valentino Rossi",
        "category": "Sport, Autobiography",
        "stock": "10
    }
#### expected output
HTTP Status Code: 200
object
    {
        "n": 1,
        "nModified": 1,
        "ok": 1
    }
> GET /books/search?title=What
#### expected output
HTTP Status Code: 200
    [
        {
            "_id": "5d246266fe3388544dccc02f",
            "isbn": "12373583583",
            "title": "What if I had never tried it?",
            "author": "Valentino Rossi",
            "category": "Sport, Autobiography",
            "stock": 10,
            "createdAt": "2019-07-09T09:46:14.028Z",
            "updatedAt": "2019-07-09T09:48:12.929Z",
            "__v": 0
        }
    ]

### Transaction 
> GET /transactions/search?bookid=5ced0a3c144ad05c20b4c2dc
#### expected output
HTTP Status Code: 200
    [
        {
            "booklist": [
                {
                    "_id": "5ced0a3c144ad05c20b4c2dc",
                    "isbn": "1234567899",
                    "title": "Byousoku 5cm/s",
                    "author": "Makoto Shinkai",
                    "category": "Novel",
                    "stock": 10,
                    "createdAt": "2019-05-28T10:15:24.019Z",
                    "updatedAt": "2019-05-28T10:31:28.578Z",
                    "__v": 0
                }
            ],
            "_id": "5ced585827e847734096ebc8",
            "member": "5ced50c70a55e86eb8f6d6c0",
            "in_date": "2019-06-05T00:00:00.000Z",
            "out_date": "2019-05-29T00:00:00.000Z",
            "due_date": "2019-06-12T00:00:00.000Z",
            "fine": 0,
            "createdAt": "2019-05-28T15:48:40.646Z",
            "updatedAt": "2019-05-28T23:48:35.427Z",
            "__v": 0
        },
        {
            "booklist": [
                {
                    "_id": "5ced0a3c144ad05c20b4c2dc",
                    "isbn": "1234567899",
                    "title": "Byousoku 5cm/s",
                    "author": "Makoto Shinkai",
                    "category": "Novel",
                    "stock": 25,
                    "createdAt": "2019-05-28T10:15:24.019Z",
                    "updatedAt": "2019-05-28T10:31:28.578Z",
                    "__v": 0
                },
                {
                    "_id": "5ced647af00ace0076d4af29",
                    "isbn": "1234567898",
                    "title": "MongoDB - The Complete Developer's Guide Udemy",
                    "author": "AnyFile Download Service",
                    "category": "Information Technology",
                    "stock": 10
                }
            ],
            "_id": "5ced65fa86533e7c87b71cf2",
            "member": "5ced50c70a55e86eb8f6d6c0",
            "in_date": "2019-06-05T00:00:00.000Z",
            "out_date": "2019-05-29T00:00:00.000Z",
            "due_date": "2019-06-12T00:00:00.000Z",
            "fine": -1,
            "createdAt": "2019-05-28T16:46:50.972Z",
            "updatedAt": "2019-05-28T16:46:50.972Z",
            "__v": 0
        },
        {
            "booklist": [
                {
                    "_id": "5ced0a3c144ad05c20b4c2dc",
                    "isbn": "1234567899",
                    "title": "Byousoku 5cm/s",
                    "author": "Makoto Shinkai",
                    "category": "Novel",
                    "stock": 25,
                    "createdAt": "2019-05-28T10:15:24.019Z",
                    "updatedAt": "2019-05-28T10:31:28.578Z",
                    "__v": 0
                }
            ],
            "_id": "5cedb95d8418f70c800c936c",
            "member": "5ced50c70a55e86eb8f6d6c0",
            "in_date": "2019-06-20T00:00:00.000Z",
            "out_date": "2019-05-30T00:00:00.000Z",
            "due_date": "2019-06-15T00:00:00.000Z",
            "fine": 5000,
            "createdAt": "2019-05-28T22:42:37.114Z",
            "updatedAt": "2019-05-28T23:46:57.429Z",
            "__v": 0
        }
    ]
> POST /transactions
#### input
    {
        member: "5ced511b0a55e86eb8f6d6c1",
        out_date: "2019-07-01",
        due_date: "2019-07-10",
    }
#### expected output
HTTP Status Code: 201
    {
        "booklist": [
            "5ced0a3c144ad05c20b4c2dc",
            "5ced647af00ace0076d4af29"
        ],
        "_id": "5d24afac94369478d6209d4f",
        "member": "5ced511b0a55e86eb8f6d6c1",
        "in_date": null,
        "out_date": "2019-07-01T00:00:00.000Z",
        "due_date": "2019-07-10T00:00:00.000Z",
        "fine": -1,
        "createdAt": "2019-07-09T15:15:56.302Z",
        "updatedAt": "2019-07-09T15:15:56.302Z",
        "__v": 0
    }
> GET /transaction/detail/5ced0a3c144ad05c20b4c2dc
#### expected output
HTTP Status Code: 200
    {
        "booklist": [
            {
                "_id": "5ced0a3c144ad05c20b4c2dc",
                "isbn": "1234567899",
                "title": "Byousoku 5cm/s",
                "author": "Makoto Shinkai",
                "category": "Novel",
                "stock": 25,
                "createdAt": "2019-05-28T10:15:24.019Z",
                "updatedAt": "2019-05-28T10:31:28.578Z",
                "__v": 0
            },
            {
                "_id": "5ced647af00ace0076d4af29",
                "isbn": "1234567898",
                "title": "MongoDB - The Complete Developer's Guide Udemy",
                "author": "AnyFile Download Service",
                "category": "Information Technology",
                "stock": 7
            }
        ],
        "_id": "5d24afac94369478d6209d4f",
        "member": {
            "_id": "5ced511b0a55e86eb8f6d6c1",
            "name": "Stephen Lie",
            "address": "Jakarta",
            "zipcode": "14045",
            "email": "stephenlie55@gmail.com",
            "phone": "08986167288",
            "createdAt": "2019-05-28T15:17:47.223Z",
            "updatedAt": "2019-05-28T15:17:47.223Z",
            "__v": 0
        },
        "in_date": null,
        "out_date": "2019-07-01T00:00:00.000Z",
        "due_date": "2019-07-10T00:00:00.000Z",
        "fine": -1,
        "createdAt": "2019-07-09T15:15:56.302Z",
        "updatedAt": "2019-07-09T15:15:56.302Z",
        "__v": 0
    }
> PATCH /transactions/5d24afac94369478d6209d4f
#### input
    {
        in_date : '2019-07-13'
    }
    
#### expected output
HTTP Status Code: 200
    {
        "n": 1,
        "nModified": 1,
        "ok": 1
    }
#### after update
    {
        "booklist": [
            {
                "_id": "5ced0a3c144ad05c20b4c2dc",
                "isbn": "1234567899",
                "title": "Byousoku 5cm/s",
                "author": "Makoto Shinkai",
                "category": "Novel",
                "stock": 25,
                "createdAt": "2019-05-28T10:15:24.019Z",
                "updatedAt": "2019-05-28T10:31:28.578Z",
                "__v": 0
            },
            {
                "_id": "5ced647af00ace0076d4af29",
                "isbn": "1234567898",
                "title": "MongoDB - The Complete Developer's Guide Udemy",
                "author": "AnyFile Download Service",
                "category": "Information Technology",
                "stock": 7
            }
        ],
        "_id": "5d24afac94369478d6209d4f",
        "member": {
            "_id": "5ced511b0a55e86eb8f6d6c1",
            "name": "Stephen Lie",
            "address": "Jakarta",
            "zipcode": "14045",
            "email": "stephenlie55@gmail.com",
            "phone": "08986167288",
            "createdAt": "2019-05-28T15:17:47.223Z",
            "updatedAt": "2019-05-28T15:17:47.223Z",
            "__v": 0
        },
        "in_date": "2019-07-13T00:00:00.000Z",
        "out_date": "2019-07-01T00:00:00.000Z",
        "due_date": "2019-07-10T00:00:00.000Z",
        "fine": 3000,
        "createdAt": "2019-07-09T15:15:56.302Z",
        "updatedAt": "2019-07-09T15:46:33.260Z",
        "__v": 0
    }