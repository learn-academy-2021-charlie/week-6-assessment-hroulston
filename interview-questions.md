# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: In order to fix the mistake you need to add a column to the Sightings model. You would do $rails g migration add_foreign_key_to_sightings in the terminal. Then in the migration file in def change we would type add_column :sightings, :animal_id, :integer. Then you would do $rails db:migrate in the terminal so it can be added to the schema. The name of the foreign key is animal_id and it would be part of the Sightings model.

  Researched answer: In my research it looked like I was close but not quite there. I do need to $rails g migration add_foreign_key_to_sightings but then inside the file under def change I would type add_foreign_key :sightings, :animal because sightings belongs to animal. Then $rails db:migrate to add to the schema.


2. Which RESTful API routes must always be passed params? Why?

  Your answer: The RESTful ApI routes that need params are GET when referring to show because it needs to know specifically which item to show the user. PUT needs a parameter when updating or editing because the program needs to know which item it is updating and finally DELETE requires a parameter so the program knows which item needs to be removed.

  Researched answer: The RESTful API routes are GET, PUT, POST AND DELETE. GET  retrieves a source. If you want a specific source then a param needs to be passed. PUT changes the state or updates a source, which in order for that to be accomplished a param is needed here as well. POST creates a resource so a param is not needed because a param does not exist. DELETE removes a source and needs a param so the program knows which source is to be removed.



3. Name three rails generator commands. What is created by each?

  Your answer:
  -$rails generate model: This command creates a file.rb in the folder model. In that file is a class

  -$rails generate resource: Combines the model and the controller into one command.

  -$rails generate controller: Creates the controller that coordinates the interaction between the user, views and the model. It creates a controller.rb file in controllers and a file in the views folder.

  Researched answer:
  -$rails generate model: Creates a new model and takes the name of the model, the name of each column and the data type of each column as arguments. The model is uppercase and singular.

  -$rails generate resource: This command sets up the migration and the model needed. It created a controller and generates any necessary routes. Takes same arguments as generate model.

  -$rails generate controller: This command creates a controller in the controller file and a folder in the views folder. The only argument it takes is the name of the controller. When using the generate model and generate controller methods, routes need to be manually created in the app.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students  
The controller method that would be called by this route would be index. This would show all of the students.         

method="POST"   /students       
The controller method that would be called by this route would be create. This would be the act of adding a new student.  

method="GET"    /students/new
The controller method that would be called by this route would be new. This action leads to a form so a new student can be created.    

method="GET"    /students/2  
The controller method that would be called by this route would be show. This action will render the student with the id of 2.    

method="GET"    /students/edit/2    
The controller method that would be called by this route would be edit. This is where a user can make changes. In this case, changes would be made specifically to user with the id of 2.

method="PATCH"  /students/2      
The controller method that would be called by this route would be update. This action replaces any information with student id:2 with anything that was put into the edit form.  

method="DELETE" /students/2      
The controller method that would be called by this route would be delete. This action deletes a source. In this instance student id:2 would be deleted.  



5. As a developer, you want to make an application that will help you manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1.As a user I can create a to do list
2.As a user I can add an item to the to do list
3.As a user I can remove an item from the to do list
4.As a user I can update an item from the to do list
5.As a user I can create multiple to do lists
6.As a user I can move an item from one to do list to another
7.As a user I can check mark items that have been completed
8.As a user I can check marked items are moved to the bottom of the list
9.As a user I can add a date to my item
10.As a user I can color code my to do lists
