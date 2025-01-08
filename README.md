# Closure Problem in TypeScript

This repository demonstrates a common closure problem encountered in JavaScript and TypeScript when using `setTimeout` within a loop. The issue arises because closures capture variables by reference, not by value.

## Problem
The `printNumbers2` function intends to print numbers 1 through 5 with a slight delay using `setTimeout`. However, due to the closure issue, it prints '6' five times because the loop completes before the `setTimeout` callbacks execute, and by that time, `i` has already reached its final value of 6.

## Solution
The solution involves creating a new scope for `i` using an immediately invoked function expression (IIFE) or using `let` within the loop (which is generally preferred for modern JavaScript/TypeScript). This ensures that each `setTimeout` callback captures a unique value of `i`. 