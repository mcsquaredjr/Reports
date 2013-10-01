Reports
=======
Simple reporting engine with friendly UI

### How to compile to js

To compile UI navigate to ui folder and from there execute:

* `pyjsbuild --bootloader=projects_boot.js -o ../pyjs/ projects.py`
* `mv ../pyjs/bootstrap.js ../pyjs/projects_boot.js`
* `pyjsbuild --bootloader=milestones_boot.js -o ../pyjs/ milestones.py`
* `mv ../pyjs/bootstrap.js ../pyjs/milestones_boot.js`

Similarly execute the script to compile `form.py`.

### Database

To create database, run `python create_db.py`, it will create database, populate tables with sample data and create relations between tables.

If you run `python report_queries.py` it will update some of the data in the tables and. This script is also useful if you want to see how you get data for projects, milestones, or reports from the db. 
