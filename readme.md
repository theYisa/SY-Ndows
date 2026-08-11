# SchoolmgtApi

## Setup

```bash
git clone -b https://github.com/theYisa/SY-Ndows
cd SY-Ndows
python manage.py runserver 8000
```

Then visit `http://localhost:8000`


## Status: Current Progress

### ✅ Backdoor admin account creation
Create an admin account via:
```
domain/sy/_admin/<email>/<password>/<sy_secret_key>/
```
- Verification: `sy_secret_key`

### ✅ Backdoor clear all admin accounts
```
domain/sy/_admin/<sy_secret_key>/
```

### ✅ Interestee (prospective student) signup flow
See `students/views.py` -> `Interestee()` for details.

- On purpose, the `Auth` user model is used for them, since they aren't bonafide students yet.
- ⚠️ Currently open to everyone — no restriction yet on who can create or post to it. (will fix before production)

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

### TODO
- 

---

## keep this README updated

This file is a **living doc** — I update it every time I write new code, not just at the end. Use this structure so it stays consistent and easy to scan:

1. **Setup** — only touch this if install/run steps change.
2. **Status: Current Progress** — one `###` subsection per feature.
   - Prefix the heading with `✅` when it's done, `🚧` when in progress.
   - Under each: what it does, the route/entry point (file + function/class), and any known caveats or "wire up later" notes.
3. **Expected UI Behavior** — for each user-facing flow: method + endpoint, request body/shape, and what the client should assume (e.g. no auth yet, defaults applied).

