ng new "appname" - eg ng new ecommapp- to create a new angular appname
ng serve -o - to run the app
ng generate module app-routing --flat --module=app - create module

--flat puts the file in src/app instead of its own folder.
--module=app tells the CLI to register it in the imports array of the AppModule.

ng generate module modules/Product  --module=app - create module

ng g s modules/product/service/productservice - create service

GIt
git init
git branch 'branch name' - to create branch
git checkout 'branch name' - to change 
git branch- list and say current branch
git branch -d = delete branch