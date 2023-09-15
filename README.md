## Source
https://www.testim.io/blog/detailed-introduction-javascript-bdd/


## BDD 
is a sort of extension or evolution of TDD that doesn’t get too bogged down by implementation details and technical matters, focusing instead on higher-level concerns, such as business requirements. It’s also all about communication. One of its most important and interesting characteristics is that it aims to encourage collaboration between developers, QA professionals, and business analysts, by providing a cohesive, ubiquitous language with which everyone can write and read requirements for the application.  

BDD achieves that by using plain-English requirements as a starting point for the tests, allowing and encouraging non-technical participants to collaborate.  

## BDD Workflow  
Let’s look at an example of a BDD workflow.  

### Step #1: Write the Behavior  

The first step is to write the behavior we want to create. Ideally, people from the business—such as the product owner or a client representative, or business analysts—should write the behavior, in English, using the Given/When/Then template (more on that later.)  

### Step #2: Convert the Plain English Behaviors Into Scripts  
The next step is to write programming tests based on the behaviors/requirements written in plain English.  

### Step #3: Implement the Behavior by Writing Production Code  
At this step, we implement the required functionality by writing the production code and then run the behavior to verify whether everything is correct. If it’s not, we change the production code until the behavior tests pass.  

### Step #4: Refactor If Needed  
Then we have the final, optional refactor step, same as with TDD. This stage is an opportunity for tidying up the code, removing duplication, unnecessary complexity, improving readability, and so on.  

## BDD Example in JavaScript  
Time for our BDD example. As we did with the TDD example, we’re going to be walking through the workflow steps, showing how we’d do them in practice. For the BDD example, we’ll use Cucumber.  