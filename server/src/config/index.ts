const environments = process.env.NODE_ENV || 'development'

console.log(`config environments: ${environments}`)

export default { ...require(`./${environments}`).default }