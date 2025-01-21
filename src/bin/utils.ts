import { Command } from "commander"; 
import Debug from 'debug'

const DEBUG_TAG = 'SP'
export const debug = Debug(DEBUG_TAG);

export const program = new Command()

export const runCommand = ( async (cmd: Command) => {

  //@ts-ignore
  BigInt.prototype.toJSON = function() { return this.toString() }

  let balance = 0

  let start: number, end: number;

  cmd
    .version('0.1.0')
    .option('--verbose', 'toggle verbose log. NotImplement', () => { Debug.enable(DEBUG_TAG) })
    .hook('preAction', async (thisCmd, activeCmd) => {
      start = Date.now() 
    })
    .hook('postAction', async (thisCmd, activeCmd) => {
      end = Date.now()
      console.log(`==== Time: ${(end - start) / 1000} s`)
    })

  // parse arguments async
  try {
    await cmd.parseAsync(process.argv)
  } catch( error ) {
    console.error(error)

    process.exit(1)
  }
})



