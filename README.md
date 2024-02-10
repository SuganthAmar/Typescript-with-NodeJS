Create a package.json file </br>
npm init -y</br>

As the entry point of our application will be src/index.js, which we will address in the upcoming sections, you should </br>
update the main field in the package.json file from index.js to src/index.js:</br>
{</br>
  "name": "ts-node-express",</br>
  "version": "1.0.0",</br>
  "description": "",</br>
  "main": "src/index.js",</br>
  "scripts": {</br>
    "test": "echo \"Error: no test specified\" && exit 1"</br>
  },</br>
  ...</br>
}
</br>
Create a minimal server with Express</br>

Install all the dependencies
-> <b>npm install express typescript ts-node nodemon @types/node @types/express --save-dev</b></br>
<b>Run npx tsc</b></br>
<b>npm run dev</b></br>
Installing these packages will add a new devDependencies object to the package.json file, featuring version details for each package, as shown below:</br>
</br>
Next Modify the package.json file
Add new file nodemon.json file
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
now you're good to go - Enjoy!

