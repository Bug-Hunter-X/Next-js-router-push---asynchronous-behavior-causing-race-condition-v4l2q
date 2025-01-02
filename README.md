# Next.js router.push() Asynchronous Behavior

This repository demonstrates a common issue in Next.js applications involving the asynchronous nature of the `router.push()` method.  The problem arises when code following `router.push()` relies on the navigation being complete before execution, potentially leading to race conditions and unexpected results.

## Problem Description
The `router.push()` method in Next.js is asynchronous.  This means that the code after the `router.push()` call will execute *before* the navigation is actually finished.  If subsequent code depends on the navigation being completed (e.g., accessing data from the new page), it may encounter unexpected errors.

## Solution
The solution is to use the `router.events` to track navigation events.  This allows you to run your dependent code only after the navigation has completed.

## How to reproduce:
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Click the button. Notice that 'Navigating...' is printed before the page actually changes.

## Bug and Solution Files:
* `bug.js`: Shows the code with the race condition.
* `bugSolution.js`: Provides a corrected version using `router.events`.