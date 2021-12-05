## Work Around Explorer

*copied from Code Acadamy*

### Technology - javascript and 
*Implementing Modules using ES6 Syntax*

Article on implementing modules in a browser’s runtime environment using ES6 modules syntax.

What are Modules?
Modules are reusable pieces of code in a file that can be exported and then imported for use in another file. 
A modular program is one whose components can be separated, used individually, and recombined to create a complex system.

Consider the diagram below of an imaginary program written in a file my_app.js:

diagram of a modular program. separate modules are combined to create a complex program

Note: The words “module” and “file” are often used interchangably

Instead of having the entire program written within my_app.js, its components are broken up into separate modules that each handle a particular task. 
For example, the database_logic.js module may contain code for storing and retrieving data from a database. Meanwhile, the date_formatting.js module 
may contain functions designed to easily convert date values from one format to another (a common headache among programmers!).*

[WorkAroundExplorer](https://gist.github.com/5b909f05b20db5eb60c4ad6d3504896f)


### What is it about

*WorkAround* is a research organization  providing data on salary trends in the tech industry. 
Open up salaryData.js to see the data they have collected. You’ll notice that they have also created a few functions for filtering that data to get subsets of data by role and by company.

*WorkAround*  wants to release a new web application called *WorkAround Explorer*  to make their data more easily viewable. 
This web app should allow users to choose specific roles and companies in the tech industry to see the following information:

1) The salary for the chosen role at the chosen company.
1) The industry average for the chosen role.
1) The average salary at the chosen company across all roles.
1) The industry average salary across all roles and all companies.
