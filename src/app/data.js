export async function getData() {
    const res = await fetch('https://api.gphone168.shop/get')

   
    if (!res.ok) {
    
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
