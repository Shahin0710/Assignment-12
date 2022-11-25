import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Box, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';
import ComponentsLayout from './common/ComponentsLayout';

const PageBlog = () => {
  return (
    <ComponentsLayout>
      <Box sx={{ mt: 5 }}>
        <Grid container spacing={4}>
            {/* What are the different ways to manage a state in a React application? */}
            <Grid item xs={12}>
              <Card sx={{ mb: 5 }}>
                <CardHeader
                  title="What are the different ways to manage a state in a React application?"
                  subheader="Please share if you like."
                />
                <CardContent>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={true} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>
                      Local (UI) state – Local state is data we manage in one or another component.
                      Local state is most often managed in React using the useState hook.
                      For example, local state would be needed to show or hide a modal 
                      component or to track values for a form component, such as form submission, 
                      when the form is disabled and the values of a form’s inputs.
                    </Typography>
                    <Typography paragraph>
                      Global (UI) state – Global state is data we manage across multiple components.
                      Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                      A common example of global state is authenticated user state. If a user is logged into 
                      our app, it is necessary to get and change their data throughout our application.
                      Sometimes state we think should be local might become global.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>

            {/* How does prototypical inheritance work? */}
            <Grid item xs={12}>
              <Card sx={{ mb: 5 }}>
                <CardHeader
                  title="How does prototypical inheritance work?"
                  subheader="Please share if you like."
                />
                <CardContent>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={true} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>
                      The Prototypal Inheritance is a feature in javascript used to add 
                      methods and properties in objects. It is a method by which an object 
                      can inherit the properties and methods of another object. 
                      Traditionally, in order to get and set the [[Prototype]] of an 
                      object, we use Object. getPrototypeOf and Object.
                    </Typography>
                    <Typography paragraph>
                      Every object with its methods and properties contains an internal 
                      and hidden property known as [[Prototype]]. The Prototypal Inheritance 
                      is a feature in javascript used to add methods and properties in 
                      objects. It is a method by which an object can inherit the properties 
                      and methods of another object. Traditionally, in order to get and set 
                      the [[Prototype]] of an object, we use Object.getPrototypeOf and 
                      Object.setPrototypeOf. Nowadays, in modern language, it is being set 
                      using
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>

            {/* What is a unit test? Why should we write unit tests? */}
            <Grid item xs={12}>
              <Card sx={{ mb: 5 }}>
                <CardHeader
                  title="What is a unit test? Why should we write unit tests?"
                  subheader="Please share if you like."
                />
                <CardContent>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={true} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>
                      The main objective of unit testing is to isolate written code to 
                      test and determine if it works as intended. Unit testing is an 
                      important step in the development process, because if done correctly, 
                      it can help detect early flaws in code which may be more difficult to 
                      find in later testing stages.
                    </Typography>
                    <Typography paragraph>
                     A unit test typically comprises of three stages: plan, cases and 
                     scripting and the unit test itself. In the first step, the unit 
                     test is prepared and reviewed. The next step is for the test cases 
                     and scripts to be made, then the code is tested.
                     Test-driven development requires that developers first write failing 
                     unit tests. Then they write code and refactor the application until the 
                     test passes. TDD typically results in an explicit and predictable code 
                     base.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>

            {/* React vs. Angular vs. Vue? */}
            <Grid item xs={12}>
              <Card sx={{ mb: 5 }}>
                <CardHeader
                  title="React vs. Angular vs. Vue?"
                  subheader="Please share if you like."
                />
                <CardContent>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={true} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>
                      React offers a Getting Started guide that should help one set up 
                      React in about an hour. The documentation is thorough and complete, 
                      with solutions to common issues already present on Stack Overflow. 
                      React is not a complete framework and advanced features require the 
                      use of third-party libraries. This makes the learning curve of the 
                      core framework not so steep but depends on the path you take with 
                      additional functionality. However, learning to use React does not 
                      necessarily mean that you are using the best practices.
                    </Typography>
                    <Typography paragraph>
                      Angular has a steep learning curve, considering it is a complete 
                      solution, and mastering Angular requires you to learn associated 
                      concepts like TypeScript and MVC. Even though it takes time to learn 
                      Angular, the investment pays dividends in terms of understanding how 
                      the front end works.
                    </Typography>
                    <Typography paragraph>
                     Vue provides higher customizability and hence is easier to learn 
                     than Angular or React. Further, Vue has an overlap with Angular and 
                     React with respect to their functionality like the use of components. 
                     Hence, the transition to Vue from either of the two is an easy option. 
                     However, simplicity and flexibility of Vue is a double-edged sword — it 
                     allows poor code, making it difficult to debug and test.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>

        </Grid>
      </Box>
    </ComponentsLayout>
  )
}

export default PageBlog;
