export default defineEventHandler (async (event) => {
    
    const {code} = event.context.params
    const {currencyKey} = useRuntimeConfig()

    const uri = `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}&currencies=EUR%2CUSD%2CCAD&base_currency=${code}`
    

    const {data} = await $fetch(uri)

    return data
})