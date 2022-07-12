const yargs = require('yargs')
const pkg = require('./package.json')
const {addNote, printNotes, removeNote} = require('./notes.controller')

yargs.version(pkg.version)

yargs.command({
  command: 'add',
  describe: 'Add new note to list',
  builder: {
    title: {
      type: 'string',
      describe: 'Node title',
      demandOption: true
    }
  },
  handler({title}) {
    addNote(title)
  }
})
yargs.command({
    command: 'list',
    describe: 'Print all note',
    async handler() {
      printNotes()
    }
})
yargs.command({
  command: 'remove',
  describe: 'Remove note',
  async handler() {
    removeNote(1657622022744)
  }
})

yargs.parse()