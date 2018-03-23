const program = require('commander')
const Repo = require('./lib/Repo')
const Generator = require('./lib/Generator')
const Util = require('./lib/Util')
const {
  STORE_NAME, STORE_EXT, 
  SORT_ASC, SORT_DESC, 
  DEFAULT_GENERATOR_SIZE, MIN_GENERATOR_SIZE} = require('./lib/constants')

const repo = new Repo(STORE_NAME, STORE_EXT)
const generator = new Generator()

program
  .version('1.0.0')
  .description('Random number generator')

program
  .command('list')
  .option('-s, --sort [sort]', 'Order to sort records')
  .alias('l')
  .description(`List all mobile numbers ever generated. Sort can be '${SORT_ASC}' or '${SORT_DESC}'`)
  .action(({sort}) => {
    console.log(Util.sortMobiles(repo.getStore(), sort))
  });

program
  .command('min')
  .description(`Print the Mininmum mobile number in all saved generated number`)
  .action(() => {
    console.log(Util.minMobile(repo.getStore()))
  })

program
  .command('max')
  .description(`Print the Maximum mobile number in all saved generated number`)
  .action(() => {
    console.log(Util.maxMobile(repo.getStore()))
  })

program
  .command('generate')
  .option('-s, --sort [sort]', `Order to sort records - ${SORT_ASC} or ${SORT_DESC}. Defaults to unsorted.`)
  .option('-t, --total [total]', `Total number of records to be generated. Defaults to ${DEFAULT_GENERATOR_SIZE}`)
  .alias('g')
  .description(`Generates x number of random mobile numbers specified by the <--total> option.
                generated numbers are unique relative to all numbers generated and persisted by this program`)
  .action(({sort, total}) =>{
    const store = repo.getStore()
    const calcSize = (
      !total || Number(total) > DEFAULT_GENERATOR_SIZE || Number(total) < MIN_GENERATOR_SIZE
    ) ? DEFAULT_GENERATOR_SIZE : Number(total)

    const randomUnique = generator.newUniqueMobiles(store, calcSize)
    repo.updateMobileNumbers([...store, ...randomUnique])

    console.log(Util.sortMobiles(randomUnique.slice(store.length), sort))

  })

program.parse(process.argv);
