## Lab 3: Asynchronous Actions and Callbacks
- read.readFiles(paths, callback)
    - function that takes in 3 (and only three) file paths to txt files, and using `fs.readFile`, reads them asynchronously, erroring out if there's any problem and returning an array of the contents of those three text files as each element.
    - `paths` takes in an array of 3 strings that should all point to text files.
    - `callback` should be a basic error-first callback.
    - arity of 2.
    
