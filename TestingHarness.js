const testCases = {
  'Test Name': {
      actions() {
          return null
      },
      expectedValue: null
  },
}
const formatTest = (testName, actualValue, expectedValue) => {
  if (actualValue === expectedValue) {
      return `\u2713 ${testName}`
  }
  return `\u2718 ${testName}
  Expected: ${expectedValue}
  Received: ${actualValue}`
}

(function invokeTests() {
  const testResults = [];
  Object.entries(testCases).forEach(([testName, test]) => {
      try {
          const result = test.actions();
          testResults.push(formatTest(testName, result, test.expectedValue));
      } catch (e) {
          testResults.push(formatTest(testName, e.stack, test.expectedValue))
      }
  })
  if(testResults.length) {
      testResults.forEach((result) => console.log(result))
  }
})()
