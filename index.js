#!/usr/bin/env node
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname,join } from 'path';


const filename= fileURLToPath(import.meta.url)
const filedir= dirname(filename)
const readFile = async() =>{

    // const newfile= join(filedir,'package.json')
    console.log (JSON.parse( await fs.readFile("C:\\Users\\saad\\Desktop\\intro_node\\package.json",'utf-8')))
}

readFile()