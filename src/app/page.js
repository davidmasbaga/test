async function getData() {
    
    const res = await fetch('api/typi');
      
    // Recommendation: handle errors
    if (!res.ok) {
      
      throw new Error('Failed to fetch data');
    }
   
    return res.json();
  }
   
  export default async function Page() {
    const data = await getData();
   
    return <main>

    {data.map(d=>(<>
    <h2>{d.title}</h2>
    <p className="text-xs">{d.body}</p>
    </>

    ))}

    </main>;
  }