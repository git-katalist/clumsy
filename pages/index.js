import Head from "next/head";

export default function Home({ prefix }) {
  console.log("Path is" + prefix);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={`${prefix}/favicon.ico`} />
      </Head>

      <main>
        <h4>hello my beautiful world!</h4>
        <p>What's up my dude</p>
        <p>Let's say goodbye</p>
        <img src="/favicon.ico" alt="hey" />
      </main>
    </>
  );
}

// if (process.env.NODE_ENV === "production") {
//   return (
//     <div>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         hello my beautiful world!
//         <p>What's up my dude</p>
//         <img src="/favicon.ico" alt="hey" />
//       </main>
//     </div>
//   );
// } else {
//   return (
//     <div>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         hello my beautiful world!
//         <p>What's up my dude</p>
//         <img src="/favicon.ico" alt="hey" />
//       </main>
//     </div>
