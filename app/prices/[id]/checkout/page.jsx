import { promises as fs } from 'fs'
import path from 'path'
import MercadoPago from './mercado-pago/mercado-pago'
import styles from './page.module.scss'

export default async function Checkout({ params }) {

  const { id } = params
  const filePath = path.join(process.cwd(), '/public/suites.json')    // path.join() is needed for proper Vercel deployment
  const file = await fs.readFile(filePath)
  const suites = await JSON.parse(file)
  const suite = suites.find(object => object.id == id)

  return (
    <MercadoPago suite={suite} styles={styles} />
  )
}