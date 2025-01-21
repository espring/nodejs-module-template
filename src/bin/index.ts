import dotenv from 'dotenv'
dotenv.config()
import { runCommand, program } from "./utils";


program
  .command('hello <name>')
  .action( async( name: string ) => {
    console.log(`Hello ${name}`)
  } )

runCommand(program)

