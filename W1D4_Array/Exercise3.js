"use strict";

/*
Given an expression array exp, write a program to examine whether the pairs and the of “{“, “}”
are balanced in exp.
- Use a for .. of loop through the expression array
- push any left bracket onto a stack
- on a right bracket pop the stack and check that return value is a right bracket
- if not, then not balanced
- if stack empty at end then balanced, else not balanced
Example:
Input: exp = [ "{", "}", "{", "{", "}", "}“ ]
Output: Balanced
Input: exp = [ "{", "{", "}", "{" ]
Output: Not Balanced 
*/
