Reports
=======
Simple reporting engine with friendly UI

### How to compile to js

To compile UI navigate to ui folder and from there execute:

* pyjsbuild --bootloader=projects_boot.js -o ../pyjs/ projects.py
* mv ../pyjs/bootstrap.js ../pyjs/milestones_boot.js
* pyjsbuild --bootloader=milestones_boot.js -o ../pyjs/ milestones.py
* mv ../pyjs/bootstrap.js ../pyjs/milestones_boot.js

Similarly execute the script to compile form.py
