import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import mainImage from '@/assets/images/fab-lentz-mRMQwK513hY-unsplash.jpg'
import { Button, Form, Spinner } from 'react-bootstrap'
import { FormEvent, useState } from 'react'

export default function Home() {

  const [quote, setQuote] = useState("");
  const [quoteLoading, setQuoteLoading] = useState(false);
  const [quoteLoadingError, setQuoteLoadingError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {

  }

  return (
    <>
      <Head>
        <title>ChatGPT App - create motivational quotes</title>
        <meta name="description" content="ChatGPT motivational quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Motivate Me AI</h1>
        <h2>powered by GPT-3</h2>
        <div>Enter a topic and the AI will generate a motivational quote.</div>
        <div className={styles.mainImageContainer}>
          <Image 
          src={mainImage}
          fill
          alt='image of neon lights of the words "Go up and never stop" over an upwards tilting arrow'
          priority
          className={styles.mainImage}
          />
        </div>
        <Form onSubmit={handleSubmit} className={styles.inputForm}>
          <Form.Group className='mb-3' controlId='prompt-input'>
            <Form.Label>Create an inspiring quote...</Form.Label>
            <Form.Control 
            name='prompt'
            placeholder='eg. success, romance, etc'
            maxLength={100}
            />
          </Form.Group>
          <Button type='submit' className='mb-3'>
            Inspire me
          </Button>
        </Form>
        { quoteLoading && <Spinner animation='border' /> }
        { quoteLoadingError && "Something went wrong. Please try again."}
        { quote && <h5>{quote}</h5>}
      </main>
    </>
  )
}
