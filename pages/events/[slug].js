import {useRouter} from 'next/router'
import Layout from '../../components/Layout'

export default function EventPage() {
    const router = useRouter();
    console.log('router',router)
  return (
    <Layout>
        <h1>My Event</h1>
        <h3>{router.query.slug}</h3>
        <button onClick={() => router.push('/')}>Home</button>
    </Layout>
  )
}
