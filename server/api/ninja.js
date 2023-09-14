export default defineEventHandler((event) => {
    
    // handle query params
    const {name} = useQuery(event)  
    
    return {
        message: `Hello, ${name}!`
    }
})