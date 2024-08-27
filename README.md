# ACME-HOMES

A company website that builds homes.

Note: The development of this website was just for fun and to test my layout skills.
Images are from Freepik, Vecteezy, and Unsplash.


## HTML

I am using Bootstrap for layout and font-awesome for the awesome fonts. It was pretty interesting laying out the pages using Bootstrap, I had problems displaying rows at a column layout for smaller screens. The problem was Bootstrap could not identify my breakpoints perfectly. It would just display a column when the col ran out of room within. To fix this I used flexbox and simply applied my breakpoints suiting the relevant viewport’s needs for various screen sizes.


## CSS

The CSS is super simple I have consistent styling in play. It was really fun coloring the entire website using as little coloring as possible because I aimed to draw out the content instead. Within the CSS we have our usual hamburger that is displaying and not displayed at certain viewports. We also have an interesting class named hidden that is generated when the hamburger is clicked with the help of JavaScript.


## JavaScript

Within our script file, I first activated the hamburger menu.
The terminology is pretty simple. W access our hamburger by its attribute. Create a method that listens for a click and when that click occurs, we toggle a class named hidden that we created within our CSS. The class simply displays the menu list items. After all of this, we assign our created method to our menu. All meaning when the hamburger button has clicked a class is being generated which in turn a menu displays.

The script file also ignites our testimonials. 
The terminology is pretty simple also. We create an array with objects that have user data by property and value. Create a variable for the current slide and another variable for the length of the testimonials array and lastly another variable for our testimonial container within our HTML file. 

Create two functions, the first function just adds the current slide variable with the length of the array variable plus 1 and assigns it all to the current slide variable. 
The second function just adds the current slide variable with the length of the array variable minus 1 and assigns it all to the current slide variable.

Lastly, we declare another variable that is also being assigned a function that injects our array’s object’s property values using HTML tags into our testimonial container. Then using that variable, we assign it to the window so that when it loads the data has already been injected.

