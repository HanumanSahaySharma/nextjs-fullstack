import Image from 'next/image'
import Link from 'next/link'
import ButtonLink from './components/ButtonLink'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-black text-2xl">Hello, This is Hanuman and this is a NextJS App.</h1>
      <ButtonLink text="Products" url="/products" />
      <ButtonLink text="Upload Image" url="/upload" />
    </main>
  )
}
