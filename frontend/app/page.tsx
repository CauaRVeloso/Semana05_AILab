import Image from "next/image";

async function getHealthData(){
  const res =  await fetch('http://localhost:8000/api/health', {cache : 'no-store'});
  if (!res.ok) throw new Error('Falha ao buscar os dados da API');
  return res.json();
}

interface HealthData{
  status : string;
  items: string[];
}

export default async function Page() {
  const data: HealthData = await getHealthData();
  return(
    <main style={{ padding: '2rem' }}>
      <h1>Status da Aplicação: {data.status}</h1>
      <ul>
        {data.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </main>
  );
}

