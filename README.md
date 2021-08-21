# Classified Auth

The classified API contains routes for managing users and logging in. Unfortunately:

* Logging in doesn't do anything
* Passwords are inserted in plain text
* Any user can edit and delete any other user's profile
* Any user can list every user in the database
* Any user can make their account a superuser by setting the `role` to `superuser`.

Integrate proper authentication and authorization into the API. Note that the database already contains a superuser who should be able to perform any action.

## Rubric

* [ ] - Logging in issues a token
* [ ] - No plain-text passwords in the database
* [ ] - Regular users can only edit their own profiles
* [ ] - Regular users can't list every users
* [ ] - Superusers can perform every action
* [ ] - Regular users can't set their own roles on signup or editing
