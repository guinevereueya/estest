// Define a test case with a name and a test function
const test = {
  name: 'My test',
  fn: () => {
    // Test code goes here
  }
};

// Function to run the test case
const runTest = (testCase) => {
  try {
    testCase.fn();
    console.log(`Test '${testCase.name}' passed.`);
  } catch (err) {
    console.error(`TEST FAILED! ${testCase.name}`, err);
  }
};

// Run the test case
runTest(test);
