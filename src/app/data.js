export async function getData() {
    const res = await fetch('https://pphone168.com/get')

   
    if (!res.ok) {
    
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }