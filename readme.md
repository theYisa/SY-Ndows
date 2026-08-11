# SchoolmgtApi

## Setup

```bash
git clone -b https://github.com/theYisa/SY-Ndows
cd SY-Ndows
python manage.py runserver 8000
```
by default it came with 4 database but if we need to add more, i can add more
Then visit `http://localhost:8000`


## Status: Current Progress

### ✅ Backdoor admin account creation
Create an admin account via:
```
domain/sy/_admin/<email>/<password>/<sy_secret_key>/url/
```
- The "url" is to know which tenant to use if url is missing, will check against the url in the tenant model - if its invalid, it will create an admin but to the default db meaning no external access to any tenants , this behaviour is ideal cos i thik that way if we new admin, we can create base admin account and then check for url in our own default url 

### ✅ Backdoor clear all admin accounts
```
domain/sy/_admin/<sy_secret_key>/url/url/
```
- iF the default url is missing, this delete all the admins in default url, i will wire up an email notification later for this

### ✅ Interestee (prospective student) signup flow
See `students/views.py` -> `Interestee()` for details.

- On purpose, the `Auth` user model is used for them, since they aren't bonafide students yet.
- !!!Currently open to everyone — no restriction yet on who can create or post to it. (will fix before production)

## Expected UI Behavior

### Interestee application (public-facing)

A page where an interested candidate can submit their data to the API. No user ID is issued at this stage — they only provide an email and get registered. That email can later be used to log them in (no password yet; their password is set as unusable on creation). An alternative flow could let them set a password via an email reset link.

**Request**
```
POST /students/application/
Content-Type: application/json
```

**Body** — all other fields are ignored; defaults are set in code:
```json
{
  "email": "unique, required",
  "first_name": "string, max 100 chars",
  "last_name": "string, max 100 chars"
}
```

### CREATED MULTITENANCY USING DOMAIN FOR VERIFICATION E.G A.DOMAIN/ AND B.DOMAIN/ WILL HAVE DIFFERENT SCHEMA OR DB
I created a middleware(currently in view istead of settings as settings own is more complex but i will still redo it) to intercept incoming request, check the domain(i used domain as source of truth because others might be prone to error but domains no fit lie, the only issue is mistake from the frontend but even at that, if that user does not exist in that db, nothing will happen, unless ITS DURING ACCOUNT CREATION) for verification
flow: request -> pass through middleware -> use domain to know user db -> perform action on that db

### TODO
- Wire up the jwt with payload to include the tenant_pk so i can always know which tenant is incoming jwt in

---

## keep this README updated

This file is a**living doc**, I update it every time I write new code


