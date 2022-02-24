
"use strict";

/* Given an expression array exp, write a program to examine whether the pairs and the of “{“, “}” are balanced in exp.  
	- Use a for .. of loop through the expression array
	- push any right bracket onto a stack
	- on a left bracket pop the stack and check that return value is a right bracket
	- if not, then no balanced
	- if stack empty at end then balanced, else not balanced
*/
//Example:  
const exp1 = [ "{", "}", "{", "{", "}", "}" ] ; 
//Output: Balanced 
 
const exp2 = [ "{", "{", "}", "{" ];
//Output: Not Balanced

/**
 * 
 * @param {Array} exp is array of brackets --{ or }
 * @returns {boolean} true if balanced else false
 */
function checkBalance(exp){
    const stack = [];
    let count = 0;
    let i = 0
    while (i < exp.length) {
        count = 0;
        if (exp[i] = exp[i+1] ) {
            stack.push(exp[i]);
            i++;
        } else {
            if (stack.length == 0) {
                return "unbalance";
            }
            count = stack.length;
            for ( let j = count; j>=0; j--) {
                if (stack[j] != exp[i+1+j]) {
                    return "unbalance";
                } else {
                    stack.pop();
                }
            }
        }
        

    }

    return undefined;
}
console.log("expect true: ", checkBalance(exp1));
console.log("expect false: ", checkBalance(exp2));