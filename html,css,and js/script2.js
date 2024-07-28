//accesing firat and second and last child nodes

console.log(document.body.firstChild)//fisrt child is tect nodes
console.log(document.body.lastChild)//acccesing last child
console.log(document.body.childNodes)//accessing all child nodes

let arr= Array.from(document.body.chileNodes)

//sibling and their parents 
//<html> is the parent of <body and <head> tag
ca = document.body.firstChild;
console.log(a.parentNode)
console.log(a.parentElement);
console.log(a.firstChild.nextSibling)