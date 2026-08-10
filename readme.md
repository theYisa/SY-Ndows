TO USE
    -   git clone repo
    -   cd name
    -   python manage.py runserver

    go to http://localhost:8000


CURRENT DONE
    -wired up the backdoor create admin account : domain/sy/_admin/email/password/sy_secret_key/
        *verification: must start with sy
        *must have only 4 number after 
    -wired up the backdoor clear all admin acc  : domain/sy/_admin/sy_secret_key
    -created the intererstee flow, check students/views/Interestee() for more details
        * on purpose, i used the Auth user for them cos they are not bonafide student
        * currently, everybody can access it, no restriction on who can create or post to it



NB we can wire up permission later in the admin panel as sy
EXPECTATION UI
* a page where interested candidate can send data to the api,
  here no user id is given, infact its like they have no user id, all they have is email and they are registered so in the future we can use tht email to log them in, no passord(or any other alyernatve u think, i said no password cos i set their password to unusbale but its also possible to wire up and endpoint where they can reset their password using email)
    
    - type : POST REQUEST to send the data, expect a json : {}

    - data needed, note all other data will be ignored as i have them set my default in code

        ------------
        email = unique=True
        first_name = models.CharField(max_length=100)
        last_name = models.CharField(max_length=100)
        ------------

    
    
    
* 



